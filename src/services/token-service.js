const getLocalRefreshToken = () => {
  const seller = JSON.parse(localStorage.getItem("seller"));
  return seller?.refresh_token;
};

const getLocalAccessToken = () => {
  const seller = JSON.parse(localStorage.getItem("seller"));
  return seller?.access_token;
};

const updateLocalAccessToken = (token) => {
  let seller = JSON.parse(localStorage.getItem("seller"));
  seller.access_token = token;
  localStorage.setItem("seller", JSON.stringify(seller));
};

const getUser = () => {
  return JSON.parse(localStorage.getItem("seller"));
};

const setUser = (seller) => {
  console.log(JSON.stringify(seller));
  localStorage.setItem("seller", JSON.stringify(seller));
};

const removeUser = () => {
  localStorage.removeItem("seller");
};

const TokenService = {
  getLocalRefreshToken,
  getLocalAccessToken,
  updateLocalAccessToken,
  getUser,
  setUser,
  removeUser,
};

export default TokenService;
