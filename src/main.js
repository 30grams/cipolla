import Vue from 'vue'
import App from './App'
import VueMdl from 'vue-mdl'
import store from './vuex/store'

Vue.use(VueMdl)

/* eslint-disable no-new */
new Vue({
  store, // inject store to all children
  el: 'body',
  components: { App }
})
