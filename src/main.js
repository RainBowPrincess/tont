import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import axios from 'axios'
//import store from './store'
import 'vuetify/dist/vuetify.css'
//import 'vue-material-design-icons/styles.css'
//import 'material-design-icons-iconfont/dist/material-design-icons.css'

import { store } from './store'
import VueStripeCheckout from 'vue-stripe-checkout';
import { Url } from './var.js';


Vue.config.productionTip = false






axios.defaults.baseURL = 'http://45.76.86.13/api';
Vue.$http = axios;

//var url = Url + '/storage/payheader1.jpg';

// const options = {
//   key: 'pk_test_dRc9QvWf14EVOzAkSUCu2Fdb',
//   image: url,
//   locale: 'auto',
//   currency: 'SEK',
//   billingAddress: true,
//   panelLabel: 'Subscribe {{amount}}'
// }

Vue.use(VueStripeCheckout, 'pk_test_dRc9QvWf14EVOzAkSUCu2Fdb');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
