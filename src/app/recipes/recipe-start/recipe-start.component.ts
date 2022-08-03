import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-start',
  template: `
    <!-- Seperator -->
    <div class="my-1">
      <h1 class="text-muted">Welcome to Listy! 🍓</h1>
      <h4>Create a new recipe or select an existing one.</h4>
    </div>
    <!-- Seperator -->
  `,
})
export class RecipeStartComponent implements OnInit {
  ngOnInit() {
    return;
  }
}
