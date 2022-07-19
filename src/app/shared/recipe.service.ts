import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza Margherita',
      'Classic. Simple. Delicious.',
      'https://images.pexels.com/photos/11568782/pexels-photo-11568782.jpeg?cs=srgb&dl=pexels-christina-petsos-11568782.jpg&fm=jpg'
    ),
    new Recipe(
      'Spaghetti Bolognese',
      'A taste of Italy in the comfort of your own home.',
      'https://thumbs.dreamstime.com/b/spaghetti-bolognese-black-serving-platter-fresh-basil-parmesan-44237816.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
