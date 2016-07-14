# React / Redux Boilerplate

A starting point for React / Redux projects.

Please note, this setup only provides a client-side implementation of react/redux. This is a very lightweight implementation that has suited my needs for small client-side projects.

This boilerplate provides the following:

* Default wiring of react + redux
* Default components
* Scss boilerplate, following BEM and ITCSS architecture
* Gulp build scripts for HTML, SCSS and JS
* Watchify configured for fast rebuilding of JS
* Dev server with livereload

For anything more advanced I would recommend [react-redux-universal-hot-example](https://github.com/erikras/react-redux-universal-hot-example).

## Getting started
Download or clone the repo and run `npm install`. To start the server with livereload just run `npm run dev`.

### Available scripts

* `npm run dev` - default task; sets environment to development, starts the dev server, compiles assets, and watches for changes
* `npm run build` - build only, with environment set to production
* `npm run serveProduction` - same as default task, but with the environment set to production
* `npm run test` - run jest tests and eslint

### Dev server
The dev server runs on port `8899`. `http://localhost:8899`

## Deployment

Running `npm run build` will run all the build scripts and save the output to `/dist`. This entire folder can be deployed to your production server. These are static assets only, so they can be deployed to a static file server such as amazon s3, or github pages.
