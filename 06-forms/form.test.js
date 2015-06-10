describe('Testing FormController', function() {
    
    beforeEach(module('formApp'));
    
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
    
    var formCtrl;
    
    beforeEach(inject(function(_$controller_) {
        formCtrl = _$controller_('FormController');
        formCtrl.init();
    }));    
    
    describe('When FormController initialize', function() {
        
        it('comment should be empty', function() {
            expect(formCtrl.comment).toEqual({});
        });
        
        it('comments list should be empty', function() {
            expect(formCtrl.comments).toEqual([]);
        });
        
        it('master of scores shoulb be the expected', function() {
            expect(formCtrl.scores).toEqual(scores);
        });
        
    });
    
    describe('When you add a comment', function() {
        
        var comment = {
            author: 'adrian@centauri.co',
            score: scores[4],
            text: 'I will never code with another framework. Angular is my life now!'
        };
        
        beforeEach(function() {
            formCtrl.comment = comment;
            formCtrl.addComment();
        });
        
        it('comments length should be one', function() {
            expect(formCtrl.comments.length).toBe(1);
        });
        
        it('comment added should be the expected', function() {
            expect(formCtrl.comments[0]).toEqual(comment);
            expect(formCtrl.comments[0].score.value).toBe(5);
        });
        
        it('comment should be cleaned', function() {
            expect(formCtrl.comment).toEqual({});
        });
        
    });
    
});
