<template>
<div class="selector">
<!-- one way binding for the name/min/max/step as we set it once, two way binding for the value to sendit up to the parent -->
  <mdl-textfield floating-label="name" value="value"></mdl-textfield>
  <mdl-slider value="value" min="min" max="max" :step="step"></mdl-slider>
  </div>
</template>

<script>
// js here
export default {
  data() {
    return {
      name: {
        type: String,
        default: 'Name'
      },
      value: {
        twoWay: true,
        type: Number,
        default: 25
      },
      min: {
        type: Number,
        default: 5
      },
      max: {
        type: Number,
        default: 60
      },
      step: {
        type: Number,
        default: 5
      }
    }
  }
}
</script>

<style>
.selector {
  display: block;
  width: 100%;
}
</style>
