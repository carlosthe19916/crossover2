'use strict';

angular.module(ApplicationConfiguration.applicationModuleName)
  .directive('sgSave', ['$compile', function ($compile) {
  return {
    restrict: 'A',
    link: function ($scope, elem, attr, ctrl) {
      elem.addClass('btn btn-primary');
      elem.attr('type","submit');
      elem.bind('click', function () {
        $scope.$apply(function () {
          var form = elem.closest('form');
          if (form && form.attr('name')) {
            var ngValid = form.find('.ng-valid');
            if ($scope[form.attr('name')].$valid) {
              //ngValid.removeClass('error');
              ngValid.parent().removeClass('has-error');
              /* jshint -W069 */
              $scope['save']();
            } else {
              console.log('Missing or invalid field(s). Please verify the fields in red.');
              //ngValid.removeClass('error');
              ngValid.parent().removeClass('has-error');

              var ngInvalid = form.find('.ng-invalid');
              //ngInvalid.addClass('error');
              ngInvalid.parent().addClass('has-error');
            }
          }
        });
      });
    }
  };
}]).directive('sgReset', ['$compile', function ($compile) {
  return {
    restrict: 'A',
    link: function ($scope, elem, attr, ctrl) {
      elem.addClass('btn btn-default');
      elem.attr('type', 'submit');
      elem.bind('click', function () {
        $scope.$apply(function () {
          var form = elem.closest('form');
          if (form && form.attr('name')) {
            form.find('.ng-valid').removeClass('error');
            form.find('.ng-invalid').removeClass('error');
            /* jshint -W069 */
            $scope['reset']();
          }
        });
      });
    }
  };
}]).directive('sgCancel', ['$compile', function ($compile) {
  return {
    restrict: 'A',
    link: function ($scope, elem, attr, ctrl) {
      elem.addClass('btn btn-default');
      elem.attr('type', 'submit');
    }
  };
}]).directive('sgDelete', ['$compile', function ($compile) {
  return {
    restrict: 'A',
    link: function ($scope, elem, attr, ctrl) {
      elem.addClass('btn btn-danger');
      elem.attr('type', 'submit');
    }
  };
}]);

angular.module("sgtemplate/modal/modal.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("sgtemplate/modal/modal.html",
    "<div class=\"modal-header\">\n" +
    "<button type=\"button\" class=\"close\" ng-click=\"cancel()\">\n" +
    "<span class=\"pficon pficon-close\">?</span>\n" +
    "</button>\n" +
    "<h4 class=\"modal-title\">{{title}}</h4>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">{{message}}</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "<button type=\"button\" data-ng-class=\"btns.cancel.cssClass\" ng-click=\"cancel()\">{{btns.cancel.label}}</button>\n" +
    "<button type=\"button\" data-ng-class=\"btns.ok.cssClass\" ng-click=\"ok()\">{{btns.ok.label}}</button>\n" +
    "</div>\n" +
    ""
  );
}]);
