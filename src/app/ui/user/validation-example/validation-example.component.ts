import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'app-validation-example',
  templateUrl: './validation-example.component.html',
  styleUrls: ['./validation-example.component.css']
})
export class ValidationExampleComponent implements OnInit {

  @ViewChild('passwordResetForm') currentForm: NgForm;

  constructor( private router: Router ) {  }

  ngOnInit() {
  }

  passRes: any = {
    email:"",
    newPassword:"",
    confirmPassword:""
  };

  validateInput(ctrlName){
    this.currentForm.controls[ctrlName].markAsDirty();
    return this.currentForm.controls[ctrlName].valid;
  }

  onSubmit(){
    debugger;
    let isFormValid = this.currentForm.valid;

    isFormValid = this.validateInput("email");
    if(!isFormValid){
      return;
    }

    this.router.navigate(['/successful-reset']);

  }

}
