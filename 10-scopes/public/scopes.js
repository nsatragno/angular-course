'use strict';

var app = angular.module('scopesApp', []);

app.controller('FatherController', function($scope, $rootScope, $log) {
    
    $scope.name = 'father';
    $scope.lastName = 'Smith';
    $rootScope.name = 'Root';
    
    $scope.amount = 0;
    $scope.gifts = 0;

    $scope.childrenName = 'children';
    
    $scope.messages = {};

    $scope.$parent.$on($scope.$parent.name, function(event, amount) {
        $log.info('Éxito!');
    });

    $log.log('Registering ' + $scope.name + ' event');
    $scope.$on($scope.name, function($event, amount) {
        $scope.amount += amount;
        $scope.gifts++;
        $log.debug($scope.name + ' receives a gift of ' + amount);
        $scope.messages.info = $scope.name + ' receives a gift of ' + amount;
    });
    
    $scope.sendGiftToChildren = function(childrenName) {
        if (childrenName) {
            $log.warn('Sending gift to ' + childrenName);
            $scope.$broadcast(childrenName, 100);
            return;
        }
        $log.warn('I have no children');
    };
    
    $scope.sendGiftToFather = function() {
        $scope.$emit($scope.$parent.name, 100);
        //$log.error('Root is dead, and father has no parent to give gifts :-(');
    };
    
});

app.controller('ChildController1', function($scope, $log) {
    
    $scope.name = 'child1';
    
    $scope.amount = 0;
    $scope.gifts = 0;

    $scope.childrenName = 'grandChildren';

    $log.log('Registering ' + $scope.name + ' event');
    $scope.$on($scope.name, function(event, amount) {
        $scope.amount += amount;
        $scope.gifts++;
        $log.debug($scope.name + ' receives a gift of ' + amount);
        $scope.messages.info = $scope.name + ' receives a gift of ' + amount;
    });
    
    $log.log('Registering children event in ' + $scope.name);
    $scope.$on('children', function(event, amount) {
        $scope.amount += amount;
        $scope.gifts++;
        $log.debug($scope.name + ' receives a gift of ' + amount);
        $scope.messages.info = $scope.name + ' receives a gift of ' + amount;
    });

    $scope.sendGiftToFather = function() {
        $log.warn('Sending gift to ' + $scope.$parent.name);
        $scope.$emit($scope.$parent.name, 100);
    };
});

app.controller('ChildController2', function($scope, $log) {
    
    $scope.name = 'child2';
    
    $scope.amount = 0;
    $scope.gifts = 0;

    $log.log('Registering ' + $scope.name + ' event');
    $scope.$on($scope.name, function(event, amount) {
        $scope.amount += amount;
        $scope.gifts++;
        $log.debug($scope.name + ' receives a gift of ' + amount);
        $scope.messages.info = $scope.name + ' receives a gift of ' + amount;
    }
    );
    
    $log.log('Registering children event in ' + $scope.name);
    $scope.$on('children', function(event, amount) {
        $scope.amount += amount;
        $scope.gifts++;
        $log.debug($scope.name + ' receives a gift of ' + amount);
        $scope.messages.info = $scope.name + ' receives a gift of ' + amount;
    });
    
    $scope.sendGiftToFather = function() {
        $log.warn('Sending gift to ' + $scope.$parent.name);
        $scope.$emit($scope.$parent.name, 100);
    };
});

app.controller('GrandChildController1', function($scope, $log) {
    
    $scope.name = 'grandChild1';

    $scope.childrenName = null;
    
    $scope.amount = 0;
    $scope.gifts = 0;    
    
    $log.log('Registering ' + $scope.name + ' event');
    $scope.$on($scope.name, function(event, amount) {        
        $scope.amount += amount;
        $scope.gifts++;
        $log.debug($scope.name + ' receives a gift of ' + amount);
        $scope.messages.info = $scope.name + ' receives a gift of ' + amount;
    });
    
    $log.log('Registering grandChildren event in ' + $scope.name);
    $scope.$on('grandChildren', function(event, amount) {
        $scope.amount += amount;
        $scope.gifts++;
        $log.debug($scope.name + ' receives a gift of ' + amount);
        $scope.messages.info = $scope.name + ' receives a gift of ' + amount;
    });
    
    $scope.sendGiftToFather = function() {
        $log.warn('Sending gift to ' + $scope.$parent.name);
        $scope.$emit($scope.$parent.name, 100);
    };
});

app.controller('GrandChildController2', function($scope, $log) {
    
    $scope.name = 'grandChild2';

    $scope.childrenName = null;
    
    $scope.amount = 0;
    $scope.gifts = 0;
    
    $log.log('Registering ' + $scope.name + ' event');
    $scope.$on($scope.name, function(event, amount) {
        $scope.amount += amount;
        $scope.gifts++;
        $log.debug($scope.name + ' receives a gift of ' + amount);
        $scope.messages.info = $scope.name + ' receives a gift of ' + amount;
    });
    
    $log.log('Registering grandChildren event in ' + $scope.name);
    $scope.$on('grandChildren', function(event, amount) {
        $scope.amount += amount;
        $scope.gifts++;
        $log.debug($scope.name + ' receives a gift of ' + amount);
        $scope.messages.info = $scope.name + ' receives a gift of ' + amount;
    });
    
    $scope.sendGiftToFather = function() {
        $log.warn('Sending gift to ' + $scope.$parent.name);
        $scope.$emit($scope.$parent.name, 100);
    };
});

app.controller('GrandChildController3', function($scope, $log) {
    
    $scope.name = 'grandChild3';

    $scope.childrenName = null;
    
    $scope.amount = 0;
    $scope.gifts = 0;
    
    $log.log('Registering ' + $scope.name + ' event');
    $scope.$on($scope.name, function(event, amount) {
        $scope.amount += amount;
        $scope.gifts++;
        $log.debug($scope.name + ' receives a gift of ' + amount);
        $scope.messages.info = $scope.name + ' receives a gift of ' + amount;
    });
    
    $log.log('Registering grandChildren event in ' + $scope.name);
    $scope.$on('grandChildren', function(event, amount) {
        $scope.amount += amount;
        $scope.gifts++;
        $log.debug($scope.name + ' receives a gift of ' + amount);
        $scope.messages.info = $scope.name + ' receives a gift of ' + amount;
    });
    
    $scope.sendGiftToFather = function() {
        $log.warn('Sending gift to ' + $scope.$parent.name);
        $scope.$emit($scope.$parent.name, 100);
    };
});

app.controller('GrandChildController4', function($scope, $log) {
    
    $scope.name = 'grandChild4';

    $scope.childrenName = null;
    
    $scope.amount = 0;
    $scope.gifts = 0;
    
    $log.log('Registering ' + $scope.name + ' event');
    $scope.$on($scope.name, function(event, amount) {
        $scope.amount += amount;
        $scope.gifts++;
        $log.debug($scope.name + ' receives a gift of ' + amount);
        $scope.messages.info = $scope.name + ' receives a gift of ' + amount;
    });
    
    $log.log('Registering grandChildren event in ' + $scope.name);
    $scope.$on('grandChildren', function(event, amount) {
        $scope.amount += amount;
        $scope.gifts++;
        $log.debug($scope.name + ' receives a gift of ' + amount);
        $scope.messages.info = $scope.name + ' receives a gift of ' + amount;
    });
    
    $scope.sendGiftToFather = function() {
        $log.warn('Sending gift to ' + $scope.$parent.name);
        $scope.$emit($scope.$parent.name, 100);
    };
});
