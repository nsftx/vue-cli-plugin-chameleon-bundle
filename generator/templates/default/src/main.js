import Vue from 'vue';
import App from './App';
import Sample from './index';

Vue.config.productionTip = false;
Vue.use(Sample, {
  eventBus: new Vue(),
});

new Vue({
  render: h => h(App),
}).$mount('#app');
