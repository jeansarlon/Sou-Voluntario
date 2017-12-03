/**
 * Panel Panel controller
 *
*/

(function() {
    app.controller('Panel.settings.Controller', Controller);
    Controller.$inject = ['$scope','$rootScope','LocalStorage','ToastService','ValidateService','$timeout','CONSTANTS','VoluntaryService','OrganizationService'];
    function Controller($scope, $rootScope, LocalStorage, Toast, Validate, $timeout, CONST, Voluntary, Organization) {
        $rootScope.hasNav = true;
        var self = this;
        self.viewInfo = {};
        self.viewInfo.name = 'Panel';
        self.viewInfo.title = "Configurações";
        self.public = CONST.API_PUBLIC;
        self.viewInfo.navigations = {
            back: {
                route: "home/"
            }
        }
        
        self.user = LocalStorage.get('user');
        self.formData = {};
        self.fileData = {};
        self.fileData.style = {
            'background-image': "url(" + self.public + "/" + self.user.photo + ")"
        }
        
        var svs = [Organization, Voluntary],
        sv = svs[self.user.type];

        self.save = function() {
            sv.update(self.user, self.user._id).then(function(res) {
                Toast.show(":) Salvo com sucesso!!", 4000, "success")
                LocalStorage.update('user', res.data);
            }, function(err) {
                Toast.show(":( OPPS!! Não foi possível salvar, tente novamente!!", 4000, "error")
                console.log(err);
            })
        }

        $scope.$watch(() => this.file, function(newVal) {
            if (newVal) {
                sv.updatePhoto(self.fileData.image, self.user._id).then(function(res) {
                    Toast.show(":) Imagem atualizada com sucesso!!", 4000, "success")
                    LocalStorage.update('user', res.data);
                }, function(err) {
                    Toast.show(":( OPPS!! Não foi possível salvar, tente novamente!!", 4000, "error")
                    console.log(err);
                })
            }
        });
        
        
        $scope.$on("$destroy", function() {
            $rootScope.isPanel = false;
        });
        
        /**
         * Load some data
         * @return {Object} Returned object
        */
    }
})();
