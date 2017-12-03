/**
 *
 * Sou voluntário app
 * @author Jean Sarlôn & Calos André
 * @version 1.0
 * @date september 2017
 *
 */

var app;
(function() {
    /**
    * Definition of the main app module and its dependencies
    */
    app = angular.module('App', ['ui.mask', 'ngRoute', 'ngAnimate', 'ngMessages', 'crumble', 'ngSanitize','jkAngularRatingStars']).config(config);

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
        $locationProvider.hashPrefix('');
        //   $locationProvider.html5Mode(true);
        $routeProvider.when('/', {
            templateUrl:  'views/home.html',
            controller:   'HomeController',
            controllerAs: 'main',
            label: 'Home'
        })
        .when('/sobre/', {
            templateUrl:  'views/about.html',
            controller:   'AboutController',
            controllerAs: 'about',
            label: 'Sobre nós',
            parent : '/',
        })
        .when('/cadastro/voluntario', {
            templateUrl:  'views/register.html',
            controller:   'RegisterController',
            controllerAs: 'register',
            label: 'Cadastro',
            parent : '/',
            params: {
                type: 'voluntario'
            }
        })
        .when('/cadastro/organizacao', {
            templateUrl:  'views/register.html',
            controller:   'RegisterController',
            controllerAs: 'register',
            label: 'Cadastro',
            parent : '/',
            params: {
                type: 'organizacao'
            }
        })
        .when('/oportunidades', {
            templateUrl:  'views/opportunities.html',
            controller:   'OpportunitiesController',
            controllerAs: 'opp',
            label: 'Oportunidades'
        })
        .when('/oportunidades/:id', {
            templateUrl:  'views/opportunity.html',
            controller:   'OpportunityController',
            controllerAs: 'opportunity',
            label: '{{thing}}',
            parent : '/oportunidades'
        })
        .when('/organizacoes', {
            templateUrl:  'views/organizations.html',
            controller:   'OrganizationsController',
            controllerAs: 'org',
            label: 'Organizações'
        })
        .when('/organizacoes/:id', {
            templateUrl:  'views/organization.html',
            controller:   'OrganizationController',
            controllerAs: 'org',
            label: '{{thing}}',
            parent : '/organizacoes'
        })
        .otherwise({redirectTo: '/'});
        
        $httpProvider.interceptors.push('authInterceptor');
    }

    /**
     * Intercept any request or response inside authInterceptor
     * or handle what should happend on 40x, 50x errors
     *
    */
    app.factory('authInterceptor', authInterceptor);
    
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
                if ($location.$$path == '/login/' && $rootScope.isAuthenticated == true ) {
                    $location.path('/')
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
    
    app.run(run);

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
        $rootScope.sideControl = false;
        $rootScope.uiOption = {
            addDefaultPlaceholder:false,
            clearOnBlurPlaceholder:true
        };
    }
   
    /** excerpt
    * ------------------------------------------ */
    app.filter('excerpt', function() {
       return function(input, size) {
          if (input.length > size) {
             return input.substring(0, size) + '...';
          }
          return input;
       }
    });
})();
