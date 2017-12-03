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
    app.directive('svTag',[ 'TagService','$timeout',svTag]);
    function svTag(TagService, $timeout) {
        // Definition of directive
        var directiveDefinitionObject = {
            restrict: 'AE',
            scope: {
                'tags':'=',
            },
            link: function(scope, element, attrs) {
                angular.element(document).ready(function() {
                    $timeout(function(){
                        TagService.init(scope.tags);
                    }, 0)
                });
            }
        };
        return directiveDefinitionObject;
    }

})();
