import { Subject } from 'rxjs';
import { Ingredient } from './ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Pizza Dough', 250, 'g'),
    new Ingredient('Tomatoes', 10, 'pcs'),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    // if the ingredients array is empty, then add the new ingredient
    if (this.ingredients.length === 0) {
      this.ingredients.push(ingredient);
    }
    // if the ingredients array is not empty, then check if the ingredient already exists
    else {
      let ingredientExists = false;
      for (let i = 0; i < this.ingredients.length; i++) {
        if (this.ingredients[i].name === ingredient.name) {
          ingredientExists = true;
          console.log(typeof this.ingredients[i].amount);
          console.log(typeof ingredient.amount);
          this.ingredients[i].amount += ingredient.amount;
        }
      }
      // if the ingredient does not exist, then add it
      if (!ingredientExists) {
        this.ingredients.push(ingredient);
      }
    }
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  deleteIngredient(ingredient: Ingredient) {
    this.ingredients.splice(this.ingredients.indexOf(ingredient), 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // if the ingredients array is empty, then add the new ingredients
    if (this.ingredients.length === 0) {
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.next(this.ingredients.slice());
    }
    // if the ingredients array is not empty, then check if the new ingredients are already in the array
    else {
      for (let ingredient of ingredients) {
        let ingredientExists = false;
        for (let existingIngredient of this.ingredients) {
          if (ingredient.name === existingIngredient.name) {
            ingredientExists = true;
            existingIngredient.amount += ingredient.amount;
          }
        }
        if (!ingredientExists) {
          this.ingredients.push(ingredient);
        }
      }
      this.ingredientsChanged.next(this.ingredients.slice());
    }
  }
}
