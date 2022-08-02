import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  httpUrl: string =
    'https://ng--complete-guide-8a1d7-default-rtdb.europe-west1.firebasedatabase.app/recipes.json';

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.post(this.httpUrl, recipes).subscribe((response) => {
      console.log('storeRecipes() response: ', response);
    });
  }

  fetchRecipes() {
    this.http.get<Recipe[]>(this.httpUrl).subscribe((recipes) => {

      // this.recipeService.setRecipes(recipes);
      // does not work, because the response is actually an object, not an array


      console.log(typeof recipes);
      // find the array we want in the object
      console.log(recipes);
      console.log(recipes[0].name);
      console.log(Object.keys(recipes));
      console.log(recipes[Object.keys(recipes)[0]]);

      this.recipeService.setRecipes(recipes[Object.keys(recipes)[0]]);
    });
  }
}
