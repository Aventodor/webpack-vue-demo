import Vue from 'vue'

const ChildComponent = {
  inject: ['yeye', 'data'],
  template: `
    <div>child component:{{data.value}}</div>
  `,
  mounted () {
    console.log(this.yeye)
    console.log(this.$parent.$options.name)
  }
}

const component = {
  name: 'comp',
  components: {
    ChildComponent
  },
  // template: `
  //   <div :style="style">
  //     <div class="header">
  //       <slot name="header"></slot>
  //     </div>
  //     <div class="body">
  //       <slot name="body"></slot>
  //     </div>
  //   </div>
  // `,
  template: `
    <div :style="style">
      <slot :value="value" aaa="aaa"></slot>
      <child-component></child-component>
    </div>
  `,
  data () {
    return {
      value: 'component value',
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      }
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  provide () {
    const data = {}
    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })
    return {
      yeye: this,
      data
    }
  },
  el: '#root',
  template: `
    <div>
      <comp-one ref="comp">
        <span ref="span" slot-scope="props">{{props.value}} {{props.aaa}} {{value}}</span>
      </comp-one>
      <input type="text" v-model="value">
    </div>
  `,
  data () {
    return {
      value: '123'
    }
  },
  mounted () {
    console.log(this.$refs.comp.value)
    console.log(this.$refs.span)
  }
})
