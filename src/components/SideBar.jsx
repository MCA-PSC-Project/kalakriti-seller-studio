import React from "react";
import Logo from "../assets/logo.jpeg";
import { appName } from "../App";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  return (
    <div>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
        style={{ width: 280 }}
      >
        <img src={Logo} alt="KalaKriti" style={{ width: 50, height: 50 }} />
        <b>{appName + " Seller Studio"}</b>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/" title="Home">
              {/* Home */}
              <FontAwesomeIcon
                icon={faHouse}
                size="xl"
                style={{ color: "#dd13a7" }}
              />
              &nbsp; Home
            </Link>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width={16} height={16}>
                <use xlinkHref="#speedometer2" />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width={16} height={16}>
                <use xlinkHref="#table" />
              </svg>
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width={16} height={16}>
                <use xlinkHref="#grid" />
              </svg>
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width={16} height={16}>
                <use xlinkHref="#people-circle" />
              </svg>
              Customers
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width={32}
              height={32}
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
