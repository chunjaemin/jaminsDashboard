import { createStore } from 'vuex';

export default createStore({
    state:{
        progress: 0,
        loadingComplete: false,
    },

    mutations: {
      setProgress(state, value) {
        state.progress = value;
      },
      setLoadingComplete(state) {
        state.loadingComplete = true;
      },
      setLoadingStart(state) {
        state.loadingComplete = false;
      },
    },
  });
  