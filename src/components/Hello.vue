<template>
  <div class="hello">
    <h1>{{ counter }}</h1>
  </div>
</template>

<script>

  export default {
    vuex: {
      getters: {
        counter(state) {
          var sec = state.counter;
          var minutes = Math.floor(sec / 60);
          var seconds = sec - (minutes * 60);
          if (minutes < 10) {minutes = "0"+minutes;}
          if (seconds < 10) {seconds = "0"+seconds;}
          return minutes+':'+seconds;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }
</style>
