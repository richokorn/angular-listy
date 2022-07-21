import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/shared/recipe.service';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  template: `
    <!-- Seperator -->
    <div class="row">
      <div class="col-xs-12">
        <button class="btn w-100 btn-primary mt-2">New Recipe</button>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <app-recipe-item
          class="ms-1"
          *ngFor="let recipeElement of recipes; let i = index"
          [recipe]="recipeElement"
          [index]="i"
        ></app-recipe-item>
      </div>
    </div>
    <!-- Seperator -->
  `,
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
