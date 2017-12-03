/**
 *
 * Sou voluntário app
 * @author Jean Sarlôn & Calos André
 * @version 1.0
 * @date september 2017
 *
 */

 var panel;
(function() {
    /**
    * Definition of the main app module and its dependencies
    */
    panel = angular.module('App.Panel', ['ngRoute', 'ngAnimate', 'ngMessages', 'crumble', 'ngSanitize','jkAngularRatingStars', 'App']).config(config);

    // safe dependency injection
    // this prevents minification issues
    config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider'];

    /**
     * App routing
     *
     * You can leave it here in the config section or take it out
     * into separate file
     *
    */
    function config($routeProvider, $locationProvider, $httpProvider, $compileProvider) {
        $routeProvider.when('/', {
            templateUrl:  'views/login.html',
            controller:   'AuthController',
            controllerAs: 'auth',
            label: 'Home'
        })
        .when('/home/', {
            templateUrl:  '/painel/views/index.html',
            controller:   'PanelController',
            controllerAs: 'panel',
            label: 'Painel',
        })
        .when('/oportunidade/', {
            templateUrl:  'painel/views/oportunity.html',
            controller:   'PanelController',
            controllerAs: 'panel',
            label: 'Painel',
            parent : '/'
        })
        .when('/oportunidade/cadastrar/', {
            templateUrl:  'painel/views/oportunity.register.html',
            controller:   'PanelController',
            controllerAs: 'panel',
            label: 'Painel',
        })
        .when('/oportunidades/', {
            templateUrl:  'painel/views/opportunities.html',
            controller:   'Panel.opportunitiesController',
            controllerAs: 'panel',
            label: 'Painel',
        })
        .when('/oportunidades/:id', {
            templateUrl:  'painel/views/opportunity.html',
            controller:   'Panel.opportunityController',
            controllerAs: 'panel',
            label: 'Painel',
        })
        .when('/oportunidades/:id/editar', {
            templateUrl:  'painel/views/opportunity.edit.html',
            controller:   'Panel.opportunity.edit.Controller',
            controllerAs: 'panel',
            label: 'Painel',
            permission: 0
        })
        .when('/oportunidades/:id/avaliacoes', {
            templateUrl:  'painel/views/opportunity.evaluations.html',
            controller:   'Panel.opportunityController',
            controllerAs: 'panel',
            label: 'Painel',
            permission: 0
        })
        .when('/oportunidades/:id/voluntarios', {
            templateUrl:  'painel/views/volunteers.html',
            controller:   'Panel.VolunteersController',
            controllerAs: 'panel',
            label: 'Painel',
            permission: 0
        })
        .when('/voluntarios/:id/', {
            templateUrl:  'painel/views/voluntary.html',
            controller:   'Panel.VoluntaryController',
            controllerAs: 'panel',
            label: 'Painel',
            permission: 0,
            parent : '/'
        })
        .when('/configuracoes', {
            templateUrl:  'painel/views/settings.html',
            controller:   'Panel.settings.Controller',
            controllerAs: 'settings',
            label: 'Painel',
        })
        .otherwise({redirectTo: '/'});
        
        // $locationProvider.html5Mode(true);
        // $locationProvider.hashPrefix('');
        
        $httpProvider.interceptors.push('authInterceptor');
    }

    /**
     * Intercept any request or response inside authInterceptor
     * or handle what should happend on 40x, 50x errors
     *
    */
    panel.factory('authInterceptor', authInterceptor);
    
    authInterceptor.$inject = ['$rootScope', '$q', 'LocalStorage', '$location'];
    function authInterceptor($rootScope, $q, LocalStorage, $location) {
        return {
            // intercept every request
            request: function(config) {
                config.headers = config.headers || {};
                if (!LocalStorage.get("user")) {
                    $rootScope.isAuthenticated = false;
                } else {
                    $rootScope.isAuthenticated = true;
                }
                if ($location.$$path == '/' && $rootScope.isAuthenticated == true ) {
                    $location.path('/home')
                }
                
                return config;
            },

            // Catch 404 errors
            responseError: function(response) {
                if (response.status === 404) {
                    // $location.path('/');
                    return $q.reject(response);
                } else {
                    return $q.reject(response);
                }
            }
        };
    }
    
    /**
     * Run block
    */
    
    panel.run(run);

    run.$inject = ['$rootScope', '$location','crumble', 'LocalStorage', '$window'];

    function run($rootScope, $location, crumble, LocalStorage, $window) {
        var getParent = crumble.getParent; 
        crumble.getParent = function (path) {
            var route = crumble.getRoute(path);
            return route && angular.isDefined(route.parent) ? route.parent : getParent(path);
        };
       
        $rootScope.$on('$routeChangeStart', function(scope, current, pre) {
            var permission = current.$$route? current.$$route.permission: undefined;
            if (permission !== undefined && LocalStorage.get("user") && LocalStorage.get("user").type != permission) {
                $window.history.back();
            }
        });
        $rootScope.$on('$routeChangeSuccess', function(scope, current, pre) {
            crumble.update();
        });
    }
   
    /** excerpt
    * ------------------------------------------ */
    panel.filter('excerpt', function() {
       return function(input, size) {
          if (input.length > size) {
             return input.substring(0, size) + '...';
          }
          return input;
       }
    });
})();
