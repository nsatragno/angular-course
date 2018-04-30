app.directive('centInput', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/cent-author-input.html',
        scope: {
            modelo: "=",
            placeholder: "@",
            tipo: "@"
        }
    };
});
