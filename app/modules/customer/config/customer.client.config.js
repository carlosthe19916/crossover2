'use strict';

// Configuring the Chat module
angular.module('customer').run(['Menus',
	function (Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Customers',
      state: 'customer.search'
    });
	}
]);
