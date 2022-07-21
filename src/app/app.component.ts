import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- Seperator -->
    <app-header (featureSelected)="onNavigate($event)"></app-header>
    <div class="container">
      <div class="row">
        <div class="col-md-12 mt-2">
          <router-outlet></router-outlet>
          <!-- <app-recipes *ngIf="loadedFeature === 'recipe'"></app-recipes>
          <app-shopping-list
            *ngIf="loadedFeature !== 'recipe'"
          ></app-shopping-list> -->
        </div>
      </div>
    </div>

    <!-- Seperator -->
  `,
})
export class AppComponent {
  title = 'angular-listy';
  loadedFeature = 'recipe';
  // value = 5; // <-- value of ngSwitch

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
