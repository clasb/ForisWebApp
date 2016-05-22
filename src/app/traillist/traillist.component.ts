import { Component, OnInit } from '@angular/core';
import { TrailtabComponent } from '../trailtab';
import { TrailComponent } from '../trail/trail.component';
import { TrailService } from '../trail.service';

@Component({
	moduleId: module.id,
	selector: 'app-traillist',
	templateUrl: 'traillist.component.html',
	styleUrls: ['traillist.component.css'],
	directives: [TrailtabComponent],
	providers: [TrailService]
})
export class TraillistComponent implements OnInit {

	trails: TrailComponent[];
	errorMessage: any;
	constructor(private trailService: TrailService) { }

	ngOnInit() {
		//this.trailService.getAllTrails().then(trails => this.trails = trails);
		//this.trailService.getAllTrails();
		this.trailService.getAllTrails()
			.subscribe(responseData => {
				console.log("something");
				console.log(responseData);
				this.trails = responseData;
			},
			error => {
				console.log("something wrong");
				console.log(error);
				this.errorMessage = <any>error;
			}
			);
	}

}
