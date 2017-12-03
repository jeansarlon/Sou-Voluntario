;
(function() {

   'use strict';

   /**
   * Main navigation
   *
   * Usage:
   * <sv-panel-nav></sv-panel-nav>
   *
   * sv-panel-nav.html file
   *
   */
   app.directive('svPanelNav',['AuthService','LocalStorage', 'CONSTANTS', svPanelNav]);

   function svPanelNav(AuthService, LocalStorage, CONSTANTS) {
      // Definition of directive
      var directiveDefinitionObject = {
         restrict: 'E',
         scope: {
         },
         templateUrl: 'components/directives/sv-panel-nav/sv-panel-nav.html',
         link: function(scope, elem, attrs, ctrl) {
             scope.logout= AuthService.logout;
             scope.user = LocalStorage.get('user');
             scope.public = CONSTANTS.API_PUBLIC;
             $(".button-collapse").sideNav();
             $('.collapsible').collapsible();
         }
      };

      return directiveDefinitionObject;
   }

})();
