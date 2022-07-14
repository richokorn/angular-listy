import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  template: `
    <!-- Seperator -->
    <div class="row">
      <div class="col-xs-12">
        <app-shopping-edit></app-shopping-edit>
        <hr />
        <ul class="list-group">
          <a
            class="list-group-item"
            style="cursor: pointer"
            *ngFor="let ingredient of ingredients"
          >
            {{ ingredient.name }} - {{ ingredient.amount }}
            {{ ingredient.unit }}
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
}
