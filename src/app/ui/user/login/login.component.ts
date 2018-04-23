import { Component, OnInit} from '@angular/core';
import {User} from './user.interface';
import {Router} from "@angular/router";
import {LocalStorageService} from "angular-2-local-storage";
import {PubSubService} from "../../../services/pubsub/pubsub";
import {HttpWrapperService} from "../../../services/http/httpService";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  // public user: User;

  user: User = {
    email: '',
    password: ''
  };


  constructor(private httpService: HttpWrapperService,
              private router: Router,
              private localStorageService: LocalStorageService,
              private pubSubService: PubSubService) {

  }


  serverData: any = null;

  async onSubmit() {
    let request = {
      login: this.user.email,
      password: this.user.password
    };
    debugger;

    this.serverData = await this.httpService.postJson("api/pub/security/login", request);
    debugger;
    if(!this.serverData.success){
      return;
    }

    this.localStorageService.add('user', this.serverData);
    this.pubSubService.publish("login", this.serverData);
    this.router.navigate(['/login']);
    this.router.navigate(['/']);

    console.log(this.serverData);


  }
  ngOnInit(){

  }


}



