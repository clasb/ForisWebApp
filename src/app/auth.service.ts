import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { contentHeaders } from './trail/headers';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthService {

	constructor(private router: Router, public http: Http) { }

	login(username, password) {
		var client_id = 'n7KZAN5t3dIwXuWlaViTLF9ZJ1esnRsI';
		var connection = 'Username-Password-Authentication';
		var grant_type = 'password';
		var scope = 'openid profile';

		let body = JSON.stringify(
			{ username, password, client_id, connection, grant_type, scope }
		);
		this.http.post('https://claes.eu.auth0.com/oauth/ro', body, { headers: contentHeaders })
			.subscribe(
			response => {
				localStorage.setItem('id_token', response.json().id_token);
				this.router.navigate(['/home']);
			},
			error => {
				alert(error.text());
				console.log(error.text());
			}
			);
	}

	logout() {
		localStorage.removeItem('id_token');
		this.router.navigate(['/login']);
	}

	loggedIn() {
		return tokenNotExpired();
	}

	profile() {
		return JSON.parse(localStorage.getItem('profile'));
	}
}
