import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  template: `
    <!-- Seperator -->
    <div class="row">
      <div class="col-xs-12">
        <form (ngSubmit)="onAddItem(f)" #f="ngForm">
          <div class="row">
            <div class="col-sm-7 form-group">
              <label class="my-1" for="name">Ingredient</label>
              <input
                type="text"
                id="name"
                class="form-control"
                name="name"
                ngModel
                required
              />
            </div>
            <div class="col-sm-3 form-group">
              <label class="my-1" for="amount">Amount</label>
              <input
                type="number"
                id="amount"
                class="form-control"
                name="amount"
                ngModel
                required
                pattern="^[1-9]+[0-9]*$"
              />
            </div>
            <div class="col-sm-2 form-group">
              <label class="my-1" for="unit">Unit</label>
              <select
                type="text"
                id="unit"
                class="form-control"
                style="cursor: pointer"
                name="unit"
                ngModel
                required
              >
                <option style="cursor: pointer">g</option>
                <option style="cursor: pointer">ml</option>
                <option style="cursor: pointer">pcs</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <button
                type="submit"
                class="btn my-3 me-2 btn-success"
                [disabled]="!f.valid"
              >
                Add
              </button>
              <button type="button" class="btn my-3 me-2 btn-danger">
                Delete
              </button>
              <button type="button" class="btn my-3 me-2 btn-primary">
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- Seperator -->
  `,
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
          unit: this.editedItem.unit,
        });
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount, value.unit);
    this.shoppingListService.addIngredient(newIngredient);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
