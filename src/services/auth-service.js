import api from "../utils/api";
import TokenService from "./token-service";

const register = (data) => {
  return api.post("/sellers/auth/register", data);
};

const login = (email, password) => {
  return api
    .post("/sellers/auth/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.status === 202 && response.data.access_token) {
        TokenService.setUser(response.data);
      }
      // when the user is not verified
      else if (response.status === 201) {
        window.alert(response.data);
        return;
      }
      return response;
    });
};

const loginMotp = (mobileNo, motp) => {
  return api
    .post("/sellers/auth/motp/login", {
      mobile_no: mobileNo,
      motp,
    })
    .then((response) => {
      if (response.status === 202 && response.data.access_token) {
        TokenService.setUser(response.data);
      }
      // // when the user is not verified
      // else if (response.status === 201) {
      //   window.alert(response.data);
      //   return;
      // }
      return response;
    });
};

const logout = () => {
  TokenService.removeUser();
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("seller"));
};

const AuthService = {
  register,
  login,
  loginMotp,
  logout,
  getCurrentUser,
};

export default AuthService;
