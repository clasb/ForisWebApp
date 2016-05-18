import { Injectable } from '@angular/core';
import { TrailComponent } from './trail/trail.component';

@Injectable()
export class TrailService {
	TRAILS: TrailComponent[];
	TRAIL: TrailComponent;

	getAllTrails() {
		this.TRAILS = [
			{ id: 1, name: 'Trail 1', description: 'asd asd asdasfasd', start: '1345123,123123', length: '16', rating: 1.7, difficulty: 4 },
			{ id: 2, name: 'Trail 2', description: 'asd asd asdasfasd', start: '123123,123123', length: '56', rating: 3, difficulty: 3 },
			{ id: 3, name: 'Trail 3', description: 'asd asd asdasfasd', start: '167523,123123', length: '4', rating: 4, difficulty: 1 },
			{ id: 4, name: 'Trail 4', description: 'asd asd asdasfasd', start: '12333453,123123', length: '12', rating: 2, difficulty: 2 },
			{ id: 5, name: 'Trail 5', description: 'asd asd asdasfasd', start: '12345343,123123', length: '45', rating: 5, difficulty: 4 },
			{ id: 6, name: 'Trail 6', description: 'asd asd asdasfasd', start: '112323,123123', length: '125', rating: 4.4, difficulty: 3 },
			{ id: 7, name: 'Trail 7', description: 'asd asd asdasfasd', start: '123123123,123123', length: '67', rating: 2, difficulty: 5 },
			{ id: 8, name: 'Trail 8', description: 'asd asd asdasfasd', start: '11231123,123123', length: '86', rating: 3.3, difficulty: 3 },
			{ id: 9, name: 'Trail 9', description: 'asd asd asdasfasd', start: '867967123,123123', length: '12', rating: 1, difficulty: 1 }
		];
		return this.TRAILS;
	}

	getTrail(id: number) {
		this.TRAIL = { id: 1, name: 'Trail 1', description: 'asd asd asdasfasd', start: '1345123,123123', length: '16', rating: 1.7, difficulty: 4 };
		return this.TRAIL;
	}
}
