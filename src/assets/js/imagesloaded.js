(function(window, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['eventEmitter/EventEmitter', 'eventie/eventie'], function(EventEmitter, eventie) {
            return factory(window, EventEmitter, eventie)
        })
    } else if (typeof exports === 'object') {
        module.exports = factory(window, require('wolfy87-eventemitter'), require('eventie'))
    } else {
        window.imagesLoaded = factory(window, window.EventEmitter, window.eventie)
    }
})(window, function factory(window, EventEmitter, eventie) {
    'use strict';
    var $ = window.jQuery;
    var console = window.console;
    var hasConsole = typeof console !== 'undefined';

    function extend(a, b) {
        for (var prop in b) {
            a[prop] = b[prop]
        }
        return a
    }
    var objToString = Object.prototype.toString;

    function isArray(obj) {
        return objToString.call(obj) === '[object Array]'
    }

    function makeArray(obj) {
        var ary = [];
        if (isArray(obj)) {
            ary = obj
        } else if (typeof obj.length === 'number') {
            for (var i = 0, len = obj.length; i < len; i++) {
                ary.push(obj[i])
            }
        } else {
            ary.push(obj)
        }
        return ary
    }

    function ImagesLoaded(elem, options, onAlways) {
        if (!(this instanceof ImagesLoaded)) {
            return new ImagesLoaded(elem, options)
        }
        if (typeof elem === 'string') {
            elem = document.querySelectorAll(elem)
        }
        this.elements = makeArray(elem);
        this.options = extend({}, this.options);
        if (typeof options === 'function') {
            onAlways = options
        } else {
            extend(this.options, options)
        }
        if (onAlways) {
            this.on('always', onAlways)
        }
        this.getImages();
        if ($) {
            this.jqDeferred = new $.Deferred()
        }
        var _this = this;
        setTimeout(function() {
            _this.check()
        })
    }
    ImagesLoaded.prototype = new EventEmitter();
    ImagesLoaded.prototype.options = {};
    ImagesLoaded.prototype.getImages = function() {
        this.images = [];
        for (var i = 0, len = this.elements.length; i < len; i++) {
            var elem = this.elements[i];
            if (elem.nodeName === 'IMG') {
                this.addImage(elem)
            }
            var nodeType = elem.nodeType;
            if (!nodeType || !(nodeType === 1 || nodeType === 9 || nodeType === 11)) {
                continue
            }
            var childElems = elem.querySelectorAll('img');
            for (var j = 0, jLen = childElems.length; j < jLen; j++) {
                var img = childElems[j];
                this.addImage(img)
            }
        }
    };
    ImagesLoaded.prototype.addImage = function(img) {
        var loadingImage = new LoadingImage(img);
        this.images.push(loadingImage)
    };
    ImagesLoaded.prototype.check = function() {
        var _this = this;
        var checkedCount = 0;
        var length = this.images.length;
        this.hasAnyBroken = false;
        if (!length) {
            this.complete();
            return
        }

        function onConfirm(image, message) {
            if (_this.options.debug && hasConsole) {
                console.log('confirm', image, message)
            }
            _this.progress(image);
            checkedCount++;
            if (checkedCount === length) {
                _this.complete()
            }
            return true
        }
        for (var i = 0; i < length; i++) {
            var loadingImage = this.images[i];
            loadingImage.on('confirm', onConfirm);
            loadingImage.check()
        }
    };
    ImagesLoaded.prototype.progress = function(image) {
        this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
        var _this = this;
        setTimeout(function() {
            _this.emit('progress', _this, image);
            if (_this.jqDeferred && _this.jqDeferred.notify) {
                _this.jqDeferred.notify(_this, image)
            }
        })
    };
    ImagesLoaded.prototype.complete = function() {
        var eventName = this.hasAnyBroken ? 'fail' : 'done';
        this.isComplete = true;
        var _this = this;
        setTimeout(function() {
            _this.emit(eventName, _this);
            _this.emit('always', _this);
            if (_this.jqDeferred) {
                var jqMethod = _this.hasAnyBroken ? 'reject' : 'resolve';
                _this.jqDeferred[jqMethod](_this)
            }
        })
    };
    if ($) {
        $.fn.imagesLoaded = function(options, callback) {
            var instance = new ImagesLoaded(this, options, callback);
            return instance.jqDeferred.promise($(this))
        }
    }

    function LoadingImage(img) {
        this.img = img
    }
    LoadingImage.prototype = new EventEmitter();
    LoadingImage.prototype.check = function() {
        var resource = cache[this.img.src] || new Resource(this.img.src);
        if (resource.isConfirmed) {
            this.confirm(resource.isLoaded, 'cached was confirmed');
            return
        }
        if (this.img.complete && this.img.naturalWidth !== undefined) {
            this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
            return
        }
        var _this = this;
        resource.on('confirm', function(resrc, message) {
            _this.confirm(resrc.isLoaded, message);
            return true
        });
        resource.check()
    };
    LoadingImage.prototype.confirm = function(isLoaded, message) {
        this.isLoaded = isLoaded;
        this.emit('confirm', this, message)
    };
    var cache = {};

    function Resource(src) {
        this.src = src;
        cache[src] = this
    }
    Resource.prototype = new EventEmitter();
    Resource.prototype.check = function() {
        if (this.isChecked) {
            return
        }
        var proxyImage = new Image();
        eventie.bind(proxyImage, 'load', this);
        eventie.bind(proxyImage, 'error', this);
        proxyImage.src = this.src;
        this.isChecked = true
    };
    Resource.prototype.handleEvent = function(event) {
        var method = 'on' + event.type;
        if (this[method]) {
            this[method](event)
        }
    };
    Resource.prototype.onload = function(event) {
        this.confirm(true, 'onload');
        this.unbindProxyEvents(event)
    };
    Resource.prototype.onerror = function(event) {
        this.confirm(false, 'onerror');
        this.unbindProxyEvents(event)
    };
    Resource.prototype.confirm = function(isLoaded, message) {
        this.isConfirmed = true;
        this.isLoaded = isLoaded;
        this.emit('confirm', this, message)
    };
    Resource.prototype.unbindProxyEvents = function(event) {
        eventie.unbind(event.target, 'load', this);
        eventie.unbind(event.target, 'error', this)
    };
    return ImagesLoaded
});