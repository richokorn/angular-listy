import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <!-- Seperator -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">🍓 listy</a>
        <button
          class="navbar-toggler"
          type="button"
          (click)="isMenuCollapsed = !isMenuCollapsed"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          [ngbCollapse]="isMenuCollapsed"
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Recipes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Shopping List</a>
            </li>
          </ul>
          <ul class="navbar-nav d-flex">
            <li ngbDropdown class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" ngbDropdownToggle>
                Manage
              </a>
              <ul
                ngbDropdownMenu
                class="dropdown-menu"
                style="right: 0; left: auto"
              >
                <li>
                  <a class="dropdown-item" href="#">💾 Save Data </a>
                </li>
                <li><a class="dropdown-item" href="#">🔄 Fetch Data</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Seperator -->
  `,
})
export class HeaderComponent {
  public isMenuCollapsed = true;

  constructor() {}
}
