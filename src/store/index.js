import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  getters: {
    getCounter(state) {
      console.log("1");
      return state.counter;
    },
  },
  mutations: {
    increment(state, payload) {
      console.log("2");
      state.counter = state.counter + payload;
    },
  },
  actions: {
    increment(context, payload) {
      console.log("3", payload);
      context.commit("increment", payload);
    },
  },
});
