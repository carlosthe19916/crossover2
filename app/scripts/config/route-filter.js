'use strict';

angular.module(ApplicationConfiguration.applicationModuleName)
  .run(['$rootScope', '$state', 'Auth', function ($rootScope, $state, Auth) {

    $rootScope.$on('$stateChangeStart', stateChangeStart);
    $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);

    function stateChangeStart(event, toState, toParams, fromState, fromParams) {
      // Check Auth before changing state
      if (toState.url !== '/login') {
        var allowed = (typeof(Auth.authz) != 'undefined' && Auth.authz != null);

        if (!allowed) {
          event.preventDefault();
          if (Auth.user !== undefined && typeof Auth.user === 'object') {
            $state.transitionTo('forbidden');
          } else {
            $state.go('login').then(function () {
              // Record previous state
              storePreviousState(toState, toParams);
            });
          }
        }
      }
    }

    function stateChangeSuccess(event, toState, toParams, fromState, fromParams) {
      // Record previous state
      storePreviousState(fromState, fromParams);
    }

    // Store previous state
    function storePreviousState(state, params) {
      // only store this state if it shouldn't be ignored
      if (!state.data || !state.data.ignoreState) {
        $state.previous = {
          state: state,
          params: params,
          href: $state.href(state, params)
        };
      }
    }

  }]);
