module.exports = (api, opts, rootOpts) => {
  api.extendPackage({
    name: opts.name,
    description: opts.description,
    author: opts.author,
    scripts: {
      serve: 'vue-cli-service serve --open',
      test: 'vue-cli-service test:unit',
      lint: 'vue-cli-service lint',
      'build': 'vue-cli-service build --target lib --name bundle --entry src/index.js',
      'build-meta': 'vue-cli-service build --no-clean --target lib --name bundle.meta --entry src/index.meta.js',
      'build-bundle': 'npm run build && npm run build-meta && node build/cleanup.js',
      'zip-bundle': 'node ./build/bundle.js',
      'deploy-bundle:production': 'NODE_ENV=production node ./build/deploy.js',
      'deploy-bundle:staging': 'NODE_ENV=staging node ./build/deploy.js',
      bundle: 'npm run build-bundle && npm run zip-bundle',
    },
    license: opts.license,
    dependencies: {
      '@nsoft/chameleon-sdk': '^1.0.103',
      lodash: '^4.17.15',
      vuetify: '^1.5.0',
    },
    devDependencies: {
      '@vue/cli-plugin-babel': '^3.11.0',
      '@vue/cli-plugin-eslint': '^3.11.0',
      '@vue/cli-plugin-unit-jest': '^3.11.0',
      '@vue/test-utils': '^1.0.0-beta.29',
      axios: '^0.19.0',
      'babel-core': '^7.0.0-bridge.0',
      eslint: '^5.16.0',
      'eslint-config-airbnb-base': '^13.1.0',
      'eslint-import-resolver-webpack': '^0.10.1',
      'eslint-plugin-html': '^4.0.5',
      'eslint-plugin-import': '^2.17.0',
      "eslint-plugin-jest": "^22.6.4",
      "eslint-plugin-vue": "^5.0.0",
      'form-data': '^2.3.2',
      'node-zip': '^1.1.1',
      'stylus': '^0.54.5',
      'stylus-loader': '^3.0.2',
      "uuid": "^3.3.2",
      "vue-jsoneditor": "^1.0.13",
      'webpack-cli': '^3.1.0',
    },
    chameleon: {
      bundle: opts.bundleName,
    },
    jest: {
      moduleNameMapper: {
        '@/(.*)$': '<rootDir>/src/$1',
      },
      transformIgnorePatterns: [
        '/node_modules/(?!(@nsoft)/).*/',
      ],
    },
  });

  api.render('./templates/default', { ...opts });

  api.onCreateComplete(() => {
    const fs = require('fs');

    try {
      fs.unlinkSync(api.resolve('src/components/HelloWorld.vue'));
    } catch(e) {
      // Nothing to do here, there was no component to be deleted
    }
  });
}
