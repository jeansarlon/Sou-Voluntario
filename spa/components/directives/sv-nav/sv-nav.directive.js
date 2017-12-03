;
(function() {

   'use strict';

   /**
   * Main navigation
   *
   * Usage:
   * <sv-nav></sv-nav>
   *
   * sv-nav.html file
   *
   */
   app.directive('svNav', svNav);

   function svNav() {

      // Definition of directive
      var directiveDefinitionObject = {
         restrict: 'E',
         templateUrl: 'components/directives/sv-nav/sv-nav.html',
         link: function(scope, elem, attrs, ctrl) {
         }
      };

      return directiveDefinitionObject;
   }

})();
