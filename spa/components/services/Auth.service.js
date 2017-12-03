;
(function() {

'use strict';
/**
* $http service abstraction to make API calls with any HTTP method,
* custom url and data object to be sent as request.
* Every REST API call is measured, you can see how much it took
* in the console.
*
* @Auth  Service
* @author    Jean Sarlôn
* @example   Inject AuthService as the dependency and then use it this way:
*
* AuthService.login()
.then(function(data) {
console.log(data);
}, function(error) {
console.log(error);
});
*
* @return    {Object} data Data to be sent as the request message data
* @version   1.0
*
*/
app.service('AuthService', ['QueryService', 'LocalStorage', '$location', AuthService]);

//////////////// factory
function AuthService(QueryService, LocalStorage, $location) {
    var service = {
        login: login,
        logout: logout,
    };
    return service;
    
    //////////////// definition
    function login(data) {
        return QueryService.query('POST', '/login/', null, data)
    }
    function logout() {
        LocalStorage.remove('user');
        console.log("logout");
        $location.path( "/" );
    }
}
})();
