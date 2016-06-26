<template>
  <div class="selector">
    <!-- one way binding for the name/min/max/step as we set it once, two way binding for the value to sendit up to the parent -->
    <mdl-textfield floating-label="name" :value.sync="value" type="number"></mdl-textfield>
    <mdl-slider :value.sync="value" :min="min" :max.once="max" :step="step"></mdl-slider>
  </div>
</template>

<script>
// js here
export default {
  props: {
    name: {
      type: String,
      default: "Name"
    },
    value:{
      default: 25
    },
    min: {
      default: 5
    },
    max: {
      default: 60
    },
    step: {
      default: 5
    }
  }
}
</script>

<style>
.selector {
    justify-content: center;
    align-items: baseline;
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
  }

  .mdl-textfield {
    display: flex;
    width: 5rem;
  }

  .mdl-slider__container {
    display: flex;
    width: 15rem;
  }
</style>
