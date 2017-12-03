/**
 * Opportunities Controller
 *
 *
 */

;(function() {
    app.controller('OpportunityController', Controller);
    Controller.$inject = ['$rootScope', '$route', '$routeParams', 'crumble', 'OpportunityService', 'CONSTANTS', 'ToastService', 'LocalStorage'];
    
    function Controller($rootScope, $route, $routeParams, crumble, Opportunity, CONSTANTS, Toast, LocalStorage, OppService) {
        $rootScope.hasNav = true;
        var self = this;
        self.viewInfo = {};
        self.viewInfo.title = self.viewInfo.name;
        self.opportunity = {};
        self.public = CONSTANTS.API_PUBLIC;
        self.msgs = CONSTANTS.msgs;
        var u = LocalStorage.get('user');
        if (u) self.user = u;
        
        Opportunity.get($routeParams.id).then(function(data) {
            self.opportunity = data.data;
            self.viewInfo.title = data.data.title;
            self.viewInfo.bg = {
                'background-image': 'url('+ CONSTANTS.API_PUBLIC + "/"+data.data.photo + ')',
                'background-repeat': 'no-repeat',
                'background-size': 'cover',
                'background-position': 'center'
            };
            var thing =  data.data.title;
            crumble.update({thing: thing});
            crumble.context = {thing: thing};
            crumble.update();
        }, function(err) {
            err.status == 404 ? 
            console.log("Não veio nada") :
            console.log(err);
        })
        
        self.insertVoluntary = function(opp) {
            Opportunity.insertVoluntary(self.user, self.opportunity._id).then(function(res){
                res.data.nModified ?
                Toast.show(self.msgs(), 6000, "success") :
                Toast.show("Você já está inscrito nessa oportunidade!", 6000, "success");
            }, function(err){
                console.log("error", err);
            })
        }
    }
})();
