import Vue from 'vue'
import App from './app.vue'

import VueRouter from 'vue-router'
import createRouter from './config/router'

import './asset/css/global.styl'

Vue.use(VueRouter)

const router = createRouter()

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
  router,
  render: (h) => h(App)
}).$mount(root)
