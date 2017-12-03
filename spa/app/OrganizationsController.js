/**
 * Opportunities Controller
 *
 *
*/

;(function() {
    app.controller('OrganizationsController', Controller);
    Controller.$inject = ['$rootScope', 'CONSTANTS', 'LocalStorage', 'OrganizationService', 'ToastService', 'ValidateService', '$timeout'];
    
    function Controller($rootScope, CONSTANTS, LocalStorage, OrgService, Toast, Validate, $timeout) {
        $rootScope.hasNav = true;
        var self = this;
        self.viewInfo = {};
        self.viewInfo.name = 'Organizações';
        self.viewInfo.title = self.viewInfo.name;
        self.public = CONSTANTS.API_PUBLIC;
        self.paginate;
        self.next = 0;
        
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
            OrgService.getAll(self.next).then(function(res){
                console.log(res.data);
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
        
        // Load data from API
        self.insertVoluntary = function(opp, success) {
            OrgService.insertVoluntary(self.user, opp._id).then(function(res){
                res.nModified ?
                success(self.msgs(), 5000) :
                success("Você já está inscrito nessa oportunidade!", 6000);
                console.log(res);
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
            OrgService.search(self.searchArg, self.nextSearch).then(function(res){
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
