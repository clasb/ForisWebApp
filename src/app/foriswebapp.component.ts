import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { MdButton } from '@angular2-material/button';
import { MdInput } from '@angular2-material/input';

@Component({
  moduleId: module.id,
  selector: 'foriswebapp-app',
  templateUrl: 'foriswebapp.component.html',
  styleUrls: ['foriswebapp.component.css'],
  directives: [MdButton, MdInput]
})
export class ForiswebappAppComponent {
	title: 'Foris'
}
