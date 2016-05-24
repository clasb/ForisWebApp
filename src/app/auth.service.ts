import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { contentHeaders } from './trail/headers';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

	apiUrl: string = 'https://claes.eu.auth0.com/';

	constructor(private authHttp: AuthHttp, private router: Router, public http: Http) { }

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

	getProfile() {
		var jwtHelper = new JwtHelper();
		return jwtHelper.decodeToken(localStorage.getItem('id_token'));
	}

	private extractData(res: Response) {
		let body = res.json();
		return body.data || body || {};
	}
	private handleError(error: any) {
		let errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}
