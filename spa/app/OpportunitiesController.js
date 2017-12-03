/**
 * Opportunities Controller
 *
 *
*/

;(function() {
    app.controller('OpportunitiesController', Controller);
    Controller.$inject = ['$rootScope', 'CONSTANTS', 'LocalStorage', 'OpportunityService', 'ToastService', 'ValidateService', '$timeout'];
    
    function Controller($rootScope, CONSTANTS, LocalStorage, OppService, Toast, Validate, $timeout) {
        $rootScope.hasNav = true;
        var self = this;
        self.viewInfo = {};
        self.viewInfo.name = 'Oportunidades';
        self.viewInfo.title = self.viewInfo.name;
        self.msgs = CONSTANTS.msgs;
        self.public = CONSTANTS.API_PUBLIC;
        self.paginate;
        self.next = 1;
        self.nextSearch = 1;
        
        var u = LocalStorage.get('user');
        if (u) {
            self.user = u;
        }
        
        self.load = function(page){
            
            //verify if incremment or decrement page
            self.searchArg = "";
            if(page == 0)self.next++;
            else
            if(page == -1)self.next--;
            else
            self.next = page;
            
            // Load data from API
            OppService.getAll(self.next).then(function(res){
                self.list = res.data.docs
                delete res.data.docs;
                self.paginate = res.data;
            }, function(err){
                console.log("error", err);
            });
        }
        self.load(1);
        
        self.getNumber = function(num) {
            return new Array(num);   
        }
        
        // insert a volunteer in opportunity
        self.insertVoluntary = function(opp, success) {
            OppService.insertVoluntary(self.user, opp._id).then(function(res){
                console.log(res);
                res.data.nModified ?
                success(self.msgs(), 6000, "success") :
                success("Você já está inscrito nessa oportunidade!", 6000, "success");
            }, function(err){
                console.log("error", err);
            })
        }
        
        self.search = function(page) {
            //verify if incremment ou decrement page of a search
            self.next = 0; // reset page to paginate without search
            if(page == 0)self.nextSearch++;
            else
            if(page == -1)self.nextSearch--;
            else
            self.nextSearch = page;
            
             //Load data from api
            self.searchArg = self.searchArg? self.searchArg: "";
            OppService.search(self.searchArg, self.nextSearch).then(function(res){
                self.list = res.data.docs;
                delete res.data.docs;
                self.paginate = res.data;
            }, function(err){
                console.log("ERROR", err);
                if (err.status == 404) {
                    self.list = [];
                    return self.searchError = err.status;
                }
                Toast.show("Ocorreu algum erro ao buscar, desculpe!", 5000);
            })
        }
    }
})();
