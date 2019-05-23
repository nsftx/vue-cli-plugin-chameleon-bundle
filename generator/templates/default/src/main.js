import Vue from 'vue';
import connectorApi from '@nsoft/chameleon-sdk/src/api/connector';
import App from './App';
import SampleBundle from './index';

// Add Chameleon material bundle for playground purposes
const material = '__CHAMELEON_MATERIAL__';
Vue.use(window[material]);

Vue.config.productionTip = false;
Vue.use(SampleBundle, {
  connector: connectorApi,
  eventBus: new Vue(),
  isPreviewMode: true,
});

new Vue({
  render: h => h(App),
}).$mount('#app');
