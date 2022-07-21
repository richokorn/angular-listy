import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <!-- Seperator -->
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand my-0" href="#">🍓 listy</a>
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
            <hr class="my-1 py-1 bg-white" />
            <li class="nav-item mx-0">
              <a class="nav-link py-0" routerLink="/recipes">
                <hr
                  class="my-1 py-1 bg-primary"
                  routerLinkActive="opacity-50"
                />
                <span class="px-3">Recipes</span>
                <hr
                  class="my-1 py-1 bg-primary"
                  routerLinkActive="opacity-50"
                />
              </a>
            </li>
            <li class="nav-item mx-0">
              <a class="nav-link py-0" routerLink="/shopping-list">
                <hr
                  class="my-1 py-1 bg-success"
                  routerLinkActive="opacity-50"
                />
                <span class="px-3">Shopping List</span>
                <hr
                  class="my-1 py-1 bg-success"
                  routerLinkActive="opacity-50"
                />
              </a>
            </li>
            <li class="nav-item mx-0">
              <a class="nav-link py-0" routerLink="##">
                <hr class="my-1 py-1 bg-danger" routerLinkActive="opacity-50" />
                <span class="px-3">Dummy 1</span>
                <hr class="my-1 py-1 bg-danger" routerLinkActive="opacity-50" />
              </a>
            </li>
            <li class="nav-item mx-0">
              <a class="nav-link py-0" routerLink="##">
                <hr
                  class="my-1 py-1 bg-secondary"
                  routerLinkActive="opacity-50"
                />
                <span class="px-3">Dummy 2</span>
                <hr
                  class="my-1 py-1 bg-secondary"
                  routerLinkActive="opacity-50"
                />
              </a>
            </li>
          </ul>
          <ul class="navbar-nav d-flex">
            <li ngbDropdown class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" ngbDropdownToggle>Manage </a>
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
