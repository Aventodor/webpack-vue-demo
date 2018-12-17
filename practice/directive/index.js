import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <div v-if="active">Text: {{text}}</div>
      <div v-else-if="text === 0">Else Text: {{text}}</div>
      <div v-else>else content</div>
      <div v-html="html"></div>
      <ul>
        <li v-for="(item, index) in arr" :key="item">{{item}}:{{index}}</li>
      </ul>
      <ul>
        <li v-for="(value, key, index) in obj">{{key}}: {{value}}: {{index}}</li>
      </ul>
      <input v-model.lazy="text">
      <input v-model="active" type="checkbox">
      <div>
        <input v-model="arr" :value="1" type="checkbox">
        <input v-model="arr" :value="2" type="checkbox">
        <input v-model="arr" :value="3" type="checkbox">
      </div>
      <div>
        <input v-model="picked" value="one" type="radio">
        <input v-model="picked" value="two" type="radio">
      </div>
    </div>
  `,
  data: {
    arr: [1, 2, 3],
    obj: {
      a: '123',
      b: '456',
      c: '789'
    },
    picked: '',
    text: 0,
    active: false,
    html: '<span>this is html</span>'
  }
})
