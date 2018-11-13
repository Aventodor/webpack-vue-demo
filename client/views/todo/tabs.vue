<template>
    <div class="helper">
        <span class="left">{{unFinishedTodoLength}} items left</span>
        <span class="tabs">
            <span v-for="state in states" :key="state" :class="[state, filter === state ? 'actived' : '']" @click="toggleFilter(state)">
                {{state}}
            </span>
        </span>
        <span class="clear" @click="clearAllCompleted">clear completed</span>
    </div>
</template>
<script>
    export default {
      props: {
        filter: {
          type: String,
          required: true
        },
        todos: {
          type: Array,
          required: true
        }
      },
      data () {
        return {
          states: [
            'all',
            'active',
            'completed'
          ]
        }
      },
      computed: {
        unFinishedTodoLength () {
          return this.todos.filter(todo => !todo.completed).length
        }
      },
      methods: {
        toggleFilter (state) {
          this.$emit('toggle', state)
        },
        clearAllCompleted () {
          this.$emit('clearAll')
        }
      }
    }
</script>
<style lang="stylus" scoped>
    .helper{
        display flex
        justify-content space-between
        align-items center
        margin-top 10px
        color #ddd
    }
    .tabs{
        flex-grow 1
        display flex
        justify-content center
    }
    .tabs>span{
        padding 5px
        border 2px solid transparent
        border-radius 10px
        cursor pointer
    }
    .tabs>span.actived{
        border-color orange
    }
    .tabs>span:nth-child(2){
        margin 0 5px
    }
    .clear{
        cursor pointer
    }
</style>