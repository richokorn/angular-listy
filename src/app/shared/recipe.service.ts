import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from './ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Pizza Margherita',
      'Classic. Simple. Delicious.',
      'https://images.pexels.com/photos/11568782/pexels-photo-11568782.jpeg?cs=srgb&dl=pexels-christina-petsos-11568782.jpg&fm=jpg',
      [
        new Ingredient('Pizza Dough', 750, 'g'),
        new Ingredient('Tomato Sauce', 150, 'ml'),
        new Ingredient('Mozarella', 150, 'g'),
        new Ingredient('Basil Leaves', 5, 'pcs'),
        new Ingredient('Cherry Tomatoes', 10, 'pcs'),
      ]
    ),
    new Recipe(
      'Spaghetti Bolognese',
      'A taste of Italy in the comfort of your own home.',
      'https://thumbs.dreamstime.com/b/spaghetti-bolognese-black-serving-platter-fresh-basil-parmesan-44237816.jpg',
      [
        new Ingredient('Spaghetti', 250, 'g'),
        new Ingredient('Tomato Sauce', 250, 'ml'),
        new Ingredient('Mince Meat', 250, 'g'),
        new Ingredient('Mixed Italian Herbs', 50, 'g'),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());

    // now set the array of recipes equal to the new array of recipes
    this.recipes = this.recipes.splice(index, 1);
  }

}
