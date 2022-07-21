import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-item',
  template: `
    <!-- Seperator -->
    <a
      style="cursor: pointer"
      class="list-group-item clearfix"
      (click)="onSelected()"
    >
      <div class="float-start">
        <h4 class="list-group-item-heading">{{ recipe.name }}</h4>
        <p class="list-group-item-text mb-0">{{ recipe.description }}</p>
      </div>
      <div class="float-end">
        <img
          src="{{ recipe.imagePath }}"
          alt="{{ recipe.name }}"
          class="img-responsive"
          style="max-height: 65px"
        />
      </div>
    </a>
    <!-- Seperator -->
  `,
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
