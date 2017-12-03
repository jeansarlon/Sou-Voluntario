;
(function() {
    'use strict';
    /**
     * Feature panel bar
     *
     * Usage:
     * <sv-featuredbar></sv-featuredbar>
     *
     * sv-nav.html file
     *
    */
    app.directive('svFeaturedbar', featuredbar);
    
    function featuredbar() {
        
        // Definition of directive
        var directiveDefinitionObject = {
            scope: {
                data:'='
            },
            restrict: 'E',
            templateUrl: 'components/directives/sv-featuredbar/sv-featuredbar.html',
            link: function(scope, elem, attrs, ctrl) {
                
            }
        };
        return directiveDefinitionObject;
    }
})();
