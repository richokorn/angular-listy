import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Ingredient } from './ingredient.model';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { ShoppingListService } from './shopping-list.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService
  ) {}

  recipesHttpUrl: string =
    'https://ng--complete-guide-8a1d7-default-rtdb.europe-west1.firebasedatabase.app/recipes.json';
  shoppinglistHttpUrl: string =
    'https://ng--complete-guide-8a1d7-default-rtdb.europe-west1.firebasedatabase.app/shopping-list.json';

  storeData() {
    this.http.delete(this.recipesHttpUrl).subscribe(() => {
      this.http
        .post(this.recipesHttpUrl, this.recipeService.getRecipes())
        .subscribe();
    });

    this.http.delete(this.shoppinglistHttpUrl).subscribe(() => {
      this.http
        .post(
          this.shoppinglistHttpUrl,
          this.shoppingListService.getIngredients()
        )
        .subscribe();
    });
  }

  fetchRecipes() {
    this.http.get<Recipe[]>(this.recipesHttpUrl).pipe(
      map((recipes) => {
        return recipes[Object.keys(recipes)[0]].map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => this.recipeService.setRecipes(recipes))
    );
  }

  fetchIngredients() {
    this.http
      .get<Ingredient[]>(this.shoppinglistHttpUrl)
      .subscribe((shoppingListIngredients) => {
        this.shoppingListService.setIngredients(
          shoppingListIngredients[Object.keys(shoppingListIngredients)[0]]
        );
      });
  }

  fetchData() {
    return {
      recipes: this.fetchRecipes(),
      shoppingList: this.fetchIngredients(),
    };
  }

  loadDummyData() {
    this.recipeService.setDummyRecipes();
    this.shoppingListService.setDummyIngredients();
  }
}
