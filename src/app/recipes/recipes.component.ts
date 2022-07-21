import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-recipes',
  template: `
    <!-- Seperator -->
    <hr class="divider py-1 my-1 bg-primary opacity-50" />
    <div class="row">
      <div class="col-md-6">
        <app-recipe-list></app-recipe-list>
      </div>
      <div class="col-md-6">
        <app-recipe-detail
          *ngIf="selectedRecipe; else infoText"
          [recipe]="selectedRecipe"
        ></app-recipe-detail>
        <ng-template #infoText>
          <p class="text-secondary">No recipe selected</p>
        </ng-template>
      </div>
    </div>
    <hr class="divider py-1 my-1 bg-primary opacity-50" />
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
