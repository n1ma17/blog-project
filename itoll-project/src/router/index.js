import { createRouter, createWebHistory } from "vue-router";
import Articles from "/src/pages/Articles.vue";
import CreateArticle from "/src/pages/CreateArticle.vue";
import Auth from "/src/pages/Auth.vue";
import { AuthService } from "../services/Auth.service";
import { APP_LOGOUT_ACTION } from "../store/actionTypes/Auth";
import store from "./../store/index";

const routes = [
  {
    path: "/",
    name: "Articles",
    component: Articles,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/create-article",
    name: "CreateArticle",
    component: CreateArticle,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
    meta: {
      requireAuth: false,
    },
    beforeEnter: (to, from) => {
      if (!!from.name) {
        AuthService.logout();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach(async (to, from, next) => {
  const requireAuth = to.meta?.requireAuth || false;
  if (!AuthService.isAuth() && requireAuth) {
    AuthService.logout();
    return next({ name: "Auth" });
  } else {
    return next();
  }
});

export default router;
