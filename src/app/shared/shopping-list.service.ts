import { Subject } from 'rxjs';
import { Ingredient } from './ingredient.model';

export class ShoppingListService {
  shoppingList: Ingredient[] = [
    new Ingredient('Pizza Dough', 250, 'g'),
    new Ingredient('Tomato Sauce', 150, 'ml'),
  ];

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  getIngredient(index: number) {
    return this.shoppingList[index];
  }

  getIngredients() {
    return this.shoppingList.slice();
  }

  addIngredient(ingredient: Ingredient) {
    // if the ingredients array is not empty, we need to check if the ingredient already exists
    if (this.shoppingList.length > 0) {
      const found = this.shoppingList.find((i) => i.name === ingredient.name);
      if (found) {
        found.amount += ingredient.amount; // if the ingredient already exists, we add the amount
      } else {
        this.shoppingList.push(ingredient); // if the ingredient does not exist, we push it to the array
      }
      // if the ingredients array is empty, we can just add the ingredient
    } else {
      this.shoppingList.push(ingredient);
    }
    this.ingredientsChanged.next(this.shoppingList.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // if the ingredients array is not empty, we need to check each ingredient if it already exists
    // we can loop through each ingredient and call the addIngredient method
    if (ingredients.length > 0) {
      ingredients.forEach((ingredient) => {
        this.addIngredient(ingredient);
      });
    }
  }

  setIngredients(ingredients: Ingredient[]) {
    this.shoppingList = ingredients;
    this.ingredientsChanged.next(this.shoppingList.slice());
  }

  deleteIngredient(ingredient: Ingredient) {
    this.shoppingList.splice(this.shoppingList.indexOf(ingredient), 1);
    this.ingredientsChanged.next(this.shoppingList.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.shoppingList[index] = newIngredient;
    this.ingredientsChanged.next(this.shoppingList.slice());
  }

  clearEditMode() {
    this.startedEditing.next(-1);
  }
}
