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
                  originalPrice={order.order_item_detail.original_price}
                  offerPrice={order.order_item_detail.offer_price}
                  quantity={order.order_item_detail.quantity}
                  addedAt={order.added_at}
                  updatedAt={order.updated_at}
                  fullName={order.shipping_address.full_name}
                  mobileNo={order.shipping_address.mobileNo}
                  addressLine1={order.shipping_address.address_line1}
                  addressLine2={order.shipping_address.address_line2}
                  city ={order.shipping_address.city}
                  SKU ={order.SKU}

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
  SKU,

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
            {quantityInStock > 0 ? (
              <h5 className="text-success">
                In Stock : {quantityInStock} left
              </h5>
            ) : (
              <h5 className="text-danger">Out Of Stock</h5>
            )}
            <div className="card-text">
              <Rating ratingValue={average_rating} ratingCount={ratingCount} />
              <p
                className="card-text"
                style={{ display: quantityInStock > 0 ? null : "none" }}
              >
                <span>&#8377;</span>
                <del>{originalPrice}</del>&nbsp;
                <span>&#8377;</span>
                {offerPrice}
              </p>
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
