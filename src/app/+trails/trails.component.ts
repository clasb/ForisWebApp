import { Component, OnInit } from '@angular/core';
import { MapComponent } from '../map';
import { TraillistComponent } from '../traillist';
import { TraildetailComponent } from '../traildetail';
import { TrailslinkService } from '../trailslink.service';

@Component({
	moduleId: module.id,
	selector: 'app-trails',
	templateUrl: 'trails.component.html',
	styleUrls: ['trails.component.css'],
	directives: [MapComponent, TraillistComponent, TraildetailComponent],
	providers: [TrailslinkService]
})
export class TrailsComponent implements OnInit {
	constructor() { }

	ngOnInit() {
	}

}
