'use strict';

angular.module('comments').config(['$stateProvider',
	function($stateProvider) {
		$stateProvider.
		state('comments', {
			url: '/comments',
			templateUrl: 'modules/comments/views/comments.client.view.html'
		});
	}
]);