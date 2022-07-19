import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  template: `
    <!-- Seperator -->
    <div class="row">
      <div class="col-xs-12 my-2">
        <app-shopping-edit
          (ingredientAdded)="onIngredientAdded($event)"
        ></app-shopping-edit>
        <hr />
        <ul class="list-group">
          <a
            class="list-group-item"
            style="cursor: pointer"
            *ngFor="let ingredient of ingredients"
          >
            <span
              class="badge badge-pill bg-primary"
              style="min-width: min-content; width: 4vw"
            >
              {{ ingredient.amount }} {{ ingredient.unit }}</span
            >
            <span
              class="badge btn bg-danger float-end"
              (click)="onDelete(ingredient)"
            >
              X
            </span>
            {{ ingredient.name }}
          </a>
        </ul>
      </div>
    </div>
    <!-- Seperator -->
  `,
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 2, 'kg'),
    new Ingredient('Tomatoes', 10, 'pcs'),
  ];

  constructor() {}

  ngOnInit(): void {}

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
  onDelete(ingredient: Ingredient) {
    this.ingredients.splice(this.ingredients.indexOf(ingredient), 1);
  }
}
