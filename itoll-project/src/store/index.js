import { createStore } from "vuex";
import articles from "../store/modules/articles";
import auth from "../store/modules/auth";
import profile from "../store/modules/profile";
const store = createStore({
  modules: {
    auth,
    articles,
    profile
  },
});

export default store;
