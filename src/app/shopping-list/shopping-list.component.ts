import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  template: `
    <!-- Seperator -->
    <hr class="divider py-1 my-1 bg-success opacity-50" />
    <div class="row">
      <div class="col-xs-12 my-2">
        <app-shopping-edit></app-shopping-edit>
        <hr />
        <ul class="list-group">
          <!--
            we want a border when a specific ingredient is selected

-->
          <a
            class="list-group-item"
            style="cursor: pointer"
            *ngFor="let ingredient of ingredients; let i = index"
            (click)="onEditItem(i)"
            [ngClass]="
              i === (this.shoppingListService.startedEditing | async)
                ? 'list-group-item-success'
                : ''
            "
          >
            <span class="badge badge-pill bg-success" style="width: 100px">
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
    <hr class="divider py-1 my-1 bg-success opacity-50" />
    <!-- Seperator -->
  `,
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  deleteIngredient(ingredient: Ingredient) {
    this.shoppingListService.deleteIngredient(ingredient);
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}
