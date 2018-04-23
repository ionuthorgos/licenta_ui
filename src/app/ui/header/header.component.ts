import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "angular-2-local-storage";
import {PubSubService} from "../../services/pubsub/pubsub";
import {SocketService} from "../../services/socket/socketService";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userCount : number = 0;
  title = 'app';
  user: any = null;
  constructor(
    private localStorageService: LocalStorageService,
    private pubSubService: PubSubService,
   private socketService:SocketService
  ){

  }


  msgReceive(msg){

    debugger;
    this.userCount = msg.usersCount;
  }

  ngOnInit(): void {
    this.socketService.connect();

   const evt : ISocketEvent = {
     evtName: "welcome",
     ctrlName:'header',
     executeFunction: this.msgReceive.bind(this)
   };


    this.socketService.subscribe(evt);

    this.user = this.localStorageService.get('user');

    this.pubSubService.subscribe('login', (val)=>{
      this.user = val;

    });
  }

  logout()
  {
    this.localStorageService.set('user',null);
    this.user = null;
  }

}
