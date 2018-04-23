import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  constructor() { }

  public valoare: number = 0;

  public increase(){
    this.valoare++;
  }
  public decrease(){
    this.valoare --;
  }

}
