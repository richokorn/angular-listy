import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  template: `
    <!-- Seperator -->
    <div>Hellooooo</div>
    <!-- Seperator -->
  `,
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = Number(params['id']);
      this.editMode = params['id'] != null;
      console.log('recipe-edit.component.ts: this.editMode: ', this.editMode);
    });
  }
}
