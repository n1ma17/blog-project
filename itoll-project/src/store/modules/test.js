
export default {
  state: () => ({
    test: "test",
  }),

  getters: {
    getTest: (state) => state.test,
  },

  mutations: {
    SET: (state, payload) => {
      Object.entries(payload).forEach(([key, value]) => {
        state[key] = value;
      });
    },
  },

  actions: {
      
  },
}