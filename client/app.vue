<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <!--<router-link :to="{name: 'app'}">app</router-link>-->
    <router-link to="/app/1">app1</router-link>
    <router-link to="/app/2">app2</router-link>
    <router-link to="/login">login</router-link>
    <transition name="fade">
      <router-view/>
    </transition>
    <Footer></Footer>
    <!--<router-view name="a" />-->
  </div>
</template>
<script>
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
    mounted () {
      // console.log(this.$route)
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
