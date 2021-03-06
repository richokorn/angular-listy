import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  template: `
    <!-- Seperator -->

    <div class="row ">
      <div class="col-xs-12 ">
        <div ngbDropdown class="dropdown ">
          <button
            ngbDropdownToggle
            class="btn w-100 list-group-item-primary dropdown-toggle my-2"
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
              <a
                class="dropdown-item"
                style="cursor: pointer"
                routerLink="/edit"
                (click)="OnEditRecipe()"
                >✏ Edit Recipe</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                style="cursor: pointer"
                (click)="onDeleteRecipe()"
              >
                ❌ Delete Recipe</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 my-2" style="max-height: 175px; overflow: hidden;">
        <img
          [src]="recipe.imagePath"
          alt="{{ recipe.name }}"
          class="img-fluid w-100"
          style="transform: translateY(-33%);"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 m-2">
        <h2 class="mb-1">{{ recipe.name }}</h2>
        <span class="mt-0 text-muted">
          {{ recipe.description }}
        </span>
      </div>
    </div>
    <div class="row"></div>
    <div class="row">
      <div class="col-xs-12">
        <ul class="list-group">
          <li
            class="list-group-item"
            *ngFor="let ingredient of recipe.ingredients"
          >
            <span class="badge badge-pill bg-primary me-2" style="width: 100px">
              {{ ingredient.amount }}
              {{ ingredient.unit }}</span
            >
            <span>{{ ingredient.name }}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- Seperator -->
  `,
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = Number(params['id']);
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  OnEditRecipe() {
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
