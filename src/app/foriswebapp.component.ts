import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { LoginComponent } from './+login';
import { HomeComponent } from './+home';
import { HTTP_PROVIDERS, Http } from '@angular/http';
import { AuthHttp, tokenNotExpired, AUTH_PROVIDERS} from 'angular2-jwt';
import { AuthService } from './auth.service';
import { MenuComponent } from './menu';
import { TrailsComponent } from './+trails';
import { ProfileComponent } from './+profile';


declare var Auth0Lock: any;

@Component({
	moduleId: module.id,
	selector: 'foriswebapp-app',
	templateUrl: 'foriswebapp.component.html',
	styleUrls: ['foriswebapp.component.css'],
	directives: [ROUTER_DIRECTIVES, MenuComponent],
	providers: [ROUTER_PROVIDERS, AuthService]
})

@Routes([
	{ path: '/home', component: HomeComponent },
  	{ path: '/trails', component: TrailsComponent },
	{ path: '/profile', component: ProfileComponent }

])

export class ForiswebappAppComponent {
	title: 'Foris';
	user: JSON;
	loggedIn: Boolean;

	constructor(private router: Router, private auth: AuthService) { }
	ngOnInit() {
		if (this.auth.loggedIn()) {
		} else {
			this.auth.login();
		}
	}
}
