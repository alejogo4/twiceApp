
var myApp = angular.module('apptest', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('pages', {
                    url: '/pages',
                    templateUrl: 'views/pages.html'
      
                })
                .state('photos', {
                    url: '/photos',
                    templateUrl: 'views/photos.html'
                });

            $urlRouterProvider.otherwise('pages'); //defaul para regresar a esta vista
    
    })