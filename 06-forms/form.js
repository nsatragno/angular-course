angular.module('formApp', [])

    .controller('FormController', function() {
    
        var formCtrl = this;
    
        formCtrl.addComment = function() {
            console.log('Hola');
        };
    
    });