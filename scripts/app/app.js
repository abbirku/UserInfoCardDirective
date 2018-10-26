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
            .when('/decoratorDirective',{
                templateUrl: '../../views/Directive_template/DecoratorDirective/decoratirDirective.html',
                controller: 'DecoratorController'
            })
            .otherwise({
                redirectTo: '/'
            });
});

app.controller('MyLayoutController',function ($scope) {
    $scope.isActiveHome = 'active';
    $scope.isActiveContact = '';

    $('.nav a').on('click',function(){
        $('.nav').find('.active').removeClass('active');
        $(this).parent().addClass('active');
    });
});
