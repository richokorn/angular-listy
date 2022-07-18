import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  template: `
    <!-- Seperator -->
    <div class="row">
      <div class="col-xs-12">
        <button class="btn w-100 btn-primary my-2">New Recipe</button>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <app-recipe-item
          class="me-1"
          *ngFor="let recipeElement of recipes"
          [recipe]="recipeElement"
          (recipeSelected)="onRecipeSelected(recipeElement)"
        ></app-recipe-item>
      </div>
    </div>
    <!-- Seperator -->
  `,
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
