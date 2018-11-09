<template>
    <div class="helper">
        <span class="left">2 items left</span>
        <span class="tabs">
            <span v-for="state in states" :key="state" :class="['state', filter === state ? 'active' : '']" @click="toggleFilter(state)">
                {{state}}
            </span>
        </span>
        <span class="clear" @clcik="clearAllCompleted">clear completed</span>
    </div>
</template>
<script>
    export default {
      props: {
        filter: {
          type: String,
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
      methods: {
        toggleFilter (state) {},
        clearAllCompleted () {}
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
    .state{
        padding 5px
        border 2px solid transparent
        border-radius 10px
        cursor pointer
    }
    .state.active{
        border-color orange
    }
    .state:nth-child(2){
        margin 0 5px
    }
</style>