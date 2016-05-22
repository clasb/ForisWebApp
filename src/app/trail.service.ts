import { Injectable } from '@angular/core';
import { TrailComponent } from './trail/trail.component';
import { AuthHttp } from 'angular2-jwt';
import { Http, Headers } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class TrailService {
	jwt: string;
	decodedJwt: string;
	response: string;
	api: string;

	constructor(public authHttp: AuthHttp) {
		this.jwt = localStorage.getItem('id_token');
		console.log(this.jwt);
	}
	TRAIL: TrailComponent;

	getAllTrails() {
		var myHeader = new Headers();
		var jwtHelper = new JwtHelper();
		myHeader.append('Authorization', 'Bearer ' + localStorage.getItem('id_token'));
		console.log(myHeader);
		console.log(jwtHelper.decodeToken(localStorage.getItem('id_token')));
		this.authHttp.get('http://localhost:20922/api/news', { headers: myHeader })
			.subscribe(
			response => console.log(response),
			error => console.log(error)
			);
	}

	getTrail(id: number) {
		this.TRAIL = { id: 1, name: 'Trail 1', description: 'asd asd asdasfasd', start: '1345123,123123', length: '16', rating: 1.7, difficulty: 4 };
		return this.TRAIL;
	}
}
