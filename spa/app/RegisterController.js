/**
 * Register Controller
 *
*/

;(function() {
    app.controller('RegisterController', UserController);
    UserController.$inject = ['VoluntaryService', 'OrganizationService', 'Address', 'Contact', '$rootScope', '$route', 'ModalService', 'ValidateService', 'ToastService'];
    
    function UserController(Voluntary, Organization, Address, Contact, $rootScope, $route, ModalService, Validate, Toast) {
        $rootScope.hasNav = true;
        var self = this;
        self.address = new Address();
        self.contact = new Contact();
        self.viewInfo = {};
        self.viewInfo.name = 'Cadastro';
        self.currentType = $route.current.$$route.params.type;
        self.isVoluntary = self.currentType == 'voluntario'? true: false;
        
        self.formData = {};
        self.formData.image;
        self.file;
      
        var type = {'voluntario': 'Voluntario', 'organizacao': 'Organização'}
        self.viewInfo.title = 'Cadastro | '+ type[self.currentType];
      
      
        self.send = function(form) {
            if (!self.formData.image) {
                return Toast.show("O campo imagm é obrigtório!",4000,"error");
            }
            
            if (Validate.validate(form)) {
                var sv = self.isVoluntary ? Voluntary : Organization;
                var title = self.isVoluntary ? "Voluntário": "Organização"
                self.formData.address = self.address;
                self.formData.contact = self.contact;
                var footer = {ok: {text: "Ok!",action: ""},esc:""}
                
                sv.create(self.formData).then(function(data) {
                    ModalService.set("Feito!","Cadastro realizado com sucesso!", footer);
                    ModalService.show("#modal1");
                    resetForm();
                }, function(error) {
                    if (error.status == -1) {
                        ModalService.set("ERRO!","<b>Não há conexão</b> com o servidor,<br>Tente Novamente", footer);
                    }
                    if (error.data && error.data.status == 11000) {
                        ModalService.set("ERRO!","<b>"+ error.data.message +"</b>,<br>Tente com outro "+error.data.key, footer);
                    }
                    console.log(error);
                    ModalService.show("#modal1");
                });
            }
        }
        
        function resetForm(){
            self.address = new Address();
            self.contact = new Contact();
            self.formData = {};
            self.formData.image = "";
            self.file = "";
            angular.element("input[type='file']").val(null);
        }
    }
})();
