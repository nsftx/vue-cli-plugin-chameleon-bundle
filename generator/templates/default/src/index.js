import * as components from './components';
require('./style/main.styl');

export default {
  install(Vue, options) {
    if (options) {
      // eslint-disable-next-line
      Vue.prototype.$chameleon = new Vue({
        data: Object.assign({}, options),
      });
    }

    Object.keys(components).forEach((key) => {
      Vue.use(components[key]);
    });
  },
};
