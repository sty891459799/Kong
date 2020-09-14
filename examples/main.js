import Vue from 'vue'
import App from './App.vue'

import KInput from '../packages/index';
Vue.use(KInput)
new Vue({
  render: h => h(App),
}).$mount('#app')
