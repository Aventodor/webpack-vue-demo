<template>
  <section class="real-app">
    <div>
      <input
        type="text"
        class="add-input"
        autofocus
        placeholder="接下去要做什么？"
        @keyup.enter="addToDo">
      <Ttem v-for="todo in filteredTodos"
            :key="todo.id"
            :todo="todo"
            @del="delTodo"
      />
      <Tabs :filter="filter" :todos="todos" @toggle="toggleFilter" @clearAll="clearAllCompleted"/>
    </div>
    <!--<router-view></router-view>-->
  </section>
</template>
<script>
  import Ttem from './item.vue'
  import Tabs from './tabs.vue'

  let id = 0
  export default {
    beforeRouteEnter (to, from, next) {
      console.log('todo beforeRouteEnter', this)
      next(vm => {
        console.log('todo beforeRouteEnter vm id is ', vm.id)
      })
    },
    beforeRouteUpdate (to, from, next) {
      console.log('todo beforeRouteUpdate')
      next()
    },
    beforeRouteLeave (to, from, next) {
      console.log('todo beforeRouteLeave')
      // if (global.confirm('are you sure?')) {
      //   next()
      // }
      next()
    },
    props: ['id'],
    components: {
      Ttem,
      Tabs
    },
    mounted () {
      console.log(this.id)
    },
    data () {
      return {
        todos: [],
        filter: 'all'
      }
    },
    computed: {
      filteredTodos () {
        if (this.filter === 'all') {
          return this.todos
        }
        const completed = this.filter === 'completed'
        return this.todos.filter(todo => completed === todo.completed)
      }
    },
    methods: {
      addToDo (e) {
        this.todos.unshift({
          id: id++,
          content: e.target.value.trim(),
          completed: false
        })
        e.target.value = ''
      },
      delTodo (id) {
        this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
      },
      toggleFilter (state) {
        this.filter = state
      },
      clearAllCompleted () {
        this.todos = this.todos.filter(todo => !todo.completed)
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .real-app {
    width 100%
  }

  .real-app > div {
    background #fff
    width 500px
    border-radius 10px
    margin 0 auto
    padding 10px
  }

  .add-input {
    width 100%
    border 0
    font-size 20px
    outline 0
    padding 10px
  }
</style>
