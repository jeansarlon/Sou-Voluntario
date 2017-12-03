;
(function() {

'use strict';
/**
* 
* 
* 
* 
*
* @Modal  Service
* @author    Jean Sarlôn
* @example  This service provide methods to use Modal plugin from Materialize
*
* Modal.init(); // init '.modal' class to provide a materialize modal 
* Modal.set; // Set values for modal
* Modal.show() // Show modal
*
* @version   1.0
*
*/
app.service('ModalService', ['$rootScope', TagService]);

//////////////// factory
function TagService($rootScope) {
    var service = {
        set: set,
        init: init,
        show: show,
        close: close,
        content: {
            body: "",
            header:"",
            footer: "",
        }
    };
    return service;
    
    //////////////// definition
    function set(header, body,footer) {
        var content = {
            body: body,
            header:header,
            footer: footer,
        }
        $rootScope.$broadcast("setModal", content);
    };
    
    function init() {
        console.log("Init modal");
        $('.modal').modal();
    }
    
    function show(modal) {
        console.log("show modal");
        $(modal).modal('open');
    }
    function close(modal) {
        console.log("close modal");
        $(modal).modal('close');
    }
    
      
}
})();
