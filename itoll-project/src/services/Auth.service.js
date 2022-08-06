import { loginUrl } from "../endpoints/auth";
import api from "../plugins/api";
import { AUTH_TOKEN_NAME, USER_TOKEN_NAME } from "./types";

export class AuthService {
  static isAuth() {
    const authToken = localStorage.getItem(AUTH_TOKEN_NAME);
    const userToken = localStorage.getItem(USER_TOKEN_NAME);
    return !!authToken === true && !!userToken === true;
  }
  static async login(user) {
    const req = new Promise((resolve, reject) => {
      const rapi = api();
      try {
        const res = rapi.post(loginUrl, user);
        if (res) resolve(res);
      } catch (error) {
        reject(error);
      }
    });

    return req;
  }
  static async logout() {
    localStorage.clear();
    Promise.resolve()
  }
}
