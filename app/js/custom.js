(function ($) {
    "use strict";
   
    // sticky menu
    let header = $('.header');
    var win = $(window);

    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < 1) {
           header.removeClass("scroll-on");
       } else {
           header.addClass("scroll-on");
       }
    });

    $('header .navbar li.smoth-menu a').on('click', function(e) {
      var $anchor = $(this);
      var headerH = '80';
      $('html,body').stop().animate(
        {
          scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
      }, 500, 'easeOutQuad');
      event.preventDefault();
  });

    $('.masson-grid').isotope({
        itemSelector: '.portfolio-item',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: '.grid-sizer',
          gutter: 30,
        }
      });

      $(".portfolio-menu ul li a").on("click", function(e) {
        e.preventDefault();
        let filterValue = $(this).attr('data-filter');
        $('.masson-grid').isotope({ filter: filterValue });
      });

    // change active class on buttons
    $('.portfolio-menu').each(function (i,buttonGroup) {
        let $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'a', function () {
            $buttonGroup.find('.active').removeClass('active');
            $(this).addClass('active');
        });
    });


      $(".branding-wrap").owlCarousel({
          loop: true,
          autoPlay: true,
          items: 6,
          margin: 30,
          nav: true,
      });

      $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
      
        scrollText: 'Back to Top <i class="fa fa-angle-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
      });

})(jQuery);
