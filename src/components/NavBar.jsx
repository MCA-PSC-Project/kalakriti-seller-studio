import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import CartSvg from "../assets/cart.svg";
import WishlistSvg from "../assets/Heart.svg";
import ProfileSvg from "../assets/person-circle.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faUser,
  faGear,
  faMagnifyingGlass,
  faBell,
  faHouse,
  faCubes,
  faClipboardList,
  faListCheck,
  faRightFromBracket,
  faHeadset,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { appName } from "../App";
import { useState } from "react";

function NavBar({ isLoggedIn = true }) {
  const [iconsHoveredState, setIconsHoveredState] = useState({
    profile: false,
    notifications: false,
    orders: false,
    settings: false,
  });
  const handleIconHovered = (item) => {
    setIconsHoveredState((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };
  return (
    <div className="px-3 py-2 text-bg-white border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <div className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-black text-decoration-none">
            <img src={Logo} alt="KalaKriti" style={{ width: 50, height: 50 }} />
            <b>{appName + " Seller Studio"}</b>
          </div>
          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li className="nav-item me-3">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                title="Home"
              >
                {/* Home */}
                <FontAwesomeIcon
                  icon={faHouse}
                  size="xl"
                  style={{ color: "#dd13a7" }}
                />
              </Link>
              Dashboard
            </li>

            <li className="nav-item me-3">
              <Link
                className="nav-link"
                aria-current="page"
                to="/products"
                title="Products"
              >
                <FontAwesomeIcon
                  icon={faCubes}
                  size="xl"
                  style={{ color: "#45b58a" }}
                />
              </Link>
              Products
            </li>
            <li className="nav-item me-3">
              <Link
                className="nav-link"
                aria-current="page"
                to="/orders"
                title="Orders"
              >
                <FontAwesomeIcon
                  icon={faClipboardList}
                  size="xl"
                  style={{ color: "#27511f" }}
                />
              </Link>
              Orders
            </li>
            <li className="nav-item me-3">
              <Link
                className="nav-link"
                aria-current="page"
                to="/settings"
                title="settings"
              >
                <FontAwesomeIcon
                  icon={faGear}
                  size="xl"
                  style={{ color: "#646464" }}
                />
              </Link>
              Settings
            </li>
            <li className="nav-item me-3 mt-2">
              <div className="dropdown">
                <a
                  href="#"
                  className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={Logo}
                    alt="mdo"
                    width={32}
                    height={32}
                    className="rounded-circle"
                  />
                  seller_name
                </a>
                <ul className="dropdown-menu text-small">
                  <li>
                    <Link className="dropdown-item" to="/">
                      <FontAwesomeIcon
                        icon={faUser}
                        style={{ color: "#964B00" }}
                      />
                      &nbsp; Profile
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      <FontAwesomeIcon
                        icon={faRightFromBracket}
                        style={{ color: "#4dbad5" }}
                      />
                      &nbsp; Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
