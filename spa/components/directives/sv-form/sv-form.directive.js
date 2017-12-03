;
(function() {
    'use strict';
    
    /**
    * Form directive to init Materialize functions
    *
    *
    * <sv-form>
    *     ...
    * </sv-form>
    *
    *
    */
    app.directive('svForm',['$timeout', form]);
    function form($timeout) {
        // Definition of directive
        var directiveDefinitionObject = {
            restrict: 'AE',
            link: function(scope, element, attrs) {
                scope.$watch(function() {
                    angular.element(document).ready(function() {
                        $('select').material_select();
                    });
                });
            }
        };
        return directiveDefinitionObject;
    }

})();
