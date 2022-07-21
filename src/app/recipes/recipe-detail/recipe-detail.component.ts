import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  template: `
    <!-- Seperator -->
    <div class="row">
      <div class="col-xs-12 my-2" style="max-height: 175px; overflow: hidden;">
        <img
          [src]="recipe.imagePath"
          alt="{{ recipe.name }}"
          class="img-fluid w-100"
          style="transform: translateY(-50%);"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <div ngbDropdown class="dropdown">
          <button
            ngbDropdownToggle
            class="btn w-100 btn-primary dropdown-toggle my-2"
          >
            Manage Recipe
          </button>
          <ul ngbDropdownMenu class="dropdown-menu">
            <li>
              <a
                class="dropdown-item"
                style="cursor: pointer"
                (click)="onAddToShoppingList()"
              >
                ✔ Add Ingredients to Shopping List</a
              >
            </li>
            <li>
              <a class="dropdown-item" style="cursor: pointer">✏ Edit Recipe</a>
            </li>
            <li>
              <a class="dropdown-item" style="cursor: pointer"
                >❌ Delete Recipe</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <h1>{{ recipe.name }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        {{ recipe.description }}
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <ul class="list-group">
          <li
            class="list-group-item"
            *ngFor="let ingredient of recipe.ingredients"
          >
            <span
              class="badge badge-pill bg-primary me-2 float-start"
              style="min-width: min-content; width: 4vw"
            >
              {{ ingredient.amount }} {{ ingredient.unit }}</span
            >
            <span>{{ ingredient.name }}</span>
          </li>
        </ul>

        <!-- Seperator -->
      </div>
    </div>
  `,
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
