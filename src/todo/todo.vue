<template>
    <section class="real-app">
        <div>
            <input
                    type="text"
                    class="add-input"
                    autofocus
                    placeholder="接下去要做什么？"
                    @keyup.enter="addToDo"
            >
            <Ttem :todo="todo"></Ttem>
            <Tabs :filter="filter"></Tabs>
        </div>
    </section>
</template>
<script>
    import Ttem from './item.vue'
    import Tabs from './tabs.vue'
    export default {
      components: {
        Ttem,
        Tabs
      },
      data () {
        return {
          todo: {
            id: 1,
            content: 'todo item',
            completed: true
          },
          filter: 'all'
        }
      },
      methods: {
        addToDo () {}
      }
    }
</script>
<style lang="stylus" scoped>
    .real-app{
        width 100%
        position absolute
        z-index 100
    }
    .real-app>div{
        background #fff
        width 500px
        border-radius 10px
        margin 0 auto
        padding 10px
    }
    .add-input{
        width 100%
        border 0
        font-size 20px
        outline 0
        padding 10px
    }
</style>