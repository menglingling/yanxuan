// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import moment from 'moment'
import VueMomentJS from 'vue-momentjs'

import 'assets/scss/index.scss'
import 'assets/js/common.js'

Vue.config.productionTip = false


Vue.use(VueLazyload, {
  // error: 'dist/error.png',
  // loading: 'dist/loading.gif'
})
Vue.use(VueMomentJS, moment)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
