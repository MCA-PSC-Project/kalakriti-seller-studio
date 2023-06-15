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
import feature5 from "../assets/feature5.png";

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
        <div className="container marketing" style={{ marginTop: 40 }}>
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
                Witnessing tremendous growth by selling product online,
                retailers are moving towards online selling. Avoid huge
                investments. Large customer base to sell online anywhere.
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
                Image guidelines are relaxed and easy to follow. Sellers can
                upload tabletop and hanger images clicked with mobile phones.{" "}
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
                <image href={feature3} height="180" width="150" />
                <title>Placeholder</title>
                {/* <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                /> */}
              </svg>
              <h2 className="fw-normal">
                Enhanced reach to millions of customers
              </h2>
              <p>
                You capture a huge amount of budget-friendly consumers through
                resellers. These resellers reach the consumer base through their
                social media channels.
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
              <h2 className="fw-normal">
                The lowest cost of doing business in the industry
              </h2>
              <p>
                With the most competitive rate card in the industry, transparent
                delivery charges based on the weight and dimensions of your
                products and a small fixed fee, selling on Kalakriti is highly
                cost-efficient.{" "}
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
                <image href={feature5} height="110" width="180" />
                <title>Placeholder</title>
                {/* <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                /> */}
              </svg>
              <h2 className="fw-normal">Transparency</h2>
              <p>
                Equal opportunities for all seller to grow. We are being open
                and honest. Transparency uses secure, unique codes that identify
                individual units, stop counterfeits from reaching
                customers,improve customer engagement, and give brands valuable
                insights to help optimize supply chains.
              </p>
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
                Make your products available to crores of sellers & businesses
                24x7
              </p>
              <p>
                Since this is something you might be wondering, let us take a
                look at few benefits that you will enjoy as a seller on
                KalaKriti.
                <br />
                <ul>
                  <li>
                    <b> Sell to customers worldwide</b> - Sell to customers
                    worldwide with Kalakriti's Global Selling Program that
                    extends to a network of markets in the country. Enjoy the
                    possibility of sales, and a global reach.
                  </li>
                  <li>
                    <b> Stand a chance to get noticed with your advertising </b>{" "}
                    - Get potential visibility by getting your products on the
                    first page of Kalakriti. You pay only for the clicks your
                    ads receive. It doesn't get better than this!
                  </li>
                  <li>
                    <b>Ship your orders, stress free </b> - Receive delivery and
                    return management handled by Kalakriti, when you choose FBA
                    or Easy Ship.
                  </li>
                  <li>
                    <b> Payments straight to your bank </b> - Your funds from
                    customer transactions on Amazon.in will be deposited to your
                    bank account every 7 days; safely and regularly.
                  </li>
                  <li>
                    <b>Get help whenever you need it </b> - A to Z solutions for
                    your selling troubles on Kalakriti, with the help of Seller
                    Support, Seller University, Forums and Help guides.
                  </li>
                </ul>
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
                Why to choose us?? &nbsp;
                <span className="text-body-secondary">See for yourself.</span>
              </h2>
              <p className="lead">
                Direct Payments Received in your Bank Account
              </p>
              <p>
                <ul>
                  <li>
                    Once the sales process begins, you will receive a safe and
                    secure payment directly into your account.
                  </li>
                  <li>
                    It takes around 7 days to receive the payments after
                    delivering the product, and the same applies to cash
                    deliveries.
                  </li>
                  <li>
                    {" "}
                    All your payment amount includes receivables reflected on
                    the Kalakriti Seller Panel.
                  </li>
                  <li>
                    {" "}
                    So selling on Kalakriti is very easy, and anyone can do it
                    with a simple format to follow.
                  </li>
                  <li>
                    {" "}
                    You can start selling on Kalakriti without much investment
                    involved. You can do it from the comfort of your home.
                  </li>
                  <li>
                    You can scale the business to the next level with the usage
                    of advertising tools available on the panel.
                  </li>
                </ul>
              </p>
              <p className="lead">Stress-free Shipping & Order Delivery</p>
              <p>
                <ul>
                  <li>
                    {" "}
                    On KalaKriti, there are no hassles in shipping your product.
                  </li>
                  <li>
                    {" "}
                    Once you receive a notification of the order received by
                    email, you can confirm the order on the Meesho seller panel.
                  </li>
                  <li>
                    {" "}
                    On Kalakriti, your orders are supplied across India and
                    shipped at a low price.
                  </li>
                  <li>
                    {" "}
                    The delivery partner ensures easy delivery at the doorsteps
                    of your customers.
                  </li>
                </ul>
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
                Benefits of Selling with us &nbsp;{" "}
                <span className="text-body-secondary">Have a look</span>
              </h2>
              <p className="lead">
                “It’s absolutely essential that small businesses get online”
              </p>
              <p>
                <ul>
                  <li>
                    <b>Cheaper startup costs</b>- Anyone who runs a physical
                    store knows the costs associated with operations, including
                    rent, utilities and wages. But when you set up your store
                    online, you don’t have to worry about dealing with a
                    landlord; paying an electric bill; or hiring staff to
                    collect cash, stock the shelves or manage operations. Sure,
                    you have to spend the money to set up a website and accept
                    payments online, but it’s typically a lot cheaper than
                    brick-and-mortar costs.
                  </li>
                  <li>
                    <b>Freedom to move (or stay)</b>- - When you sell products
                    online, you aren’t stuck in a specific location. Your
                    e-commerce operation allows you to sell to customers
                    nationwide and even across the world. For instance, you can
                    sell surfboards from your warehouse in Indiana; you aren’t
                    required to set up shop on the coast. All you need is access
                    to the internet, email and phones to keep business going.
                  </li>
                  <li>
                    <b> Larger customer reach</b>
                  </li>
                  - There are no barriers to shopping when you’re doing it
                  online. That presents a big opportunity for a small business
                  owner to reach a whole new set of customers. It may cost more
                  to ship products internationally, but selling online can boost
                  your reach and thus sales.
                  <li>
                    <b>Scalability</b>
                    -The internet is nimble, and so is an online store. Because
                    e-commerce is digital, it’s very easy to track which items
                    are sold, decide which ones are doing well, and then add and
                    remove products in real time.
                  </li>
                  <li>
                    <b>24/7 selling</b>- The internet is on all the time, which
                    means you’re always open for business. Even as you sleep,
                    orders can come in. That can expand your sales and improve
                    your profits because there’s no downtime for customers.
                  </li>
                </ul>
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
