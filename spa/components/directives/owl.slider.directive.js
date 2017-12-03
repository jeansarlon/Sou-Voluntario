;
(function() {

   'use strict';

   /**
   * Owl caroucel 2 directive
   *
   * Usage:
   * <div myslider>
   *   <ul class="slider">
   *     ...
   *   </ul>
   * </div>
   *
   * or
   *
   * <myslider>
   *   <ul class="owl-carousel">
   *     ...
   *   </ul>
   * </myslider>
   *
   * @url https://owlcarousel2.github.io/OwlCarousel2/
   *
   */
   app.directive('myslider', slider);

   function slider() {

      // Definition of directive
      var directiveDefinitionObject = {
         restrict: 'AE',
         link: function(scope, element, attrs) {

            scope.$watch(function() {
               angular.element(document).ready(function() {
                  $('.owl-carousel').owlCarousel({
                     loop: true,
                     margin: 10,
                     nav: false,
                     responsive: {
                        0: {
                           items: 1
                        },
                        600: {
                           items: 1
                        },
                        1000: {
                           items: 1
                        }
                     }
                  })
               });
            });

            // keyboard navigation
            $(document).keyup(function(i) {
               if (i.keyCode == 37) {
                  $('.gallery').trigger('prev.owl.carousel');
               } else if (i.keyCode == 39) {
                  $('.gallery').trigger('next.owl.carousel');
               }
            });

         }
      };

      return directiveDefinitionObject;
   }

})();
