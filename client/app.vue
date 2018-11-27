<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <ToDo></ToDo>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import ToDo from './views/todo/todo.vue'
export default {
  components: {
    Header,
    Footer,
    ToDo
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
    #app{
        position absolute
        top:0
        left:0
        right:0
        bottom 0
    }
    #cover{
        position absolute
        top:0
        left 0
        right:0
        bottom 0
        z-index -5
        opacity .5
        background #fff
    }
</style>