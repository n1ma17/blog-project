import { editProfileUrl } from "../../endpoints/profile";
import api from "../../plugins/api";
import { APP_PROFILE_FAILED, APP_PROFILE_REQUEST, APP_PROFILE_SUCCESS, EDIT_PROFILE_ACTION } from "../actionTypes/Actions";


export default {
  namespaced: true,
  state: () => ({ profileLoading: false, profile: null }),

  getters: {
    profileLoading: (state) => state.profileLoading,
    profile: (state) => state.profile,
  },

  mutations: {
    APP_PROFILE_REQUEST: (state) => {
      state.profileLoading = true;
    },
    APP_PROFILE_SUCCESS: (state, payload) => {
      state.profileLoading = false;
    },
    APP_PROFILE_FAILED: (state, payload) => {
      state.profileLoading = false;
    }
  },

  actions: {
    [EDIT_PROFILE_ACTION]: async ({ commit }, payload) => {
      const rapi = api();
      try {
        commit(APP_PROFILE_REQUEST);
        const res = await rapi.put(editProfileUrl, payload);
        if (res && res.status === 200) {
          commit(APP_PROFILE_SUCCESS, res.data.data);
        } else commit(APP_PROFILE_FAILED, res.data);
      } catch (error) {
        commit(APP_PROFILE_FAILED, error);
      }
    },
  },
};
