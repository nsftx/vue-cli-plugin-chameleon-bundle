const isProduction = process.env.NODE_ENV === 'production';
const webpackConfigPath = './node_modules/@vue/cli-service/webpack.config.js';

module.exports = {
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  plugins: [
    'vue',
    'html',
  ],
  root: true,
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    'no-debugger': isProduction ? 'error' : 'off',
    'no-console': isProduction ? 'error' : 'off',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: webpackConfigPath,
      },
    },
  },
};