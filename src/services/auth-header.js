export default function authHeader() {
  const seller = JSON.parse(localStorage.getItem("seller"));

  if (seller && seller.accessToken) {
    return { Authorization: "Bearer " + seller.accessToken };
  } else {
    return {};
  }
}
