;
(function() {

'use strict';
/**
* 
* 
* 
* 
*
* @Validate  Service
* @author    Jean Sarlôn
* @example  This service provide methods to valiate forms with ngValidate
*
* validateService.validate(form); // form is a $scope.myForm
*
* @version   1.0
*
*/
app.service('ValidateService', ['$rootScope', 'ToastService', 'CONSTANTS', ValidateService]);

//////////////// factory
function ValidateService($rootScope, Toast, CONST) {
    var service = {
        validate: validate,
    };
    return service;
    
    //////////////// definition
    function validate(form) {
        if (form.$invalid && form.$error) {
            form.$error.required.map(function(el, index) {
                Toast.show(`O Campo ${CONST.FORMS[el.$name]} é obrigatório!!`,4000, "error")
            })
            return false;
        }
        if (form.password.$modelValue != form.rptPassword.$modelValue) {
            Toast.show("As senhas não coincidem!!",5000, "error")
            return false;
            
        }
        return true;
    };
}
})();
