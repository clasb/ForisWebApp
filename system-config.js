/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'moment': 'vendor/moment/moment.js',
    '@angular2-material': 'vendor/@angular2-material',
    'angular2-jwt': 'vendor/angular2-jwt',
    'auth0-js': 'vendor/auth0-js',
    'angular2-google-maps': 'vendor/angular2-google-maps'
};
/** User packages configuration. */
var packages = {
    '@angular2-material/core': {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'core.js'
    },
    '@angular2-material/button': {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'button.js'
    },
    '@angular2-material/input': {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'input.js'
    },
    '@angular2-material/toolbar': {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'toolbar.js'
    },
    '@angular2-material/sidenav': {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'sidenav.js'
    },
    '@angular2-material/list': {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'list.js'
    },
    '@angular2-material/card': {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'card.js'
    },
    'angular2-jwt': {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'angular2-jwt.js'
    },
    'auth0-js': {
        defaultExtension: 'js',
        main: 'index.js'
    },
    'angular2-google-maps': {
        defaultExtension: 'js'
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router-deprecated',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/+login',
    'app/+home',
    'app/user',
    'app/+loginform',
    'app/+registerform',
    'app/+loginregister',
    'app/menu',
    'app/+trails',
    'app/+profile',
    'app/map',
    'app/traillist',
    'app/trailtab',
    'app/trail',
    'app/traildetail',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map