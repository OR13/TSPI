ALTGC
===============

Angular Less TypeScript Gulp CoffeeScript

A project for hybrid coffee-typescript apps, or migrating from coffeescript to typescript.

### Getting Started

Clone this repo:

``` git clone git@github.com:OR13/ALTGC.git ```

Enter the root directory:

``` cd ALTGC ```

Install the dev dependencies locally :

``` npm install && bower install ```

Serve the app locally:

``` gulp clean; gulp serve ```

Build the app for development:

``` gulp clean; gulp build-dev ```

Build the app for staging:

``` gulp clean; gulp build-staging ```

Build the app for production:

``` gulp clean; gulp build-prod ```

### Features

* IE 9 support through a large number of fancy css processors.
* Less support for those not yet willing to take the sass plunge.
* Toastr demo for app notifications.
* Common packages: ui-router, bootstrap, firebase.
* Gulp does all the heavy lifting. Optimized builds.
* TypeScript and CoffeeScript Gulp Support.
* Strict mode is the default.