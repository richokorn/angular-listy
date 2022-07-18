import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe.model';

@Component({
  selector: 'app-recipes',
  template: `
    <!-- Seperator -->
    <div class="row">
      <div class="col-md-5">
        <app-recipe-list
          (recipeWasSelected)="selectedRecipe = $event"
        ></app-recipe-list>
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
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() {}

  ngOnInit() {}
}
