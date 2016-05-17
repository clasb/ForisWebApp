import { Component, OnInit } from '@angular/core';
import { MdButton } from '@angular2-material/button';
import { MdInput } from '@angular2-material/input';
import { UserComponent } from '../user';


@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [MdButton, MdInput]
})

export class LoginComponent  {

}
