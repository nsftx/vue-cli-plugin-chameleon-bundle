module.exports = (api, opts, rootOpts) => {
  api.extendPackage({
    name: opts.name,
    description: opts.description,
    author: opts.author,
    scripts: {
      serve: 'vue-cli-service serve --open',
      'build': 'vue-cli-service build --target lib --name bundle --entry src/index.js',
      'build-meta': 'vue-cli-service build --no-clean --target lib --name bundle.meta --entry src/index.meta.js',
      'build-bundle': 'npm run build && npm run build-meta && node build/cleanup.js',
      'zip-bundle': 'node ./build/bundle.js',
      'deploy-bundle': 'node ./build/deploy.js',
      bundle: 'npm run build-bundle && npm run zip-bundle',
      test: 'vue-cli-service test'
    },
    license: opts.license,
    dependencies: {
      '@nsoft/chameleon-sdk': '^1.0.56',
      vuetify: '^1.2.0',
    },
    devDependencies: {
      '@vue/cli-plugin-unit-jest': '^3.0.0',
      '@vue/test-utils': '^1.0.0-beta.24',
      axios: '^0.18.0',
      'babel-core': '^7.0.0-bridge.0',
      eslint: '^5.5.0',
      'eslint-config-airbnb-base': '^13.1.0',
      'eslint-import-resolver-webpack': '^0.10.1',
      'eslint-plugin-html': '^4.0.5',
      'eslint-plugin-import': '^2.14.0',
      'form-data': '^2.3.2',
      lodash: '^4.17.10',
      'node-zip': '^1.1.1',
      'stylus': '^0.54.5',
      'stylus-loader': '^3.0.2',
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

    fs.unlinkSync(api.resolve('.src/components/HelloWorld.vue'));
  });
}
