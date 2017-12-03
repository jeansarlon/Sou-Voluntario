/**
 * Panel Panel controller
 *
*/

(function() {
    app.controller('Panel.opportunitiesController', Controller);
    Controller.$inject = ['$scope', 'CONSTANTS', '$rootScope', 'LocalStorage', 'OpportunityService', 'VoluntaryService', 'OrganizationService'];
    function Controller($scope, CONSTANTS, $rootScope, LocalStorage, Opportunity, Voluntary, Organization) {
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
        
        
        var DataType = [Organization.getOpportunities, Voluntary.getOpportunities]
        var getData = DataType[self.user.type];
        
        
        
        getData(self.user._id).then(function(res){
            self.opportunities = res.data;
        }, function(err){
            console.log("error", err);
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
