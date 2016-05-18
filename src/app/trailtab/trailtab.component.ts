import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TrailComponent } from '../trail/trail.component';
import { TrailslinkService } from '../trailslink.service';

@Component({
	moduleId: module.id,
	selector: 'app-trailtab',
	templateUrl: 'trailtab.component.html',
	styleUrls: ['trailtab.component.css']
})

export class TrailtabComponent implements OnInit {

	@Input()
	trail: TrailComponent;

	constructor(private trailsLink: TrailslinkService) { }

	ngOnInit() {
	}

	selectTrail(trail: TrailComponent) {
		this.trailsLink.selectTrail(trail);
	}
}
