import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- Seperator -->
    <app-header></app-header>
    <div class="container">
      <div class="row">
        <div class="col-md-12 mt-2">
          <hr class="divider py-1 bg-danger" />
          <app-recipes></app-recipes>
          <hr class="divider py-1 bg-danger" />
          <hr class="divider py-1 bg-white" />
          <hr class="divider py-1 bg-primary" />
          <app-shopping-list></app-shopping-list>
          <hr class="divider py-1 bg-primary" />
        </div>
      </div>
    </div>
    <!-- Seperator -->
  `,
})
export class AppComponent {
  title = 'angular-listy';
}
