import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- Seperator -->
    <app-header (featureSelected)="onNavigate($event)"></app-header>
    <div class="container">
      <div class="row">
        <div class="col-md-12 mt-2">
          <hr class="divider py-1 bg-danger" />
          <app-recipes *ngIf="loadedFeature === 'recipe'"></app-recipes>
          <hr class="divider py-1 bg-danger" />
          <hr class="divider py-1 bg-white" />
          <hr class="divider py-1 bg-primary" />
          <app-shopping-list
            *ngIf="loadedFeature !== 'recipe'"
          ></app-shopping-list>
          <hr class="divider py-1 bg-primary" />
        </div>
      </div>
    </div>
    <!-- Seperator -->
  `,
})
export class AppComponent {
  title = 'angular-listy';
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
