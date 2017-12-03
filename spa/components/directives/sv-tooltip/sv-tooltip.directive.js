;
(function() {
    'use strict';
    
    /**
    * tooltip directive to init Materialize tooltip
    *
    *
    * <a href="" sv-tooltip>
    *     ...
    * </a>
    *
    *
    */
    app.directive('svTooltip', tooltip);
    function tooltip() {
        // Definition of directive
        var directiveDefinitionObject = {
            restrict: 'A',
            link: function(scope, element, attrs) {
                scope.$watch(function() {
                    angular.element(document).ready(function() {
                        $(document).ready(function() {
                            $('.tooltipped').tooltip({delay: 50});
                        });
                    });
                });
            }
        };
        return directiveDefinitionObject;
    }

})();
