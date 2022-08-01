import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/shared/recipe.service';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  template: `
    <!-- Seperator -->
    <div class="row">
      <div class="col-xs-12">
        <button class="btn w-100 btn-primary my-2" (click)="onNewRecipe()">
          New Recipe
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <app-recipe-item
          *ngFor="let recipeElement of recipes; let i = index"
          [recipe]="recipeElement"
          [index]="i"
        ></app-recipe-item>
      </div>
    </div>
    <!-- Seperator -->
  `,
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
