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
      if (response.data.access_token) {
        TokenService.setUser(response.data);
      }

      return response.data;
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
  logout,
  getCurrentUser,
};

export default AuthService;
