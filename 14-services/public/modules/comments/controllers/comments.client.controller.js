'use strict';

angular.module('comments').controller('FormController', ['Scores',
	function(Scores) {

        var formCtrl = this;

        formCtrl.init = function() {
            formCtrl.comment = {};
            formCtrl.comments = [];
            formCtrl.scores = Scores.query();
            formCtrl.messages = {};
        };

        formCtrl.addComment = function() {            
            formCtrl.comments.push(formCtrl.comment);
            formCtrl.comment = {};
            formCtrl.messages.info = 'Comment added successfully';
        };
        
    }
]);