import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-recipes',
  template: `
    <!-- Seperator -->
    <div class="row">
      <div class="col-md-5">
        <app-recipe-list></app-recipe-list>
      </div>
      <div class="col-md-7">
        <app-recipe-detail
          *ngIf="selectedRecipe; else infoText"
          [recipe]="selectedRecipe"
        ></app-recipe-detail>
        <ng-template #infoText>
          <p class="text-secondary">No recipe selected</p>
        </ng-template>
      </div>
    </div>
    <!-- Seperator -->
  `,
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
