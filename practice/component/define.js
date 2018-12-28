import Vue from 'vue'

const component = {
  props: {
    active: {
      // type: Boolean,
      // required: true,
      // default: true,
      validator (value) {
        return typeof value === 'boolean'
      }
    },
    propOne: String
  },
  template: `
    <div>
      <input type="text" v-model="text">
      <span @click="handleChange">{{propOne}}</span>
      <span v-show="active">see me in active</span>
    </div>
  `,
  data () {
    return {
      text: 0
    }
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  },
  mounted () {
    console.log(this.$refs.comp1)
  }
}

// Vue.component('Comp', compoent)

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data: {
    prop1: 'text1',
    prop2: 'text2'
  },
  template: `
    <div>
      <comp-one ref="comp1" :active="true" :prop-one="prop1" @change="handleChange"></comp-one>
      <comp-one :active="false" :propOne="prop2"></comp-one>
    </div>
  `,
  methods: {
    handleChange () {
      this.prop1 += 1
    }
  }
})
