;
(function() {

   'use strict';

   /**
   * accessibility, just a HTML template
   * @author Jean Sarlon
   *
   * @example
   * <sv-accessibility><sv-accessibility/>
   *
   */
   app.directive('svAccessibility',['$rootScope',fun]);
   function fun($rootScope) {

    // Definition of directive
        return {
            restrict: 'E',
            scope: {
            },
            link: function(scope, element, attrs) {
                var baseFont = 15;
                var current = 15;
                scope.inc = function() {
                    if (current >= 19) {
                        return;    
                    }
                    
                    $rootScope.accStyle = {
                        "font-size": (current+1) + "px"
                    }
                    current++;
                }
                scope.dec = function() {
                    if (current <=15) {
                        return;
                    }
                    
                    $rootScope.accStyle = {
                        "font-size": (current-1) + "px"
                    }
                    current--;
                }
                scope.default = function() {
                    $rootScope.accStyle = {};
                    current = 15;
                }
                
            },
            templateUrl: 'components/directives/sv-accessibility/sv-accessibility.html'
        };
    }

})();
