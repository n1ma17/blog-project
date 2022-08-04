import { createStore } from "vuex";
import articles from "../store/modules/articles";
import auth from "../store/modules/auth";
const store = createStore({
  modules: {
    auth,
    articles,
  },
});

export default store;
