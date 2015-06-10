angular.module('formApp', [])

    .controller('FormController', function(Scores) {
    
        var formCtrl = this;
    
        formCtrl.init = function() {
            formCtrl.comment = {};
            formCtrl.comments = [];
            formCtrl.scores = Scores.query();
        };
    
        formCtrl.addComment = function() {            
            formCtrl.comments.push(formCtrl.comment);
            formCtrl.comment = {};
        };
    
    });