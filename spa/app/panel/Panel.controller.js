/**
 * Panel Panel controller
 *
*/

(function() {
    app.controller('PanelController', Controller);
    Controller.$inject = ['$scope', '$rootScope', 'LocalStorage', 'QueryService', '$route', 'TagService', 'OpportunityService', 'ToastService','ValidateService', '$location', '$timeout'];
    function Controller($scope, $rootScope, LocalStorage, QueryService, $route, TagService, Opportunity, Toast, Validate, $location, $timeout) {
        $rootScope.hasNav = true;
        var self = this;
        self.viewInfo = {};
        self.viewInfo.name = 'Panel';
        self.viewInfo.title = "Painel";
        self.viewInfo.navigations = {}
        self.user = LocalStorage.get('user');
        self.formData = {};
        self.formData.image = "";
        self.file;
        
        self.createOpp = function(form) {
            if (!self.formData.image) {
                return Toast.show("O campo imagm é obrigtório!",4000,"error");
            }
            
            if (Validate.validate(form)) {
                self.formData.responsible = {"_id": self.user._id};
                var tags = TagService.getTags();
                var tags = tags.map( val => {return val.tag});
                self.formData.keyWord = tags;
                var fd = new FormData();
                var obj = self.formData;
                
                for (var prop in obj) {
                    if (typeof obj[prop] == "object" && prop != "image") {
                        fd.append(prop, JSON.stringify(obj[prop]) );
                    } else {
                        fd.append(prop, obj[prop]);
                    }
                }
                
                Opportunity.create(fd).then(function(res){
                    Toast.show("Oportunidade cadastrada com sucesso!!",4000, "success");
                    $timeout(function(){
                        $location.path( "/oportunidades" );
                    }, 4000);
                }, function(err){
                    console.log("ERROR:", err);
                    Toast.show("Desculpe!! Houve algum erro ao cadastrar a Oportunidade!!", 4000, "error");    
                })
            }
        }
        
        self.removeFile = function() {
            self.file = false;
            self.formData.image = "";
            angular.element("input[type='file']").val(null);
        }
        
        $scope.$on("$destroy", function() {
            $rootScope.isPanel = false;
        });
        
        

        /**
         * Load some data
         * @return {Object} Returned object
        */
    }
})();
