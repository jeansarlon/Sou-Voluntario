;
(function() {
    'use strict';
    
    /**
    * File Read directive
    *
    * <input type="file" sv-form> </input>
    *
    *
    */
    app.directive('fileModel',['$parse',file])
    
    function file($parse) {
        return {
            link: function(scope, element, attrs) {
                var model = $parse(attrs.fileModel);
                var modelSetter = model.assign;

                element.bind('change', function(){
                    scope.$apply(function(){
                        modelSetter(scope, element[0].files[0]);
                    });
                });
            },
            restrict: 'A'
        };
    };

})();
