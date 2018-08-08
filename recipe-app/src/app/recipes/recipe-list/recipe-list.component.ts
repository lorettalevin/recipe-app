import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSscIBTXU2UwVzukSnuooPIlmksaKzYC7v5xgbo-MkrLZVmFY9h'),
    new Recipe('Test Recipe', 'This is a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSscIBTXU2UwVzukSnuooPIlmksaKzYC7v5xgbo-MkrLZVmFY9h')
  ];

  constructor() { }

  ngOnInit() {

  }

}
