;
(function() {

   'use strict';

   /**
   * Opportunity component of Home page, just a HTML template
   * @author Jean Sarlon
   *
   * @example
   * <sv-home-opportunity></sv-home-opportunity>
   *
   */
   app.directive('svHomeOpportunity',['$filter',fn]);
   function fn($filter) {

    // Definition of directive
        return {
            scope: {
                opps: '='
            },
            restrict: 'E',
            link: function(scope, element, attrs) {
                scope.getNumber = function(num) {
                    return new Array(num);   
                }
                scope.getDate = function(date) {
                    var d = $filter('date')(date, "dd/MMM/yyyy");
                    if (d) {
                        d = d.split("/");
                        return {
                            day :d[0],
                            month :d[1],
                            year: d[2]
                        }
                    }
                    
                    
                }
            },
            templateUrl: 'components/directives/sv-home-opportunity/sv-home-opportunity.html'
        };
    }
})();
