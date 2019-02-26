# Samplemultilang

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.
now upgraded to  version 7.0.0 

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
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoaderService {
    public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    
    setLoggedInStatus(value: boolean) {
        this.loginStatus.next(value);
    }
    
    display(value: boolean) {
        this.status.next(value);
    }
    
}

<div *ngIf="showLoader" class="k-i-loading"></div>

this.loaderService.status.subscribe((val: boolean) => {
            this.showLoader = val;
            this.logger.info('AppComponent : Loader value'+val);
        });

         this.loaderService.display(true);
