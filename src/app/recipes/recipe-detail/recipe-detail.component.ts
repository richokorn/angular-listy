import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  template: `
    <!-- Seperator -->
    <div class="row">
      <div class="col-xs-12 my-2" style="max-height: 200px; overflow: hidden;">
        <img
          [src]="recipe.imagePath"
          alt="{{ recipe.name }}"
          class="img-fluid w-100 rounded"
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
              <a class="dropdown-item" href="#"
                >✔ Add Ingredients to Shopping List</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#">✏ Edit Recipe</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">❌ Delete Recipe</a>
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
        <p class="text-secondary">Ingredients</p>
        <!-- Seperator -->
      </div>
    </div>
  `,
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() {}

  ngOnInit(): void {}
}
