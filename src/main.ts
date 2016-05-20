import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { ForiswebappAppComponent, environment } from './app/';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

if (environment.production) {
  enableProdMode();
}

bootstrap(ForiswebappAppComponent, [
	HTTP_PROVIDERS, provide(AuthHttp, {
		useFactory: (http) => {
			return new AuthHttp(new AuthConfig({
				tokenName: 'jwt'
			}), http);
		},
		deps: [Http]
    })])
