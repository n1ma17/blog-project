import { AUTH_TOKEN_NAME, USER_TOKEN_NAME } from "./types";

export class userService {
  static async setCurrentUser(data) {
    const p = new Promise((resolve, reject) => {
      try {
        const storage = localStorage;
        storage.setItem(USER_TOKEN_NAME, JSON.stringify(data) || "");
        if (data?.token) {
          storage.setItem(AUTH_TOKEN_NAME, data.token || "");
          resolve(data);
        }
      } catch (error) {
        reject(
          new Error(
            "an error occured during the save login data in local storage"
          )
        );
      }
    });
    return p;
  }
  static getCurrentUser() {
    const user = localStorage.getItem(USER_TOKEN_NAME);
    return JSON.parse(user || "{}");
  }
  static getCorrentUserToken() {
    const token = localStorage.getItem(AUTH_TOKEN_NAME);
    return token || "";
  }
}
