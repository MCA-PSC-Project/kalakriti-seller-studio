import React from "react";
import Logo from "../assets/logo.jpeg";
import { appName } from "../App";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCubes,
  faClipboardList,
  faGear,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
// import {  } from "@fortawesome/free-regular-svg-icons";

function SideBar() {
  return (
    <>
      <header className="navbar sticky-top bg-light flex-md-nowrap p-0 shadow">
        <div className="">
          <img src={Logo} alt="KalaKriti" style={{ width: 50, height: 50 }} />
          <b>{appName + " Seller Studio"}</b>
        </div>
        <button
          className="navbar-toggler position-relative d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* <input
          className="form-control form-control-light w-100 rounded-0 border-0"
          type="text"
          placeholder="Search"
          aria-label="Search"
        /> */}
      </header>
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block sidebar collapse vh-100 bg-light"
            style={{}}
          >
            <div className="position-sticky pt-3 sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
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
                    &nbsp; Dashboard
                  </Link>
                </li>
                <li className="nav-item">
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
                    &nbsp; Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/orders"
                    title="Orders"
                  >
                    &nbsp;
                    <FontAwesomeIcon
                      icon={faClipboardList}
                      size="xl"
                      style={{ color: "#27511f" }}
                    />
                    &nbsp;&nbsp; Orders
                  </Link>
                </li>
              </ul>

              <hr />
              <div className="dropdown">
                <a
                  href="#"
                  className="d-flex align-items-center  text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src=""
                    alt=""
                    width={32}
                    height={32}
                    className="rounded-circle me-2"
                  />
                  <strong>seller_name</strong>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-light text-small shadow"
                  aria-labelledby="dropdownUser1"
                >
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
                    <Link className="dropdown-item" to="/">
                      <FontAwesomeIcon
                        icon={faGear}
                        style={{ color: "#646464" }}
                      />
                      &nbsp; Settings
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
            </div>
          </nav>
          {/* <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"></main> */}
        </div>
      </div>
    </>
  );
}

export default SideBar;
