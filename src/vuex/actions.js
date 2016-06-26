export const waitForIt = function({ dispatch }) {
  state.wait = setTimeout(function() {
    dispatch('RESETABLE');
  }, 2000)
}

export const toggleTimer = function({ dispatch, state }) {
  if (state.active == true) {
    dispatch('STOP');
  } else {
    if (state.reboot === undefined ) {
      dispatch('SETREBOOT', function() {
        // timer function
        dispatch('DECREMENT');
        if (state.counter <= 0) {
          dispatch('STOP');
          // reset and restart a new countdown
          if (state.onbreak) {
            dispatch('RESET');
          } else {
            dispatch('BREAK');
          }
          dispatch('START');
        }
      });
    }
    dispatch('START');
  }
}

export const reset = function({dispatch}) {
  dispatch('RESET')
}

export const setDuration = function({dispatch}, e) {
  dispatch('STOP');
  dispatch('RESET')
  dispatch('SETDURATION', e.target.value)
}

export const setBreak = function({dispatch}, e) {
  dispatch('STOP');
  dispatch('RESET')
  dispatch('SETBREAK', e.target.value)
}
