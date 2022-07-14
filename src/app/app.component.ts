import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- Seperator -->
    <app-header></app-header>
    <div class="container">
      <div class="row">
        <div class="col-md-12 mt-2">
          <app-recipes></app-recipes>
          <app-shopping-list></app-shopping-list>
        </div>
      </div>
    </div>
    <!-- Seperator -->
  `,
})
export class AppComponent {
  title = 'angular-listy';
}
