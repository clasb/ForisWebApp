import { Injectable } from '@angular/core';
import { TrailComponent } from './trail/trail.component';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class TrailService {
	jwt: string;
	decodedJwt: string;
	response: Response;
	api: string;

	constructor(public authHttp: AuthHttp, public http: Http) {
		this.jwt = localStorage.getItem('id_token');
		console.log(this.jwt);
	}
	TRAIL: TrailComponent;

	getAllTrails(): Observable<TrailComponent[]> {
		//var jwtHelper = new JwtHelper();
		//console.log(jwtHelper.decodeToken(localStorage.getItem('id_token')));
		/*this.authHttp.get('http://localhost:20922/api/news')
			.subscribe(
			response => this.response = response,
			error => console.log(error)
			);*/
		return this.authHttp.get('http://localhost:20922/api/alltrails')
			.map(this.extractData)
			.catch(this.handleError);
	}

	getTrail(id: number) {
		this.TRAIL = { id: 1, name: 'Trail 1', description: 'asd asd asdasfasd', start: '1345123,123123', length: '16', rating: 1.7, difficulty: 4 };
		return this.TRAIL;
	}

	private extractData(res: Response) {
		console.log("res in service");
		console.log(res);
		let body = res.json();
		console.log("body in service");
		console.log(body);
		return body.data || body || {};
	}
	private handleError(error: any) {
		let errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}
