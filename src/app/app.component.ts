import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- Seperator -->
    <app-header (featureSelected)="onNavigate($event)"></app-header>
    <div class="container">
      <div class="row">
        <div class="col-md-12 mt-2">
          <hr
            class="divider py-1 my-1"
            [ngClass]="{
              'bg-primary': loadedFeature === 'recipe',
              'bg-success': loadedFeature === 'shopping-list'
            }"
          />
          <app-recipes *ngIf="loadedFeature === 'recipe'"></app-recipes>
          <app-shopping-list
            *ngIf="loadedFeature !== 'recipe'"
          ></app-shopping-list>
          <hr
            class="divider py-1 my-1"
            [ngClass]="{
              'bg-primary': loadedFeature === 'recipe',
              'bg-success': loadedFeature === 'shopping-list'
            }"
          />
          <br />
          <p appBetterHighlight>
            Better Highlight Directive Text - Hover over me!
          </p>
          <!-- <div [ngSwitch]="value">
          <p *ngSwitchCase="5">Value is 5</p>
          <p *ngSwitchCase="10">Value is 10</p>
          <p *ngSwitchCase="100">Value is 100</p>
          <p *ngSwitchDefault="5">Value is Default</p>
        </div> -->
          <!-- Seperator -->
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
