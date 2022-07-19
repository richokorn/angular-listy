import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  template: `
    <!-- Seperator -->
    <div class="row">
      <div class="col-xs-12 my-2">
        <app-shopping-edit></app-shopping-edit>
        <hr />
        <ul class="list-group">
          <a
            class="list-group-item"
            style="cursor: pointer"
            *ngFor="let ingredient of ingredients"
          >
            <span
              class="badge badge-pill bg-success"
              style="min-width: min-content; width: 4vw"
            >
              {{ ingredient.amount }} {{ ingredient.unit }}</span
            >
            <span
              class="badge btn bg-danger float-end"
              (click)="deleteIngredient(ingredient)"
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
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  deleteIngredient(ingredient: Ingredient) {
    this.shoppingListService.deleteIngredient(ingredient);
  }
}
