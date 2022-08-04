import { userService } from "./User.service";

export default function authHeader() {
  const user = userService.getCurrentUser();
  const token = userService.getCorrentUserToken();
  const header = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Header": "Origin, Content-Type, Authorization",
  };
  if (user && token) {
    header["Authorization"] = `Berear ${token}`;
  }
  return header;
}
