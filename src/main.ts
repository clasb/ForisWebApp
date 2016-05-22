import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { ForiswebappAppComponent, environment } from './app/';
import { HTTP_PROVIDERS, Http, Headers } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { ROUTER_PROVIDERS } from '@angular/router';
import { FORM_PROVIDERS } from '@angular/common';

if (environment.production) {
	enableProdMode();
}

bootstrap(ForiswebappAppComponent, [
    FORM_PROVIDERS,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    AUTH_PROVIDERS
]
);