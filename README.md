# Mdf (now known as angular9-form-app)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.13.

## Angular and node compatibility check:

https://angular.dev/reference/versions

## to run this app in local because it has Angular 9
set NODE_OPTIONS=--openssl-legacy-provider

## Use npm dedupe to eliminate duplicate dependencies:
```bash
npm dedupe
```

## can bypass NGCC processing by disabling Ivy in tsconfig.json:
```json
"angularCompilerOptions": {
  "enableIvy": false
}
```
## Examine Build Logs:

Sometimes additional details can be found in the build logs. Enable verbose logging:
ng build --verbose

## Add the postinstall script in package.json to ensure NGCC runs automatically after npm install:
 Angular Compatibility Compiler (NGCC) tries to process an Angular library and encounters conflicts due to overlapping entry points or duplicate processing attempts. This commonly happens in CI/CD pipelines like GitHub Actions because of incomplete or redundant setup.
 
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
