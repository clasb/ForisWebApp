import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrailComponent } from '../trail/trail.component';
import { TrailslinkService } from '../trailslink.service';
import { Subscription }   from 'rxjs/Subscription';
import { TrailService } from '../trail.service';

@Component({
	moduleId: module.id,
	selector: 'app-traildetail',
	templateUrl: 'traildetail.component.html',
	styleUrls: ['traildetail.component.css'],
	providers: [TrailService]
})
export class TraildetailComponent implements OnInit, OnDestroy {
	trail: TrailComponent;
	subscription: Subscription;
	errorMessage: string;

	constructor(private trailsLink: TrailslinkService, private trailService: TrailService) { 
		this.subscription = trailsLink.trailSelected$.subscribe(
			trail => 
			{ 
				this.trail = trail; 
			})
	}

	ngOnInit() {
		this.trailService.getTrail(1)
			.subscribe(responseData => {
				this.trail = responseData;
			},
			error => {
				this.errorMessage = <any>error;
			}
			);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
