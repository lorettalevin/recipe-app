import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model'

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
      new Recipe('Test Recipe', 'This is a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSscIBTXU2UwVzukSnuooPIlmksaKzYC7v5xgbo-MkrLZVmFY9h'),
      new Recipe('Another Test Recipe', 'This is a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSscIBTXU2UwVzukSnuooPIlmksaKzYC7v5xgbo-MkrLZVmFY9h')
    ];

    getRecipes() {
        return this.recipes.slice(); //returns new array which is a copy of the one in this file
    }
}
