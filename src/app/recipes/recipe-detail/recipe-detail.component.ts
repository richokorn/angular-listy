import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  template: `
    <!-- Seperator -->
    <div class="row">
      <div class="col-xs-12">
        <img src="" alt="" class="img-responsive" />
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <h1>Recipe Name</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <div ngbDropdown class="dropdown">
          <button ngbDropdownToggle class="btn btn-primary dropdown-toggle">
            Manage Recipe
          </button>
          <ul ngbDropdownMenu class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#"
                >✔ Add Ingredients to Shopping List</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#">✏ Edit Recipe</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">❌ Delete Recipe</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Seperator -->
  `,
})
export class RecipeDetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
