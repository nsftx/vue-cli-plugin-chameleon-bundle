const { cloneDeep, merge } = require('lodash');
const webpackConfig = require('../node_modules/@vue/cli-service/webpack.config.js');
const packageConfig = require('../package.json');

const getConfig = (isMeta) => {
  const bundleName = packageConfig.chameleon.bundle;
  const fileSuffix = isMeta ? '.meta' : '';
  const globalSuffix = isMeta ? '_META' : '';

  return merge({}, cloneDeep(webpackConfig),
    {
      output: {
        libraryTarget: 'umd',
        libraryExport: 'default',
      },
    },
    {
      entry: {
        app: [`./src/index${fileSuffix}.js`],
      },
      externals: {
        vue: 'Vue',
      },
      output: {
        filename: `js/bundle${fileSuffix}.js`,
        library: `__CHAMELEON_${bundleName.toUpperCase()}${globalSuffix}__`,
      },
    },
  );
};

const bundleConfig = getConfig(false);
const bundleMetaConfig = getConfig(true);

module.exports = [
  bundleConfig,
  bundleMetaConfig,
];