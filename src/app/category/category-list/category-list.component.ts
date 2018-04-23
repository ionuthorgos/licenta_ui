import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import {Category} from "../category";
import {HttpWrapperService} from "../../services/http/httpService";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  category: Category = null;
  selectedCategory: Category = null;

  categoryList: Array<Category> = [];
  message:string ="";

  constructor(private httpService: HttpWrapperService) { }

  async ngOnInit() {
    this.categoryList = await this.getCategoriesFromDb();
  }

  showAddCategoryScreen()
  {
    this.category = new Category();
  }


  add(){
    const existentCategory = this.categoryList.find(it=>it.name === this.category.name);
    if(existentCategory){
      this.message = "Category exists";
      return;
    }
    this.message = "";


    if(this.category == null)
    {
      return;
    }
    /*const reg = /[^A-Za-z0-9]+/g;*/
    this.category.id = UUID.UUID();
    this.category.added = new Date();
    this.categoryList.push(this.category);
    this.saveCategoryToDatabase(this.category);

    this.category = null;

  }

  startEditCategory(categoryItem){
    this.selectedCategory = {...categoryItem} ;
    // this.selectedCategory = categoryItem;
  }

  saveSelectedCategory(){
    let category = this.categoryList.find(it=>it.id === this.selectedCategory.id);
    category = {...category, name: this.selectedCategory.name};

    const categoryIndex = this.categoryList.findIndex(it=>it.id === this.selectedCategory.id);

    this.categoryList[categoryIndex] = category;

    this.saveCategoryToDatabase(category);

    this.selectedCategory = null;
  }

  saveCategoryToDatabase(category){
    if(this.categoryList.length === 0){
      return;
    }

    var dataForServer = {
      proxy:{
        "method":"add_edit"
      },
      "data":category
    };

    const dbResp =  this.httpService.postJson("api/category/generic",dataForServer);
    console.log(dbResp);

  }
  startDeleteCategory(item){
       this.categoryList = this.categoryList.filter(el => el.id !== item.id);
  }

  async getCategoriesFromDb() : Promise<Array<Category>> {
        var dataForServer = {
      proxy:{
        "method":"get"
      },
      "data":{}
    };

    const dbResult =  await this.httpService.postJson("api/category/generic",dataForServer);


    console.log(dbResult);
    const arr : Category[] = [];
    arr.push(...dbResult.data );

    return arr;
  }



}
