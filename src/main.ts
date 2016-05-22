import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { ForiswebappAppComponent, environment } from './app/';
import { HTTP_PROVIDERS, Http, Headers } from '@angular/http';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { ROUTER_PROVIDERS } from '@angular/router';
import { FORM_PROVIDERS } from '@angular/common';

if (environment.production) {
	enableProdMode();
}

bootstrap(ForiswebappAppComponent, [
    FORM_PROVIDERS,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(AuthHttp, {
		useFactory: (http) => {
			return new AuthHttp(new AuthConfig({
				tokenName: 'id_token'
			}), http);
		},
		deps: [Http]
    })
]
);