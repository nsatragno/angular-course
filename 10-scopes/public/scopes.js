'use strict';

var app = angular.module('scopesApp', []);

app.controller('FatherController', function($scope, $rootScope) {
    
    $scope.name = 'father';
    $scope.lastName = 'Smith';
    $rootScope.name = 'Root';
    
});

app.controller('ChildController1', function($scope) {
    
    $scope.name = 'child1';
    
});

app.controller('ChildController2', function($scope) {
    
    $scope.name = 'child2';
    
});

app.controller('GrandChildController1', function($scope) {
    
    $scope.name = 'grandChild1';
    
});

app.controller('GrandChildController2', function($scope) {
    
    $scope.name = 'grandChild2';
    
});

app.controller('GrandChildController3', function($scope) {
    
    $scope.name = 'grandChild3';
    
});

app.controller('GrandChildController4', function($scope) {
    
    $scope.name = 'grandChild4';
    
});