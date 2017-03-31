
var myApp = angular.module('apptest', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
        
            $stateProvider
                .state('pages', {
                    url: '/pages',
                    templateUrl: 'views/pages.html',
                    controller: 'pageHome'
      
                })
                .state('photos', {
                    url: '/photos',
                    templateUrl: 'views/photos.html',
                    controller: 'pagePhoto'
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'views/login.html',
                    controller: 'pageLogin'
                });

            $urlRouterProvider.otherwise('pages'); //Default para cargar esta pagina por defecto
    
    })

myApp.controller('pageHome',function($scope,$state){
    $scope.icons = true;
    
})


myApp.controller('pagePhoto',function($scope,$state){
    
    
})

myApp.controller('pageLogin',function($scope,$state){
    

})