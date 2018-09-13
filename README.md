# vue-cli-plugin-chameleon-bundle
Vue CLI plugin for Chameleon bundles

### Usage

This is a project template created from [vue-cli 3.0](https://github.com/vuejs/vue-cli). We strongly recommend to use it with Vue CLI stable version, i.e. 3.0.0 and above, due to build inconsistencies in lower versions.

``` bask
$ npm install -g @vue/cli                # Install vue/cli if you haven't already
$ vue create my-project                  # Create a new project
$ cd my-project                          # Navigate into your new project folder
$ vue add @nsoft/chameleon-bundle        # Add & invoke this plugin to apply bundle template
$ npm run serve                          # Run app and open it in your browser
```

**Options**

* `Project name` - name of your repository, written to `package.json` in `name` field, defaults to *chameleon-bundle*
* `Project description` - description of your repository, written to `package.json` in `description` field, defaults to *Chameleon Bundle Project*
* `Author` - author of your repository, written to `package.json` in `author` field, defaults to empty field
* `License` - license for your repository, written to `package.json` in `license` field, defaults to *MIT*
* `Bundle Name` - name of your bundle, it's used for library global name as `__CHAMELEON_${bundleName}__` and in bundle manifest, defaults to *sample*
* `Bundle Namepace` - namespace for your bundle, it's written in bundle `manifest.json`, defaults to *z*

**Bundle Manifest**

Each bundle must have its own `manifest.json` file which describes it. This file gets bundled together with other bundle files in `bundle.zip` which is used for new bundle registration and existing bundle update.
Bundling process adds each script defined inside manifest `scripts`, as well as css files defined in manifest `styles`. Both of these props are optional, but bundle must have at least one of them.
If a bundle has some help files, they should be grouped in one directory inside `src` and that directory will get bundled to `bundle.zip`. `helpPath` can also point to some remote URL.

### What's Included

- `npm run serve`: Serve with hot reload at localhost on available port
- `npm test`: Unit tests run in [JSDOM](https://github.com/tmpvar/jsdom) with [Jest](https://facebook.github.io/jest/), with support for mocking and ES2015+.
- `npm run build`: Production UMD components library build with minification.
- `npm run build-meta`: Production UMD meta library build with minification.
- `npm run build-bundle`: Production bundle build with minification.
- `npm run zip-build`: Zip bundle files defined in manifest.json, ready for deployment
- `npm run deploy-bundle "${authToken}"`: Deployment of bundle.zip
