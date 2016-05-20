import { Injectable } from '@angular/core';
import { TrailComponent } from './trail/trail.component';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class TrailService {

	constructor(private authHttp: AuthHttp) { }
	TRAIL: TrailComponent;

	getAllTrails() {
		this.authHttp.get('http://localhost:20922/api/alltrails')
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
