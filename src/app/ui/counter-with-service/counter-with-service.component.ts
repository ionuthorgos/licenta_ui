import { Component, OnInit } from '@angular/core';
import {CounterService} from "../../services/counter/counter.service";

@Component({
  selector: 'app-counter-with-service',
  templateUrl: './counter-with-service.component.html',
  styleUrls: ['./counter-with-service.component.css']
})
export class CounterWithServiceComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit() {
  }

  add(){
    this.counterService.increase();
  }

  scade(){
    this.counterService.decrease();
  }

}
