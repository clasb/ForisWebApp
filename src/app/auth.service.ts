import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

declare var Auth0Lock: any;

@Injectable()
export class AuthService {

	constructor(private router: Router) {}

	lock = new Auth0Lock('n7KZAN5t3dIwXuWlaViTLF9ZJ1esnRsI', 'claes.eu.auth0.com');

	login() {
		this.lock.show((error: string, profile: Object, id_token: string) => {
			if (error) {
				console.log(error);
			}
			localStorage.setItem('profile', JSON.stringify(profile));
			localStorage.setItem('id_token', id_token);
		});
	}

	logout() {
		// To log out, we just need to remove
		// the user's profile and token
		localStorage.removeItem('profile');
		localStorage.removeItem('id_token');
		this.router.navigate(['/']);
	}

	loggedIn() {
		return tokenNotExpired();
	}

	profile() {
		return JSON.parse(localStorage.getItem('profile'));
	}
}
