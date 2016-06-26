<template>
  <!-- duration-->
  <div @input="setDuration">
    <mdl-textfield floating-label="Duration" :value="duration"></mdl-textfield>
    <mdl-slider :value="duration" min="5" max="60" :step="5"></mdl-slider>
  </div>
  <div @input="setBreak; reset">
    <!-- break-->
    <mdl-textfield floating-label="Break" :value="break"></mdl-textfield>
    <mdl-slider :value="break" min="0" max="15" :step="1"></mdl-slider>
  </div>
  <mdl-button @click.prevent="activate" icon v-mdl-ripple-effect fab primary>
    <i class="material-icons" v-if="active">pause</i>
    <i class="material-icons" v-if="!active">play_arrow</i>
  </mdl-button>
</template>

<script>
  import Selector from './Selector'
  import { toggleTimer, reset, setBreak, setDuration } from '../vuex/actions'

  export default {
    components: [ Selector ],
    vuex: {
      getters: {
        active: state => state.active,
        duration: state => state.duration,
        break: state => state.break
      },
      actions: {
        activate: toggleTimer,
        reset,
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
