<template>
<mdl-button @click.prevent="activate" icon v-mdl-ripple-effect fab primary>
    <i class="material-icons" v-if="active">pause</i>
    <i class="material-icons" v-if="!active">play_arrow</i>
  </mdl-button>
  <!-- duration-->
  <selector @input="setDuration" :value="duration"  name="Duration"></selector>
  <!-- break-->
  <selector @input="setBreak" :value="break" name="Break" max="15" min="0" step="1"></selector>
</template>

<script>
  import Selector from './Selector'
  import { toggleTimer, setBreak, setDuration } from '../vuex/actions'

  export default {
    components: {
      Selector 
    },
    vuex: {
      getters: {
        active: state => state.active,
        duration: state => state.duration,
        break: state => state.break,
      },
      actions: {
        activate: toggleTimer,
        setBreak,
        setDuration
      }
    }
  }
</script>

<style>
  #toolbar {
    color: #2c3e50;
  }

  #toolbar a {
    color: #42b983;
    text-decoration: none;
  }
</style>
