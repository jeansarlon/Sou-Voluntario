;
(function() {

'use strict';
/**
* 
* @Toat  Service
* @author    Jean Sarlôn
* @example  
*
* Toast.show('Hellow Toast', 5000, 'success');
*
* @param     {Object} data String to show in a toast
* @return    {String} time Time in mileseconds
* @return    {String} className 'error' or 'success' to change style of Toast.
* @version   1.0
*
*/
app.service('ToastService', [ToastService]);


function ToastService() {
    var service = {
        show: show,
    };
    return service;
    
    //////////////// definition
    function show(data, time, className) {
        Materialize.toast(data, time, className);
    }
}
})();
