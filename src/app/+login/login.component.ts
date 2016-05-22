import { Component, OnInit } from '@angular/core';
import { MdButton } from '@angular2-material/button';
import { MdInput } from '@angular2-material/input';
import { UserComponent } from '../user';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
	moduleId: module.id,
	selector: 'app-login',
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.css'],
	directives: [MdButton, MdInput]
})

export class LoginComponent {

	constructor(public router: Router, public http: Http, private auth: AuthService) {
	}

	login(event, username, password) {
		event.preventDefault();
		this.auth.login(username, password);
	}

	signup(event) {
		event.preventDefault();
		console.log(event);
		//this.router.navigate('/signup');
	}
}
