/**
 * Home application controller
 *
*/

(function() {
    app.controller('HomeController', MainController);
    MainController.$inject = ['$rootScope', '$route', 'OpportunityService'];
    function MainController($rootScope, $route, Opportunity) {
        
        $rootScope.hasNav = true;
        var self = this;
        self.viewInfo = {};
        self.viewInfo.name = 'Home';
        self.viewInfo.title = null;
        self.opportunities;
        
        Opportunity.getAll().then(function(res){
            self.opportunities = res.data.docs.slice(0, 6);
        }, function(err){
            console.log(err);
        });

        /**
         * Load some data
         * @return {Object} Returned object
        */
    }
})();
