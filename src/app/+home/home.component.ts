import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
//import { CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

@Component({
	moduleId: module.id,
	selector: 'app-home',
	templateUrl: 'home.component.html',
	styleUrls: ['home.component.css']
})

//@CanActivate(() => tokenNotExpired())
export class HomeComponent implements OnInit {
	showContent: Boolean;

	constructor(private auth: AuthService) { }

	ngOnInit() {
		this.showContent = this.auth.loggedIn();
	}

	logout() {
		this.auth.logout();
	}

}
