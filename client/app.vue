<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{fullName}} &nbsp;------&nbsp; {{counter}}</p>
    <!--<p>{{textA}} &nbsp;&#45;&#45;&#45;&#45;&#45;&#45;&nbsp; {{textPlus}} &nbsp;&#45;&#45;&#45;&#45;&#45;&#45;&nbsp; {{textC}}</p>-->
    <router-link :to="{name: 'app'}">app</router-link>
    <!--<router-link to="/app/1">app1</router-link>-->
    <!--<router-link to="/app/2">app2</router-link>-->
    <router-link to="/login">login</router-link>
    <transition name="fade">
      <router-view/>
    </transition>
    <Footer></Footer>
    <!--<router-view name="a" />-->
  </div>
</template>
<script>
  import {
    mapState,
    mapGetters,
    mapActions,
    mapMutations
  } from 'vuex'
  import Header from './layout/header.vue'
  import Footer from './layout/footer.jsx'
  // import ToDo from './views/todo/todo.vue'

  export default {
    components: {
      Header,
      Footer
      // ToDo
    },
    data () {
      return {}
    },
    computed: {
      ...mapState({
        counter: (state) => state.count
        // textA: state => state.a.text,
        // textC: state => state.c.text
      }),
      ...mapGetters({
        'fullName': 'fullName'
        // 'textPlus': 'a/textPlus'
      })
    },
    methods: {
      ...mapActions(['updateCountAsync']),
      // ...mapActions(['updateCountAsync', 'a/add', 'testAction']),
      ...mapMutations(['updateCount'])
      // ...mapMutations(['updateCount', 'a/updateText'])
    },
    mounted () {
      // console.log(this.$store)
      this.updateCountAsync({
        num: 5,
        time: 2000
      })
      // this.testAction()
      // this['a/add']()
      // this['a/updateText']('123')
      // let i = 1
      // setInterval(() => {
      //   this.updateCount({
      //     num: i++,
      //     num2: 2
      //   })
      // }, 1000)
    }
  }
</script>
<style lang="stylus" scoped>
  #app {
    position absolute
    top: 0
    left: 0
    right: 0
    bottom 0
  }

  #cover {
    position absolute
    top: 0
    left 0
    right: 0
    bottom 0
    z-index -5
    opacity .5
    background #fff
  }
</style>
