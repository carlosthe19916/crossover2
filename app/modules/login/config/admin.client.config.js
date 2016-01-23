'use strict';

// Configuring the Chat module
angular.module('login').run(['Menus',
	function (Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Login',
      state: 'login'
    });
	}
]);
