import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  template: `
    <!-- Seperator -->
    <div class="row">
      <div class="col-xs-12">
        <form>
          <div class="row">
            <div class="col-sm-7 form-group">
              <label class="my-1" for="name">Ingredient</label>
              <input type="text" id="name" class="form-control" #nameInput />
            </div>
            <div class="col-sm-3 form-group">
              <label class="my-1" for="amount">Amount</label>
              <input
                type="number"
                id="amount"
                class="form-control"
                #amountInput
              />
            </div>
            <div class="col-sm-2 form-group">
              <label class="my-1" for="unit">Unit</label>
              <select
                type="text"
                id="unit"
                class="form-control"
                style="cursor: pointer"
                #unitInput
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
                (click)="onAddItem()"
              >
                Add
              </button>
              <button type="submit" class="btn my-3 me-2 btn-danger">
                Delete
              </button>
              <button type="submit" class="btn my-3 me-2 btn-primary">
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
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('unitInput') unitInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAddItem() {
    const ingName: string = this.nameInputRef.nativeElement.value;
    const ingAmount: number = Number(this.amountInputRef.nativeElement.value);
    const ingUnit: string = this.unitInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount, ingUnit);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
