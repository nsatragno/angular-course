angular.module('formApp').factory('Scores', function() {
    
    var query = function() {
        var scores = [{
            name: 'The instructor must die',
            value: 1
        }, {
            name: 'Poor course :-(',
            value: 2
        }, {
            name: 'Good course, but...',
            value: 3
        }, {
            name: 'Excellent course of AngularJS!!',
            value: 4
        }, {
            name: 'The best course about AngularJS of the world',
            value: 5
        }];
        return scores;
    };
    
    return {
        query: query
    };
});