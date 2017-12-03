;
(function() {

   'use strict';

   /**
   * Be a Volunteer component, just a HTML template
   * @author Jean Sarlon
   *
   * @example
   * <sv-be-a-volunteer><sv-be-a-volunteer/>
   *
   */
   app.directive('svBeAVolunteer',fn);
   function fn() {

    // Definition of directive
        return {
            restrict: 'E',
            link: function(scope, element, attrs) {
            },
            templateUrl: 'components/directives/sv-be-a-volunteer/sv-be-a-volunteer.html'
        };
    }

})();
