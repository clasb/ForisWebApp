import { Component, OnInit } from '@angular/core';
import { TrailService } from '../trail.service';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css'],
  providers: [TrailService]
})
export class ProfileComponent implements OnInit {

  constructor(private trails: TrailService) {}

  ngOnInit() {
		this.trails.getAllTrails()
  }

}
