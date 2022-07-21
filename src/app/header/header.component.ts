import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <!-- Seperator -->
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand my-1" href="#">🍓 listy</a>
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
          <ul class="navbar-nav me-auto text-center">
            <li class="nav-item m-1">
              <div>
                <hr class="divider py-1 bg-primary my-0" />
                <a class="nav-link bg-blue-100" routerLink="/recipes">
                  Recipes</a
                >
                <hr class="divider py-1 bg-primary my-0" />
              </div>
            </li>
            <li class="nav-item m-1">
              <div>
                <hr class="divider py-1 bg-success my-0" />
                <a class="nav-link" routerLink="/shopping-list"
                  >Shopping List</a
                >
                <hr class="divider py-1 bg-success my-0" />
              </div>
            </li>
            <li class="nav-item m-1">
              <div>
                <hr class="divider py-1 bg-secondary my-0" />
                <a class="nav-link">Dummy Item 1</a>
                <hr class="divider py-1 bg-secondary my-0" />
              </div>
            </li>
            <li class="nav-item m-1">
              <div>
                <hr class="divider py-1 bg-danger my-0" />
                <a class="nav-link">Dummy Item 2</a>
                <hr class="divider py-1 bg-danger my-0" />
              </div>
            </li>
          </ul>
          <ul class="navbar-nav d-flex">
            <li ngbDropdown class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" ngbDropdownToggle> Manage </a>
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
}
