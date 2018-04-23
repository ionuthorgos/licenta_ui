import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Category} from "../category";

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

  @Input() category:Category;
  @Output() notifyStartEdit: EventEmitter<Category> = new EventEmitter<Category>();
  @Output() notifyStartDelete: EventEmitter<Category> = new EventEmitter<Category>();

  /*age=5;
  person = {
    age:1,
    name:''
  };*/

  custClass: string = '';


  constructor() { }


  ngOnInit() {
  }

  /*maresteVarsta(){
    this.person.age ++;
  }*/

  startEditCategory(){
    this.notifyStartEdit.emit(this.category);
  }

  mouseEnter(){
      this.custClass = 'over';
  }
  mouseLeave(){
    this.custClass= '';
  }
  delete(){
    this.notifyStartDelete.emit(this.category);
  }
}
