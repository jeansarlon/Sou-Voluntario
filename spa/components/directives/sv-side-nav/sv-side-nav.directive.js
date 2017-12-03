;
(function() {
    'use strict';
    /**
     * Main navigation
     *
     * Usage:
     * <sv-side-nav></sv-side-nav>
     *
     * sv-nav.html file
     *
    */
    app.directive('svSideNav', svNav);
    
    function svNav() {
        
        // Definition of directive
        var directiveDefinitionObject = {
            restrict: 'E',
            templateUrl: 'components/directives/sv-side-nav/sv-side-nav.html',
            link: function(scope, elem, attrs, ctrl) {
                $('.collapsible').collapsible();
            }
        };
        
        return directiveDefinitionObject;
    }
})();
