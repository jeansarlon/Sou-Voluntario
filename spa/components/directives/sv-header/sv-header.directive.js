;
(function() {

   'use strict';

   /**
   * header, just a HTML template
   * @author Jean Sarlon
   *
   * @example
   * <sv-header><sv-header/>
   *
   */
   app.directive('svHeader',['$rootScope', 'crumble', svHeader]);
   function svHeader($rootScope, crumble) {

    // Definition of directive
        return {
            restrict: 'E',
            scope: {
                name: "="
            },
            link: function(scope, element, attrs) {
                scope.viewInfo= scope.name;
                scope.crumble = crumble;
            },
            templateUrl: 'components/directives/sv-header/sv-header.html'
        };
    }

})();
