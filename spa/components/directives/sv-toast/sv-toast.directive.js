;
(function() {
    'use strict';
    
    /**
    * Toast directive to show a Toast
    *
    *
    * <div sv-toast>
    *    
    * </div>
    *
    *
    */
    app.directive('svToast',['ToastService' ,toast]);
    function toast(ToastService) {
        // Definition of directive
        var directiveDefinitionObject = {
            restrict: 'AE',
            link: function(scope, element, attrs) {
                scope.show = ToastService.show;
            }
        };
        return directiveDefinitionObject;
    }

})();
