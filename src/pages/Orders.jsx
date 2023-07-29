import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";
import api from "../utils/api";
import Toast from "../components/Toast";
import "./Products.css";
import { useNavigate } from "react-router-dom";

function Orders() {
  const [showToast, setShowToast] = useState(false);
  const [toastProperties, setToastProperties] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (showToast) {
      const timeoutId = setTimeout(() => {
        setShowToast(false);
        setToastProperties({});
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [showToast]);

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    api
      .get(`/order-list-for-seller`)
      .then((response) => {
        setOrders(response.data === null ? [] : response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      {showToast && (
        <Toast
          toastType={toastProperties.toastType}
          message={toastProperties.toastMessage}
          onClose={() => setShowToast(false)}
        />
      )}
      <NavBar />
      <h1 style={{ backgroundColor: "#FC4FCE", textAlign: "center" }}>
        Ordered Products
      </h1>
      {/* <div className="new-button">
        <button
          type="button"
          className="raise btn btn-warning btn-lg"
          onClick={() => {
            navigate(`/products/add`);
          }}
        >
          + Add New Product
        </button>
      </div> */}

      <div className="d-flex justify-content-center align-items-center">
        <div className="text-left">
          {orders && orders.length > 0 ? (
            orders.map((order) => {
              return (
                <ProductHorizontalCard
                  key={order.id}
                  orderId={order.id}
                  imgSrc={order.media.path}
                  cardTitle={order.product_detail.product_name}
                  variantName={order.product_variant_name}
                  originalPrice={order.order_item_detail.original_price}
                  offerPrice={order.order_item_detail.offer_price}
                  quantity={order.order_item_detail.quantity}
                  addedAt={order.added_at}
                  updatedAt={order.updated_at}
                  fullName={order.shipping_address.full_name}
                  mobileNo={order.shipping_address.mobile_no}
                  addressLine1={order.shipping_address.address_line1}
                  addressLine2={order.shipping_address.address_line2}
                  city ={order.shipping_address.city}
                  district ={order.shipping_address.district}
                  state={order.shipping_address.state}
                  country={order.shipping_address.country}
                  pincode={order.shipping_address.pincode}
                  landmark={order.shipping_address.landmark}
                  SKU ={order.SKU}
                  orderItemStatus ={order.order_item_detail.order_item_status}

                  // onDelete={() => handleDelete(product.product_item.id)}
                  // onAddToCart={() => handleAddToCart(product.product_item.id, 1)}
                />
              );
            })
          ) : (
            <h1 style={{ backgroundColor: "red", textAlign: "center" }}>
              No Products Found!!
            </h1>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

function ProductHorizontalCard({
  orderId,
  imgSrc,
  cardTitle,
  variantName,
  originalPrice,
  offerPrice,
  quantity,
  addedAt,
  updatedAt,
  fullName,
  mobileNo,
  addressLine1,
  addressLine2,
  city,
  district,
  state,
  country,
  pincode,landmark,
  SKU,
  orderItemStatus,

}) {
  const navigate = useNavigate();
  return (
    <div
      className="card mb-3"
      style={{ maxWidth: 1000 }}
    >
      {/* navigate(`/products/${productId}`, {
        state: {
          productId: productId,
        },
      });
    }}> */}
      <div className="row g-0" style={{ cursor: "pointer" }}>
        <div className="col-md-4">
          <img src={imgSrc} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{cardTitle}</h2>
            <h3>SKU code - <b>{SKU}</b></h3>
             <h4>Variant Name - {variantName}</h4>
            <div className="card-text">
              <p style={{fontSize:"20px"}} >
              <b>Quantity</b> - {quantity}<br/>
               <b> Price -</b>
                <span>&#8377;</span>
                <del>{originalPrice}</del>&nbsp;
                <span>&#8377;</span>
                {offerPrice}
              </p>
            </div>
            <div>
              <p style={{fontSize:"20px"}}><b> Order Placed On -</b>{addedAt}</p>
            </div>
            <div>
              <fieldset>
                <legend>Shipping Address</legend>
                <p style={{fontSize:"20px"}}>
                <b> Ship to -</b> {fullName}<br/>
                <b>Mobile -</b> {mobileNo}<br/>
                <b>Address - </b>{addressLine1}<br/>
                 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {addressLine2}<br/>
                 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; {city}<br/>
                 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; {district}<br/>
                 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; {state}<br/>
                 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; {country}<br/>
                 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; {pincode}<br/>
                 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; {landmark}<br/>
                </p>
              </fieldset>
            </div>

            <div style={{marginTop:"40px"}}>
              <fieldset>
                <legend>Order Item Status</legend>
                
                <select className="form-select form-select-lg mb-3" aria-label="Large select example">
                <option value="" selected>
                {orderItemStatus}
              </option>
              {orderItemStatus !== "initiated" && (
                <option value="initiated">Initiated</option>
              )}
              {orderItemStatus !== "pending" && (
                <option value="pending">Pending</option>
              )}
              {orderItemStatus !== "confirmed_by_seller" && (
                <option value="confirmed_by_seller">Confirmed By Seller</option>
              )}
              {orderItemStatus !== "cancelled_by_seller" && (
                <option value="cancelled_by_seller">Cancelled By Seller</option>
              )}
              {orderItemStatus !== "dispatched" && (
                <option value="dispatched" >
                  Dispatched 
                </option>
              )}
              {orderItemStatus !== "shipped" && (
                <option value="shipped">
                  Shipped
                </option>
              )}
              {orderItemStatus !== "delivered" && (
                <option value="delivered">
                  Delivered
                </option>
              )}
                {orderItemStatus !== "return_requested" && (
                <option value="return_requested">
                  Return Requested
                </option>
              )}
                  {orderItemStatus !== "return_apporved" && (
                    <option value="return_apporved">
                      Return Apporved
                    </option>
                  )}
                  {orderItemStatus !== "returned" && (
                    <option value="returned">
                      Returned
                    </option>
                  )}
                  {orderItemStatus !== "failure" && (
                    <option value="failure">
                      Failure
                    </option>
                  )}
                 { orderItemStatus !== "success" && (
                <option value="success">
                  Success
                </option>
              )}
            </select>
            <button type="button">edit</button>
            <button type ="button">Save Changes</button>
             
              </fieldset>
            </div>
            <div></div>
            {/* <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
              <button
                type="button"
                className="btn btn-outline-primary me-2"
                onClick={onAddToCart}
              >
                Add To Cart
              </button>

              <button type="button" className="btn btn-outline-success me-2">
                Buy Now
              </button>

              <button
                type="button"
                className="btn btn-outline-danger me-2"
                onClick={onDelete}
              >
                Remove From productlist
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
