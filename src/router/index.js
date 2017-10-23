import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/components/home/recommend'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: recommend
  }]
})
