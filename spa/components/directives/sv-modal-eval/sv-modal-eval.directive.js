;
(function() {
   'use strict';
   /**
     * Modal Evaluation component
     *
     * Usage:
     * <sv-modal-eval></sv-modal-eval>
     *
     * sv-modal-eval.html file
     *
    */
   app.directive('svModalEval', ['ModalService','$rootScope', 'ToastService', svModalEval]);
   function svModalEval(Modal, $rootScope,Toast) {
    //    Definition of dir ective
        var directiveDefinitionObject = {
            restrict: 'AE',
            scope: {
                evaluate: '&',
                formdata: '='
            },
            templateUrl: 'components/directives/sv-modal-eval/sv-modal-eval.html',
            link: function(scope, elem, attrs, ctrl) {
                angular.element(document).ready(function() {
                    Modal.init();
                });
               
                scope.validate = function() {
                    if (!scope.formdata.stars) {
                       Toast.show("O campo avaliação é obrigatório!",4000);
                       return;
                    }
                    
                    if (!scope.formdata.comment) {
                        Toast.show("O campo Comentário é obrigatório!",4000);
                        return;
                    }
                    
                    scope.evaluate();
                }
            }
        };
        return directiveDefinitionObject;
    }
})();
