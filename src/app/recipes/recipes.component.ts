import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  template: `
    <!-- Seperator -->
    <div class="row">
      <div class="col-md-5">
        <app-recipe-list></app-recipe-list>
      </div>
      <div class="col-md-7">
        <app-recipe-detail></app-recipe-detail>
      </div>
    </div>
    <!-- Seperator -->
  `,
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
