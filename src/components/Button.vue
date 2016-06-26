<template>
  <mdl-button @click.prevent="activate" icon v-mdl-ripple-effect fab primary>
    <i class="material-icons" v-if="active">pause</i>
    <i class="material-icons" v-if="!active">play_arrow</i>
  </mdl-button>
</template>

<script>
  import { toggleTimer, reset } from '../vuex/actions'

  export default {
    data() {
      return {
        pressTimer = undefined,
        reset = false
      }
    }
    methods:{
      switch() {
        // Clear timeout
        clearTimeout(pressTimer);
        if (this.reset) {
          this.reset = false;
        }
        return false; 
      },
      wait() {
        // Set timeout
        pressTimer = setTimeout(function() {
          this.reset = true;
        },2000);
        return false; 
      }
    }
    vuex: {
      getters: {
        active: state => state.active,
      },
      actions: {
        activate: toggleTimer,
        reset
      }
    }
  }
</script>

<style>
  // css
</style>
