import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  template: `
    <!-- Seperator -->
    <div class="row">
      <div class="col-xs-12">
        <form [formGroup]="recipeForm" (ngSubmit)="onSubmit()">
          <div class="row my-2">
            <div class="col-xs-12">
              <button
                type="submit"
                class="btn btn-success me-2"
                [disabled]="!recipeForm.valid"
                (click)="onSubmit()"
              >
                Save
              </button>
              <button
                type="button"
                class="btn btn-danger me-2"
                (click)="onCancel()"
              >
                Cancel
              </button>
            </div>
          </div>
          <div class="row my-3">
            <div class="col-xs-12" style="max-height: 175px; overflow: hidden;">
              <img
                [src]="
                  recipeImagePath
                    ? recipeImagePath
                    : 'https://i.pinimg.com/originals/69/bc/e3/69bce348d5d4d65c3063e4fb38a75f74.png'
                "
                class="img-fluid w-100"
                style="transform: translateY(-33%);"
              />
            </div>
          </div>
          <div class="row my-2">
            <div class="col-xs-12">
              <div class="form-group">
                <label class="my-1" for="imagePath">Image URL</label>
                <input
                  type="text"
                  id="imagePath"
                  formControlName="imagePath"
                  class="form-control"
                  #imagePath
                />
              </div>
            </div>
          </div>
          <div class="row my-2">
            <div class="col-xs-12">
              <div class="form-group">
                <label class="my-1" for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  formControlName="name"
                  class="form-control"
                />
              </div>
            </div>
          </div>
          <div class="row my-2">
            <div class="col-xs-12">
              <div class="form-group">
                <label class="my-1" for="description">Description</label>
                <textarea
                  type="text"
                  id="description"
                  formControlName="description"
                  class="form-control"
                  rows="6"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <div class="row">
                <div class="col-5">
                  <label class="my-1">Ingredient</label>
                </div>
                <div class="col-3">
                  <label class="my-1">Amount</label>
                </div>
                <div class="col-2">
                  <label class="my-1">Unit</label>
                </div>
                <div class="col-2">
                  <label class="my-1">Delete</label>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12" formArrayName="ingredients">
              <div
                class="row"
                *ngFor="let ingredientCtrl of controls; let i = index"
                [formGroupName]="i"
              >
                <div class="col-5 my-1 pe-0">
                  <input
                    class="form-control"
                    formControlName="name"
                    type="text"
                  />
                </div>
                <div class="col-3 my-1 pe-0">
                  <input
                    class="form-control"
                    formControlName="amount"
                    name="amount"
                    type="number"
                  />
                </div>
                <div class="col-2 my-1 pe-0">
                  <select
                    class="form-control"
                    formControlName="unit"
                    name="unit"
                    style="cursor: pointer"
                    type="text"
                  >
                    <option style="cursor: pointer">g</option>
                    <option style="cursor: pointer">ml</option>
                    <option style="cursor: pointer">pcs</option>
                  </select>
                </div>
                <div class="d-flex col-1 my-1 align-items-center">
                  <button
                    class="badge pill btn btn-danger"
                    type="button"
                    (click)="onRemoveIngredient(i)"
                  >
                    X
                  </button>
                </div>
              </div>
              <button
                type="button"
                class="btn list-group-item-primary my-2 "
                (click)="onAddIngredient()"
              >
                ➕ Add Ingredient
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- Seperator -->
  `,
  styles: [
    `
      input.ng-invalid.ng-touched,
      textarea.ng-invalid.ng-touched {
        border-color: red;
      }
    `,
  ],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;
  recipeImagePath: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = Number(params['id']);
      this.editMode = params['id'] != null;
      this.initForm();
      this.recipeImagePath = this.recipeService.getRecipe(this.id).imagePath;
    });
  }

  ngOnChange() {
    this.recipeImagePath = this.recipeService.getRecipe(this.id).imagePath;
  }

  get controls() {
    // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onCancel() {
    this.editMode = false;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onSubmit() {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
      this.editMode = false;
      // now we want to go back to the recipe list using the router
      this.onCancel();
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
      this.editMode = false;
      this.onCancel();
    }
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]), // only numbers, no decimals
        unit: new FormControl(null, Validators.required),
      })
    );
  }

  onRemoveIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]), // only numbers, no decimals
              unit: new FormControl(ingredient.unit),
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      ingredients: recipeIngredients,
    });
  }
}
