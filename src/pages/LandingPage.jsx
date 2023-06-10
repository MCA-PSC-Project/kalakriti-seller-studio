import React from "react";
import BannerCarousel from "../components/BannerCarousel";
import Footer from "../components/Footer";
import Logo from "../assets/logo.jpeg";
import { appName } from "../App";
import { Link } from "react-router-dom";


import feature1 from "../assets/feature1.jpg";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.jpg";
import feature4 from "../assets/feature4.jpg";
import feature5 from "../assets/feature5.jpg";

import sellerCraft1 from "../assets/sellerCraft1.jpg";
import sellerCraft2 from "../assets/sellerCraft2.jpg";
import sellerCraft3 from "../assets/sellerCraft3.jpg";




function LandingPage() {
  return (
    <>
      <LandingPageNavBar />
      <main>
        <BannerCarousel />
        {/* Wrap the rest of the page in another container to center all the content. */}
        <div className="container marketing" style={{marginTop:40}} >
          {/* Three columns of text below the carousel */}
          <div className="row">
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width={140}
                height={140}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <image href={feature1} height="150" width="150" />

                <title>Placeholder</title>
                {/* <rect
                  width="100%"
                  height="100%"
                 fill="var(--bs-secondary-bg"
                   
                /> */}
              </svg>
              <h2 className="fw-normal">Growth</h2>
              <p>
                Witnessing tremendous growth by selling product online, retailers are
                moving towards online selling. Avoid huge investments. Large
                customer base to sell online anywhere.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details »
                </a>
              </p>
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width={140}
                height={140}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <image href={feature2} height="150" width="150" />
                <title>Placeholder</title>
                {/* <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                /> */}
              </svg>
              <h2 className="fw-normal">Easy Product Listing</h2>
              <p>
              Image guidelines are relaxed and easy to follow. 
              Sellers can upload tabletop and hanger images clicked with mobile phones.              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details »
                </a>
              </p>
            </div>
    
            {/* /.col-lg-4 */}
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width={140}
                height={140}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <image href={feature3} height="180" width="150" />
                <title>Placeholder</title>
                {/* <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                /> */}
              </svg>
              <h2 className="fw-normal">Enhanced reach to millions of customers</h2>
              <p>
              You capture a huge amount of budget-friendly consumers through resellers.
               These resellers reach the consumer base through their social media channels.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details »
                </a>
              </p>
            </div>

            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width={140}
                height={140}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <image href={feature4} height="150" width="150" />
                <title>Placeholder</title>
                {/* <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                /> */}
              </svg>
              <h2 className="fw-normal">The lowest cost of doing business in the industry</h2>
              <p>
              With the most competitive rate card in the industry,
               transparent delivery charges based on the weight and dimensions of your products and a small fixed fee,
                selling on Flipkart is highly cost-efficient.              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details »
                </a>
              </p>
            </div>

            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width={140}
                height={140}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <image href={feature5} height="120" width="100" />
                <title>Placeholder</title>
                {/* <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                /> */}
              </svg>
              <h2 className="fw-normal">0% Commission platform</h2>
              <p>
               This season start your business on KalaKriti with 0% commission.
               
This will be applicable to verticals listed only on Kalakriti.            </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details »
                </a>
              </p>
            </div>
            {/* /.col-lg-4 */}
          </div>
          {/* /.row */}
          {/* START THE FEATURETTES */}
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                Become a Seller on Kalakriti &nbsp;
                <span className="text-body-secondary">Promote your craft</span>
              </h2>
              <p className="lead">
                Make your products available to crores of customers & businesses
                24x7
              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width={500}
                height={500}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <image href={sellerCraft1} height="500" width="800" />
                <title>Placeholder</title>
                {/* <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-bg)"
                /> */}
                <text
                  x="50%"
                  y="50%"
                  fill="var(--bs-secondary-color)"
                  dy=".3em"
                >
                  500x500
                </text>
              </svg>
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                Oh yeah, it’s that good.{" "}
                <span className="text-body-secondary">See for yourself.</span>
              </h2>
              <p className="lead">
                Another featurette? Of course. More placeholder content here to
                give you an idea of how this layout would work with some actual
                real-world content in place.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width={500}
                height={500}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <image href={sellerCraft2} height="500" width="800" />
                <title>Placeholder</title>
                {/* <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-bg)"
                /> */}
                <text
                  x="50%"
                  y="50%"
                  fill="var(--bs-secondary-color)"
                  dy=".3em"
                >
                  500x500
                </text>
              </svg>
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                And lastly, this one.{" "}
                <span className="text-body-secondary">Checkmate.</span>
              </h2>
              <p className="lead">
                And yes, this is the last block of representative placeholder
                content. Again, not really intended to be actually read, simply
                here to give you a better view of what this would look like with
                some actual content. Your content.
              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width={500}
                height={500}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <image href={sellerCraft3} height="500" width="500" />
                <title>Placeholder</title>
                {/* <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-bg)"
                /> */}
                <text
                  x="50%"
                  y="50%"
                  fill="var(--bs-secondary-color)"
                  dy=".3em"
                >
                  500x500
                </text>
              </svg>
            </div>
          </div>
          <hr className="featurette-divider" />
          {/* /END THE FEATURETTES */}
        </div>
        {/* /.container */}
        <Footer />
      </main>
    </>
  );
}

function LandingPageNavBar() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <img src={Logo} alt="KalaKriti" style={{ width: 50, height: 50 }} />
          <b>{appName + " Seller Studio"}</b>
        </div>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#" className="nav-link px-2 link-secondary">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              About
            </a>
          </li>
        </ul>
        <div className="col-md-3 text-end">
          <Link to="/login" title="login">
            <button type="button" className="btn btn-primary me-2">
              Login
            </button>
          </Link>
          <Link to="/register" title="register">
            <button type="button" className="btn btn-success">
              Register
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default LandingPage;
