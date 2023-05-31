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
      <header className="navbar navbar-light sticky-top bg-light flex-md-nowrap p-0 shadow">
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
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
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
          {/* <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="chartjs-size-monitor">
              <div className="chartjs-size-monitor-expand">
                <div className="" />
              </div>
              <div className="chartjs-size-monitor-shrink">
                <div className="" />
              </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Share
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Export
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary dropdown-toggle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-calendar align-text-bottom"
                    aria-hidden="true"
                  >
                    <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                    <line x1={16} y1={2} x2={16} y2={6} />
                    <line x1={8} y1={2} x2={8} y2={6} />
                    <line x1={3} y1={10} x2={21} y2={10} />
                  </svg>
                  This week
                </button>
              </div>
            </div>
            <canvas
              className="my-4 w-100 chartjs-render-monitor"
              id="myChart"
              width={1098}
              height={462}
              style={{ display: "block", height: 154, width: 366 }}
            />
            <h2>Section title</h2>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,002</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>
                    <td>visual</td>
                    <td>layout</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>data</td>
                    <td>rich</td>
                    <td>dashboard</td>
                    <td>tabular</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>information</td>
                    <td>placeholder</td>
                    <td>illustrative</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,004</td>
                    <td>text</td>
                    <td>random</td>
                    <td>layout</td>
                    <td>dashboard</td>
                  </tr>
                  <tr>
                    <td>1,005</td>
                    <td>dashboard</td>
                    <td>irrelevant</td>
                    <td>text</td>
                    <td>placeholder</td>
                  </tr>
                  <tr>
                    <td>1,006</td>
                    <td>dashboard</td>
                    <td>illustrative</td>
                    <td>rich</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,007</td>
                    <td>placeholder</td>
                    <td>tabular</td>
                    <td>information</td>
                    <td>irrelevant</td>
                  </tr>
                  <tr>
                    <td>1,008</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,009</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>
                    <td>visual</td>
                    <td>layout</td>
                  </tr>
                  <tr>
                    <td>1,010</td>
                    <td>data</td>
                    <td>rich</td>
                    <td>dashboard</td>
                    <td>tabular</td>
                  </tr>
                  <tr>
                    <td>1,011</td>
                    <td>information</td>
                    <td>placeholder</td>
                    <td>illustrative</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,012</td>
                    <td>text</td>
                    <td>placeholder</td>
                    <td>layout</td>
                    <td>dashboard</td>
                  </tr>
                  <tr>
                    <td>1,013</td>
                    <td>dashboard</td>
                    <td>irrelevant</td>
                    <td>text</td>
                    <td>visual</td>
                  </tr>
                  <tr>
                    <td>1,014</td>
                    <td>dashboard</td>
                    <td>illustrative</td>
                    <td>rich</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,015</td>
                    <td>random</td>
                    <td>tabular</td>
                    <td>information</td>
                    <td>text</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main> */}
        </div>
      </div>
    </>
  );
}

export default SideBar;
