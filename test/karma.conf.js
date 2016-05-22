// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-11-17 using
// generator-karma 1.0.0

module.exports = function(config) {
  'use strict';

  config.set({

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "jasmine"
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/jquery-ui/jquery-ui.js',
      'bower_components/jquery.maskedinput/dist/jquery.maskedinput.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-messages/angular-messages.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/angular-ui-utils/ui-utils.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/br-validations/releases/br-validations.js',
      'bower_components/string-mask/src/string-mask.js',
      'bower_components/angular-input-masks/angular-input-masks-standalone.min.js',
      'bower_components/angular-toastr/dist/angular-toastr.tpls.js',
      'bower_components/angular-breadcrumb/release/angular-breadcrumb.js',
      'bower_components/lodash/lodash.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/bootstrap-combobox/js/bootstrap-combobox.js',
      'bower_components/bootstrap-datepicker/js/bootstrap-datepicker.js',
      'bower_components/bootstrap-select/dist/js/bootstrap-select.js',
      'bower_components/bootstrap-switch/dist/js/bootstrap-switch.js',
      'bower_components/bootstrap-treeview/dist/bootstrap-treeview.min.js',
      'bower_components/d3/d3.js',
      'bower_components/c3/c3.js',
      'bower_components/datatables/media/js/jquery.dataTables.js',
      'bower_components/datatables-colreorder/js/dataTables.colReorder.js',
      'bower_components/datatables-colvis/js/dataTables.colVis.js',
      'bower_components/google-code-prettify/bin/prettify.min.js',
      'bower_components/matchHeight/dist/jquery.matchHeight.js',
      'bower_components/moment/moment.js',
      'bower_components/moment-timezone/builds/moment-timezone-with-data-2010-2020.js',
      'bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
      'bower_components/patternfly/dist/js/patternfly.js',
      'bower_components/angular-patternfly/dist/angular-patternfly.js',
      'bower_components/restangular/dist/restangular.js',
      'bower_components/underscore/underscore.js',
      'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
      'bower_components/patternfly-sass/assets/javascripts/patternfly.js',
      'bower_components/angular-local-storage/dist/angular-local-storage.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      "app/scripts/config.js",
      "app/scripts/init.js",
      "app/scripts/**/*.js",
      "test/mock/**/*.js",
      "test/spec/**/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "PhantomJS"
    ],

    // Which plugins to enable
    plugins: [
      "karma-phantomjs-launcher",
      "karma-jasmine"
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
