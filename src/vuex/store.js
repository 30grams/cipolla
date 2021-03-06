import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  counter: 25*60,
  timer: undefined, // setIterval
  reboot: undefined, // a function
  active: false,
  onbreak: false,
  duration: 25,
  break: 5
}

const mutations = {
  DECREMENT (state) {
    state.counter -= 1;
  },
  START (state) {
    state.active = true;
    state.timer = setInterval(state.reboot, 1000);
  },
  STOP (state) {
    state.active = false;
    clearInterval(state.timer);
  },
  BREAK (state) {
    state.counter = state.break * 60;
    state.onbreak = true;
  },
  RESET (state) {
    state.counter = state.duration * 60;
    state.onbreak = false;
  },
  SETDURATION (state, value) {
    state.duration = value
  },
  SETBREAK (state, value) {
    state.break = value
  },
  SETREBOOT (state, func) {
    state.reboot = func;
  }
}

export default new Vuex.Store({
  state,
  mutations
})