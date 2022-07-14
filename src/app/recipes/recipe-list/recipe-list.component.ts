import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  template: `
    <!-- Seperator -->
    <div class="row">
      <div class="col-xs-12">
        <button class="btn btn-success my-2">New Recipe</button>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <a
          href="#"
          class="list-group-item clearfix"
          *ngFor="let recipe of recipes"
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
        <app-recipe-item></app-recipe-item>
      </div>
    </div>
    <!-- Seperator -->
  `,
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.recipegirl.com/wp-content/uploads/2018/03/Chicago-Style-Deep-Dish-Pizza-RecipeGirl-3-500x500.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
