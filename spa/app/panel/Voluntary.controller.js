/**
 * Panel Voluntary controller
 *
*/

(function() {
    app.controller('Panel.VoluntaryController', Controller);
    Controller.$inject = ['$scope','$rootScope','LocalStorage','ToastService','ValidateService','$timeout','CONSTANTS','VoluntaryService', '$routeParams'];
    function Controller($scope, $rootScope, LocalStorage, Toast, Validate, $timeout, CONST, Voluntary, $routeParams) {
        $rootScope.hasNav = true;
        var self = this;
        self.viewInfo = {};
        self.viewInfo.name = 'Panel';
        self.viewInfo.title = "Voluntário";
        self.public = CONST.API_PUBLIC;
        self.viewInfo.navigations = {
            back: {
                route: "home/"
            }
        }
        
        self.user;
        self.fileData = {};
        
        Voluntary.get($routeParams.id).then(function(res) {
            self.user = res.data[0];
            self.fileData.style = {
                'background-image': "url(" + self.public + "/" + res.data[0].photo + ")"
            }
        }, function(err) {
            
        })

        
        
        $scope.$on("$destroy", function() {
            $rootScope.isPanel = false;
        });
        
        /**
         * Load some data
         * @return {Object} Returned object
        */
    }
})();
