import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

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

  constructor(private shoppinListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppinListService.addIngredients(ingredients);
  }
}
