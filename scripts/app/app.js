'use strict';

var app = angular.module('MyApp',['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl: '../../views/Home/home.html',
                controller: 'MyController'
            })
            .when('/contact',{
                templateUrl: '../../views/Home/contact.html',
                controller: 'ContentController'
            })
            .otherwise({
                redirectTo: '/'
            });
});

app.controller('MyLayoutController',function ($scope) {
    $scope.isActiveHome = 'active';
    $scope.isActiveContact = '';

    $scope.OnHome = function(){
        $scope.isActiveHome = 'active';
        $scope.isActiveContact = '';
    }

    $scope.OnContact = function(){
        $scope.isActiveHome = '';
        $scope.isActiveContact = 'active';
    }
});
