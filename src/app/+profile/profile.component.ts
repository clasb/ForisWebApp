import { Component, OnInit } from '@angular/core';
import { TrailService } from '../trail.service';
import { TrailComponent } from '../trail/trail.component';

@Component({
	moduleId: module.id,
	selector: 'app-profile',
	templateUrl: 'profile.component.html',
	styleUrls: ['profile.component.css'],
	providers: [TrailService]
})
export class ProfileComponent implements OnInit {

	constructor(private trailsService: TrailService) { }

	trails: TrailComponent[];
	somethingWrong: any;

	ngOnInit() {
		this.trailsService.getAllTrails()
			.subscribe(responseData => {
				console.log("something");
				console.log(responseData);
				this.trails = responseData;
			},
			error => {
				console.log("something wrong");
				console.log(error);
				this.somethingWrong = <any>error;
			}
			);
	}

}
