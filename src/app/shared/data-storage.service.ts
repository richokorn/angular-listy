import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  httpUrl: string =
    'https://ng--complete-guide-8a1d7-default-rtdb.europe-west1.firebasedatabase.app/recipes.json';

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.post(this.httpUrl, recipes).subscribe((response) => {
      console.log('response: ', response);
    });
  }
}

// https://ng--complete-guide-8a1d7-default-rtdb.europe-west1.firebasedatabase.app/
