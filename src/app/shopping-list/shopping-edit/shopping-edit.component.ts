import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  template: `
    <!-- Seperator -->
    <div class="row">
      <div class="col-xs-12">
        <form>
          <div class="row">
            <div class="col-sm-7 form-group">
              <label class="my-1" for="name">Name</label>
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
              <select type="text" id="unit" class="form-control" #unitInput>
                <option>g</option>
                <option>kg</option>
                <option>ml</option>
                <option>L</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <button
                type="submit"
                class="btn my-3 me-1 btn-success"
                (click)="onAddItem()"
              >
                Add
              </button>
              <button type="submit" class="btn my-3 me-1 btn-danger">
                Delete
              </button>
              <button type="submit" class="btn my-3 me-1 btn-primary">
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

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const ingUnit = this.unitInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount, ingUnit);
    this.ingredientAdded.emit(newIngredient);
  }
}
