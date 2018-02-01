
(function () {

  /*
   * Open the drawer when the menu is clicked.
   */

  var menu = $('.nav-inner'),
      menuLinks = $('.nav-close a'),
      drawer = $('.nav-close');

      menu.on('click', function (e) {
        drawer.toggleClass('nav-open');
        e.stopPropagation();
      });

      menuLinks.on('click', function (e) {
        drawer.toggleClass('nav-open');
      });

      //menu scroll system
      drawer.on('click', 'a', function(e){
        var position = $(this).data('position');
        $('html, body').animate({
          scrollTop: $(position).offset().top
        }, 'slow');
    	});

} () );
