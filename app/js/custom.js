(function ($) {
    "use strict";

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
      })

})(jQuery);
