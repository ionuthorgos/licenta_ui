import { Component, OnInit } from '@angular/core';
//import { NgForm } from "@angular/forms";
import { User } from '../user.model';
/*import { FormGroup, FormBuilder, Validators } from '@angular/forms';*/
@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.css']
})
export class UsersComponentComponent implements OnInit {
  get model(): User {
    return this._model;
  }

  set model(value: User) {
    this._model = value;
  }

	//@ViewChild('model') currentForm: NgForm;

	private _model = new User('','','','','');

  constructor() { }

  ngOnInit() {
  }
}
