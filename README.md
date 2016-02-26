# React / Flux Boilerplate

A starting point for React / Flux projects, inspired by the [flux examples][flux-examples].

Please note, this setup only provides a client-side implementation of react/flux. This is a very lightweight implementation that has suited my needs for small client-side projects. If you need a fuller feature set, or support for isomorphic apps then I would recommend [redux][redux] or [fluxible][fluxible] depending on your needs.

This boilerplate provides the following:

* Default wiring for a store, actions and a dispatcher
* Default components
* Configured [React-router][react-router]
* ~~Scss boilerplate, following BEM and ITCSS architecture~~
* [Radium][radium] - styling with JS
* [react-component-width-mixin][react-component-width-mixin]
* Minimal Scss setup for convenience
* Gulp build scripts for HTML, SCSS and JS
* Watchify configured for fast rebuilding of JS
* Dev server with livereload

## Getting started
Download or clone the repo and run `npm install` (you will also need gulp [installed globally][gulp]). To start the server with livereload just run `gulp`.

### Available gulp tasks

* `gulp` - default task sets environment to development, starts the dev server, compiles assets, and watches for changes
* `gulp build` or `gulp build:production` - build only, with environment set to production
* `gulp faux-production` - same as default task, but with the environment set to production
* `gulp build:development` - build only, with environment set to development

See `gulpfile.js` for more detail on which sub-tasks each top level task is running.

## Deployment

Running `gulp build` will run all the build scripts and save the output to `/dist`. This entire folder can be deployed to your production server. These are static assets only, so they can be deployed to a static file server such as amazon s3, or github pages.

[react-router]: https://github.com/reactjs/react-router
[flux-examples]: https://github.com/facebook/flux/tree/master/examples
[gulp]: https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
[redux]: http://redux.js.org/
[fluxible]: http://fluxible.io/
[radium]: http://stack.formidable.com/radium/
[react-component-width-mixin]: https://www.npmjs.com/package/react-component-width-mixin
