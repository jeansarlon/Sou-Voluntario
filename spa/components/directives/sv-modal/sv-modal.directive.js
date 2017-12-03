;
(function() {
   'use strict';
   /**
     * Modal component
     *
     * Usage:
     * <sv-modal></sv-modal>
     *
     * sv-modal.html file
     *
    */
   app.directive('svModal', ['ModalService','$rootScope', svModal]);

   function svModal(Modal, $rootScope) {
      // Definition of dir ective
      var directiveDefinitionObject = {
         restrict: 'AE',
         scope: {
            content: '='
         },
         templateUrl: 'components/directives/sv-modal/sv-modal.html',
         link: function(scope, elem, attrs, ctrl) {
            angular.element(document).ready(function() {
               if (scope.content) {
                  Modal.set(scope.content.header, scope.content.body, scope.content.footer);
               }
               $rootScope.$on('setModal', function(event, args) {
                   scope.modal = args;
               });
               Modal.init();

            });
         }
      };
      return directiveDefinitionObject;
   }
})();
