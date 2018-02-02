
(function () {

  /*
   * Open the drawer when the menu is clicked.
   */

  var menu = $('.nav-inner'),
      menuLinks = $('.nav-close a'),
      drawer = $('.nav-close'),
      workList = $('.work-list'),
      workListInner = $('.work-list-inner')
      messageMe = $('.message-me')
      messageMeTxt = $('.message-me-txt');

      menu.on('click', function (e) {
        drawer.toggleClass('nav-open');
        e.stopPropagation();
      });

      menuLinks.on('click', function (e) {
        drawer.toggleClass('nav-open');
      });

      /*
       * menu scroll system
       */

      drawer.on('click', 'a', function(e){
        var position = $(this).data('position');
        $('html, body').animate({
          scrollTop: $(position).offset().top
        }, 'slow');
    	});

      /*
       * work list system
       */

       workList.on('click', '.work-list-inner', function(e){
         workListInner.removeClass('work-list-click');
         $( this ).toggleClass('work-list-click');
         $('.work-tools-inner').hide();
         var getWork = $( this ).data('work');
         $(getWork).show();
         $(getWork).addClass('text-focus-in');
     	});

      /*
       * work list system
       */

        messageMe.on('click', function(e){


        messageMeTxt.show();
        messageMeTxt.addClass('text-focus-in');
     });



} () );
