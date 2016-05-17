import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MdButton } from '@angular2-material/button';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdSidenav, MdSidenavLayout } from '@angular2-material/sidenav';

@Component({
  moduleId: module.id,
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
  directives: [MdButton, MdToolbar, MdSidenav, MdSidenavLayout]
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
  }

}
