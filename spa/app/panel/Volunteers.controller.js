/**
 * Panel Panel controller
 *
*/

(function() {
    app.controller('Panel.VolunteersController', Controller);
    Controller.$inject = ['$scope', 'CONSTANTS', '$rootScope', 'LocalStorage', 'OpportunityService', '$routeParams'];
    function Controller($scope, CONSTANTS, $rootScope, LocalStorage, Opportunity, $routeParams) {
        $rootScope.hasNav = true;
        var self = this;
        self.viewInfo = {};
        self.viewInfo.name = 'Panel';
        self.viewInfo.title = "Oportunidades";
        self.viewInfo.navigations = {
            back: {
                route:"home/"
            }
            
        }
        self.user = LocalStorage.get('user');
        self.public = CONSTANTS.API_PUBLIC;
        
        Opportunity.get($routeParams.id).then(function(res){
            self.volunteers = res.data.volunteers;
            self.viewInfo.navigations = {
                back: {
                    route:"oportunidades/"+res.data._id
                }
                
            }
            
        }, function(err){
            console.log("ERROR: ", err);
            self.volunteers = null;
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
