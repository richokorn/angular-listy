import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-recipes',
  template: `
    <!-- Seperator -->
    <hr class="divider py-1 my-1 bg-primary opacity-50" />
    <div class="row my-2">
      <div class="col-md-6">
        <app-recipe-list></app-recipe-list>
      </div>
      <div class="col-md-6">
        <router-outlet></router-outlet>
      </div>
    </div>
    <hr class="divider py-1 my-1 bg-primary opacity-50" />
    <!-- Seperator -->
  `,
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
