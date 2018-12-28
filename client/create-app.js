import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './app.vue'
import createStroe from './store/store'
import createRouter from './config/router'

import './asset/css/global.styl'

Vue.use(Vuex)
Vue.use(VueRouter)
export default () => {
  const router = createRouter()
  const store = createStroe()

  const app = new Vue({
    router,
    store,
    render: (h) => h(App)
  })

  return {app, router, store}
}
