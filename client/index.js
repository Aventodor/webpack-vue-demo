import Vue from 'vue'
import App from './app.vue'

import VueRouter from 'vue-router'
import createRouter from './config/router'
import createStore from './store/store'
import './asset/css/global.styl'

import Vuex from 'vuex'
Vue.use(Vuex)

Vue.use(VueRouter)

const router = createRouter()
const store = createStore()

store.registerModule('c', {
  state: {
    text: 3
  }
})

// store.watch((state) => state.count + 1, (newCount) => {
//   console.log('newCount watched: ' + newCount)
// })

// store.subscribe((mutation, state) => {
//   console.log(mutation.type)
//   console.log(mutation.payload)
// })

store.subscribeAction((action, state) => {
  console.log(action.type)
  console.log(action.payload)
})

router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  // if (to.fullPath === '/app') {
  //   next('/login')
  // } else {
  //   next()
  // }
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})

router.afterEach((to, from) => {
  console.log('after each invoked')
})

const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount(root)
