import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
        'Test Recipe',
        'This is a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSscIBTXU2UwVzukSnuooPIlmksaKzYC7v5xgbo-MkrLZVmFY9h',
        [
          new Ingredient('Stuff', 5),
          new Ingredient('More stuff', 10)
        ]),
    new Recipe(
        'Salmon Poke Bowl',
        'Delicious and easy!', 'https://lifemadesweeter.com/wp-content/uploads/Salmon-Poke-Bowl-makes-a-light-healthy-and-refreshing-meal.-e1475145915443.jpg',
        [
          new Ingredient('Salmon', 1),
          new Ingredient('Avocado', 1)
        ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); //returns new array which is a copy of the one in this file
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
