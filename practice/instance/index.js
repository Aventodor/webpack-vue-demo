import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div ref="div">{{text}} {{obj.a}}</div>',
  data: {
    text: 0,
    obj: {}
  }
  // watch: {
  //   text (newVal, oldVal) {
  //     console.log(`${newVal},${oldVal}`)
  //   }
  // }
})

app.$mount('#root')

// let i = 0
setInterval(() => {
  // i++
  app.text++
  app.text++
  app.text++
  app.text++
  app.text++
  // app.obj.a = i
  // app.$set(app.obj, 'a', i)
  // app.$forceUpdate()
  // app.$options.data.text += 1
  // app.$data.text += 1
}, 1000)

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }
// console.log(app.$root === app)
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer)

// const unwatch = app.$watch('text', (newVal, oldVal) => {
//   console.log(`${newVal},${oldVal}`)
// })
// setTimeout(() => {
//   unwatch()
// }, 5000)

// app.$once('text', (a, b) => {
//   console.log(`text emited ${a},${b}`)
// })
// setInterval(() => {
//   app.$emit('text', 1, 2)
// }, 1000)
