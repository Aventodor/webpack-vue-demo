// 引用vue-router插件
import Router from 'vue-router'
// 使用基础路由配置
import routes from './routes'

// 返回Vue Router实例1
export default () => {
  return new Router({
    routes,
    mode: 'history',
    // base: '/base/',
    linkExactActiveClass: 'exact-active-class',
    linkActiveClass: 'active-class',
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {x: 0, y: 0}
      }
    }
    // fallback: true,
    // parseQuery (query) {},
    // stringifyQuery (obj) {}
  })
}
