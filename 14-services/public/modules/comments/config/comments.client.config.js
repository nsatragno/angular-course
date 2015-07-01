'use strict';

angular.module('comments').run(['Menus',
	function(Menus) {
		Menus.addMenuItem('topbar', 'Comments', 'comments', 'dropdown', '/comments');
		Menus.addSubMenuItem('topbar', 'comments', 'Manage Comments', 'comments');
	}
]);