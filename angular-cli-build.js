/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/*.js',
      'es6-shim/es6-shim.js',
      'reflect-metadata/*.js',
      'rxjs/**/*.js',
      '@angular/**/*.js',
      'angular2-jwt/**/*.js',
      'moment/moment.js',
      '@angular2-material/**/*.js',
      'ng2-bootstrap/**/*.js',
      'bootstrap/**/*.css',
      'bootstrap/**/*.js',
      'font-awesome/**/*.css',
      'font-awesome/fonts/*.*',
      'auth0-lock/**/*.js',
      'auth0-lock/**/*.css',
      'auth0-js/**/*.js'
    ]
  });
};
