<template>
    <div :class="['todo-item', todo.completed ? 'completed' : '']">
        <input
                :id="todo.id"
                type="checkbox"
                class="toggle"
                v-model="todo.completed"
        >
        <label :for="todo.id" class="label">{{todo.content}}</label>
        <span class="delete" @click="delTodo">&times;</span>
    </div>
</template>

<script>
  export default {
    name: 'item',
    props: {
      todo: {
        type: Object,
        required: true
      }
    },
    methods: {
      delTodo () {
        this.$emit('del', this.todo.id)
      }
    }
  }
</script>

<style scoped lang="stylus">
    .todo-item{
        border-bottom 1px solid #fafafa
        padding 10px
        display flex
        justify-content left
        align-items center
    }
    .delete{
        color orange
        font-size 30px
        line-height 42px
        cursor pointer
    }
    .toggle:checked+label{
        text-decoration line-through
    }
    .label{
        margin-left 10px
        flex-grow 1
        cursor pointer
        color #aaa
    }
</style>