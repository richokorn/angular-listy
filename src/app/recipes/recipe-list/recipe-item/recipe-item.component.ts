import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  template: `
    <!-- Seperator -->
    <a
      style="cursor: pointer"
      class="list-group-item  clearfix"
      [routerLink]="[index]"
      routerLinkActive="border-primary"
    >
      <div class="d-flex my-1">
        <div class="float-start w-100">
          <h5 class="mb-1 text-break">{{ recipe.name }}</h5>
          <span class="mt-0 text-muted text-break">
            {{ recipe.description }}
          </span>
        </div>
        <div class="float-end mx-2">
          <img
            src="{{ recipe.imagePath }}"
            alt="{{ recipe.name }}"
            style="max-height: 65px;"
          />
        </div>
      </div>
    </a>
    <!-- Seperator -->
  `,
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  ngOnInit() {}
}
