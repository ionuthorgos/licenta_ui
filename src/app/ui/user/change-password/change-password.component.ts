import { Component, OnInit } from '@angular/core';
import {TestBed} from "@angular/core/testing";
import {async} from "@angular/core/testing";
import {ComponentFixture} from "@angular/core/testing";

  // var ucase = new RegExp("[A-Z]+");
  // var lcase = new RegExp("[a-z]+");
  // var num = new RegExp("[0-9]+");
  //
  // if($("#password1").val().length >= 7){
  //   $("#8char").removeClass("glyphicon-remove");
  //   $("#8char").addClass("glyphicon-ok");
  //   $("#8char").css("color","#00A41E");
  // }else{
  //   $("#8char").removeClass("glyphicon-ok");
  //   $("#8char").addClass("glyphicon-remove");
  //   $("#8char").css("color","#FF0004");
  // }
  //
  // if(ucase.test($("#password1").val())){
  //   $("#ucase").removeClass("glyphicon-remove");
  //   $("#ucase").addClass("glyphicon-ok");
  //   $("#ucase").css("color","#00A41E");
  // }else{
  //   $("#ucase").removeClass("glyphicon-ok");
  //   $("#ucase").addClass("glyphicon-remove");
  //   $("#ucase").css("color","#FF0004");
  // }
  //
  // if(lcase.test($("#password1").val())){
  //   $("#lcase").removeClass("glyphicon-remove");
  //   $("#lcase").addClass("glyphicon-ok");
  //   $("#lcase").css("color","#00A41E");
  // }else{
  //   $("#lcase").removeClass("glyphicon-ok");
  //   $("#lcase").addClass("glyphicon-remove");
  //   $("#lcase").css("color","#FF0004");
  // }
  //
  // if(num.test($("#password1").val())){
  //   $("#num").removeClass("glyphicon-remove");
  //   $("#num").addClass("glyphicon-ok");
  //   $("#num").css("color","#00A41E");
  // }else{
  //   $("#num").removeClass("glyphicon-ok");
  //   $("#num").addClass("glyphicon-remove");
  //   $("#num").css("color","#FF0004");
  // }
  //
  // if($("#password1").val() == $("#password2").val()){
  //   $("#pwmatch").removeClass("glyphicon-remove");
  //   $("#pwmatch").addClass("glyphicon-ok");
  //   $("#pwmatch").css("color","#00A41E");
  // }else{
  //   $("#pwmatch").removeClass("glyphicon-ok");
  //   $("#pwmatch").addClass("glyphicon-remove");
  //   $("#pwmatch").css("color","#FF0004");
  // }
// });

// describe('ChangePasswordComponent', () => {
//   let component: ChangePasswordComponent;
//   let fixture: ComponentFixture<ChangePasswordComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ ChangePasswordComponent ]
//     })
//     .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(ChangePasswordComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

@Component({
  selector: 'app-change-password',
  templateUrl: 'change-password.component.html',
  styleUrls: ['change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
