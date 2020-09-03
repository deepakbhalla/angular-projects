# ShoppingAppV1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Steps Followed while building this App

1. Create HeaderComponent

    * Created this component manually just for practice purpose, rest components have been created using CLI.
    * Create package 'header' inside 'app' folder and create below two files -
        - header.component.ts

            Add below code -

                import { Component } from "@angular/core";

                @Component({
                    selector: 'app-header',
                    templateUrl: './header.component.html'
                })
                export class HeaderComponent {

                }

        - header.component.html

            Add any dummy test for testing purpose for now.

    * Declare 'HeaderComponent' in the 'app.module.ts' file and include it's import statement as well.

2. Create RecipesComponent

    * Create this component using CLI command -
        
        ng generate component recipes --spec false

        or 

        ng g c recipes --spec false

3. Create RecipesListComponent inside recipes folder

    * Create this component using CLI command -

        ng g c recipes/recipes-list --spec false

4. Create RecipeDetailComponent inside recipes folder

    * Create this component using CLI command -

        ng g c recipes/recipe-detail --spec false

5. Create RecipeItemComponent inside recipes/recipes-item folder

    * Create this component using CLI command -

        ng g c recipes/recipes-list/recipe-item --spec false

6. Create ShoppingListComponent

    * Create this component using CLI command -

        ng g c shopping-list --spec false

7. Create ShoppingEditComponent inside shopping-list folder

    * Create this component using CLI command -

        ng g c shopping-list/shopping-edit --spec false

## List of components created so far

    ![Image Sample](screenshot/list-of-components.png)