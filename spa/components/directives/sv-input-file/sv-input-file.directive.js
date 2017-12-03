;
(function() {
    'use strict';
    /**
     * File to Base64 directive
     *
     * <input type="file" sv-form> </input>
     *
     *
    */
    app.directive('svInputFile', file)
    function file() {
        return {
            scope: {
                key:'=',
                fm:'='
            },
            link: function(scope, element, attrs) {
                element.find("input").bind("change", function(changeEvent) {
                    var reader = new FileReader();
                    reader.onload = function(loadEvent) {
                        scope.$apply(function() {
                            scope.key = loadEvent.target.result;
                        });
                    }
                    if (typeof(changeEvent.target.files[0]) === 'object') {
                        reader.readAsDataURL(changeEvent.target.files[0]);
                    };
                });

            },
            templateUrl: 'components/directives/sv-input-file/sv-input-file.html',
            restrict: 'E'
        };
    };

})();
