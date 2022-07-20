# AngularListy

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.
- This project is a simple recipe book and shopping list app, implementing some data binds, and editable lists.

## Problems Faced

- At this time of writing (2022.07.14), Angular CLI 14 does not have `ng-bootstrap` support, which hinders a few visual implmentation, such as collapsing navbars
- Managed to get around this by implementing this [https://github.com/ng-bootstrap/ng-bootstrap/issues/4340#issuecomment-1175816414]
- Always cross-reference the Udemy project's bootstrap codes with the current version of bootstrap, since so much breaks between 3 to 4 and again to 5
- ie. from Bootstrap 4 -> 5, almost anything with a `left` or `right` suffix is now `start` and `end` to respect Right-To-Left accessibility.

#### Development server

First run `npm install` (or `npm install --legacy-peerdeps` depending on how old the project code itself is) just to get the basic dependancies and CLI environment first.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
