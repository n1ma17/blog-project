import { registerUrl } from "../../endpoints/auth";
import api from "../../plugins/api";
import router from "../../router";
import { AuthService } from "../../services/Auth.service";
import { userService } from "../../services/User.service";
import {
  APP_LOGIN_ACTION,
  APP_LOGIN_FAILED,
  APP_LOGIN_REQUEST,
  APP_LOGIN_SUCCESS,
  APP_LOGOUT_ACTION,
  APP_LOGOUT_FAILED,
  APP_LOGOUT_REQUEST,
  APP_LOGOUT_SUCCESS,
  APP_REGISTER_ACTION,
  APP_REGISTER_FAILED,
  APP_REGISTER_REQUEST,
  APP_REGISTER_SUCCESS,
} from "./../actionTypes/Auth";
export default {
  namespaced: true,
  state: () => ({
    registerLoading: false,
    loginLoading: false,
    isAuth: AuthService.isAuth(),
  }),

  getters: {
    profile() {
      return userService.getCurrentUser();
    },
    isAuth(state) {
      return AuthService.isAuth();
    },
    registerLoading: (state) => state.registerLoading,
    loginLoading: (state) => state.loginLoading,
  },

  mutations: {
    APP_LOGIN_REQUEST: (state) => {
      state.loginLoading = true;
    },
    APP_LOGIN_SUCCESS: (state, payload) => {
      state.loginLoading = false;
      state.isAuth = true;
    },
    APP_LOGIN_FAILED: (state) => {
      state.loginLoading = false;
    },
    APP_LOGOUT_REQUEST: (state) => {
      state.loading = true;
    },
    APP_LOGOUT_SUCCESS: (state, payload) => {
      state.loading = false;
      state.isAuth = false;
    },
    APP_LOGOUT_FAILED: (state) => {
      state.loading = false;
    },
    APP_REGISTER_REQUEST: (state) => {
      state.registerLoading = true;
    },
    APP_REGISTER_SUCCESS: (state, payload) => {
      state.registerLoading = false;
    },
    APP_REGISTER_FAILED: (state, payload) => {
      state.registerLoading = false;
    },
  },

  actions: {
    [APP_LOGIN_ACTION]: async ({ commit }, payload) => {
      try {
        commit(APP_LOGIN_REQUEST);

        const res = await AuthService.login(payload);
        if (res && res.status === 200) {
          commit(APP_LOGIN_SUCCESS, res.data);
          userService.setCurrentUser(res.data);
          router.push({ name: "Articles" });
        } else commit(APP_LOGIN_FAILED, res.data.data.errors);
      } catch (error) {
        commit(APP_LOGIN_FAILED, error);
      }
    },
    [APP_LOGOUT_ACTION]: ({ commit }, payload) => {
      try {
        commit(APP_LOGOUT_REQUEST);
        AuthService.logout();
        commit(APP_LOGOUT_SUCCESS, res.data);
        router.push({ name: "Auth" });
      } catch (error) {
        commit(APP_LOGOUT_FAILED, error);
      }
    },

    [APP_REGISTER_ACTION]: async ({ commit }, payload) => {
      try {
        commit(APP_REGISTER_REQUEST);
        const res = await api.post(registerUrl, payload);
        if (res && res.status === 200) {
          commit(APP_REGISTER_SUCCESS, res.data);
          userService.setCurrentUser(res.data);
          router.push({ name: "Articles" });
        } else commit(APP_REGISTER_FAILED, res.data);
      } catch (error) {
        commit(APP_REGISTER_FAILED, error);
      }
    },
  },
};
