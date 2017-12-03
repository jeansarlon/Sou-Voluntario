/**
 * Organization Controller
 *
 *
 */

;(function() {
    app.controller('OrganizationController', Controller);
    Controller.$inject = ['$rootScope', '$route', '$routeParams', 'crumble', 'OrganizationService', 'CONSTANTS', '$location'];
    
    function Controller($rootScope, $route, $routeParams, crumble, Organization, CONSTANTS, $location) {
        $rootScope.hasNav = true;
        var self = this;
        self.viewInfo = {};
        self.public = CONSTANTS.API_PUBLIC;
        
        Organization.get($routeParams.id).then(function(data) {
            self.organization = data.data;
            self.viewInfo.title = data.data.name;
            var thing =  data.data.name;
            crumble.update({thing: thing});
            crumble.context = {thing: thing};
            crumble.update();
        }, function(err) {
            if(err.status == 404) {
                $location.path('/organizacoes')
            } 
            console.log(err);
        })
    }
})();
