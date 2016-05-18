import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { TrailComponent } from './trail/trail.component';

@Injectable()
export class TrailslinkService {

	private trailSelectedSource = new Subject<TrailComponent>();
	
	trailSelected$ = this.trailSelectedSource.asObservable();
	
	selectTrail(trail: TrailComponent) {
		this.trailSelectedSource.next(trail);
	}

}
