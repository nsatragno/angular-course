describe('Testing TodoListController', function() {
    
    beforeEach(module('todoApp'));
    
    var initialTodos;    
    
    beforeEach(function() {
        initialTodos = [{
            text: 'learn angular',
            done: true
        }, {
            text: 'build an angular app',
            done: false
        }];
    });
    
    var todoListController;
    
    beforeEach(inject(function(_$controller_) {
        // The injector unwraps the underscores from around the parameter names when matching
        todoListController = _$controller_('TodoListController');
    }));
    
    describe('Initialization tests', function() {
        
        it('At the beginning, the todos list must be the expected', function() {
            expect(todoListController.todos).toEqual(initialTodos);
        });
    });
    
    describe('Add todo item operation tests', function() {
        
        beforeEach(function() {
            todoListController.todoText = 'New task to do';
            todoListController.addTodo();
        });
        
        it('check that items size was incremented', function() {
            expect(todoListController.todos.length).toBe(3);
        });
        
        it('check that text of the new item is right', function() {
            expect(todoListController.todos[2].text).toBe('New task to do');
        });
        
        it('check that done of the new item is false', function() {
            expect(todoListController.todos[2].done).toBeFalsy();
        });
    });
    
    describe('Remaining query tests', function() {
        
        it('if all taks are done, check that there is not tasks to do', function() {
            angular.forEach(todoListController.todos, function(item) {
                item.done = true;
            });
            var remaining = todoListController.remaining();
            expect(remaining).toBe(0);
        });
        
        it('if you have three tasks in done and two in not done, check that there is 3 tasks to do', function() {
            todoListController.todos = [
                { text: 'task1', done: false },
                { text: 'task2', done: true },
                { text: 'task3', done: false },
                { text: 'task4', done: true },
                { text: 'task5', done: false }
            ];
            var remaining = todoListController.remaining();
            expect(remaining).toBe(3);
        });
        
        it('if the todo list is empty, check that there is not tasks to do', function() {
            todoListController.todos = [];
            var remaining = todoListController.remaining();
            expect(remaining).toBe(0);
        });
    });
    
    describe('Archive todo item operation tests', function() {
        
        beforeEach(function() {
            todoListController.todos = [
                { text: 'task1', done: false },
                { text: 'task2', done: true },
                { text: 'task3', done: false },
                { text: 'task4', done: true },
                { text: 'task5', done: false }
            ];
            todoListController.archive();
        });
        
        it('check that the size of todos is three', function() {            
            expect(todoListController.todos.length).toBe(3);
        });
        
        it('check that tasks remaining are the right', function() {
            expect(todoListController.todos).toEqual([
                { text: 'task1', done: false },
                { text: 'task3', done: false },
                { text: 'task5', done: false }
            ]);
        });
    });

});
