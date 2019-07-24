import Vue from 'vue';
import App from './App.vue';

// smooth scolling
import './libs/smoothScroll/index';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
