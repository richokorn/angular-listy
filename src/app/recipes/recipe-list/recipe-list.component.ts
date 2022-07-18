import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  template: `
    <!-- Seperator -->
    <div class="row">
      <div class="col-xs-12">
        <button class="btn btn-success my-2">New Recipe</button>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <app-recipe-item
          *ngFor="let recipeEl of recipes"
          [recipe]="recipeEl"
        ></app-recipe-item>
      </div>
    </div>
    <!-- Seperator -->
  `,
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.recipegirl.com/wp-content/uploads/2018/03/Chicago-Style-Deep-Dish-Pizza-RecipeGirl-3-500x500.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
