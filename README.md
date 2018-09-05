# vue-cli-plugin-chameleon-bundle
Vue CLI plugin for Chameleon bundles

### Usage

This is a project template created from [vue-cli 3.0](https://github.com/vuejs/vue-cli):

``` bask
$ npm install -g @vue/cli                       # Install vue/cli if you haven't already
$ vue create my-project                         # Create a new project
$ cd my-project                                 # Navigate into your new project folder
$ vue add @nsoft/chameleon-bundle               # Add & invoke this plugin to apply bundle template
$ npm run serve                                 # Run app and open it in your browser
```

### What's Included

- `npm run start/serve`: Serve with hot reload at localhost:8080

- `npm test`: Unit tests run in [JSDOM](https://github.com/tmpvar/jsdom) with [Jest](https://facebook.github.io/jest/), with support for mocking and ES2015+.

- `npm run build`: Production build with minification.

- `npm run build-bundle`: Production build with minification for bundle deployment.

- `npm run zip-build`: Zip bundle: bundle.js, bundle.meta.js and manifest.json

- `npm run build-bundle "${authToken}"`: Deployment of bundle.zip
