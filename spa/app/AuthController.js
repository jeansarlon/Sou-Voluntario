/**
* Register Controller
*
*
*/

;(function() {
    app.controller('AuthController', AuthController);
    AuthController.$inject = ['ToastService', 'AuthService','$scope', '$rootScope','$location', 'LocalStorage'];
    
    function AuthController(Toast, Auth, $scope, $rootScope, $location, LocalStorage) {
        $rootScope.hasNav = false;
        var self = this;
        self.viewInfo = {};
        self.viewInfo.name = 'Login';
        
        self.formData = {};
      
        self.send = function(form) {
            Auth.login(self.formData).then(function(data) {
                LocalStorage.set('user', data.data);
                $location.path( "/home" );
            }, function(error) {
                if (error.status == 404) {
                    Toast.show("Os dados de acesso estão incorretos!", 4000);
                }
                return false;
            });
        }
        
        $scope.$on("$destroy", function() {
            $rootScope.hasNav = true;
        });
    }
})();
