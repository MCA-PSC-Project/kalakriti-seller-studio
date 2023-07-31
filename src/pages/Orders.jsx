import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import api from "../utils/api";
import "./Products.css";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import Loading from "../components/loading/Loading";

function Orders() {
  const [isLoading, setIsLoading] = useState(true); 
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    api
      .get(`/order-list-for-seller`)
      .then((response) => {
        setOrders(response.data === null ? [] : response.data);
        console.log(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);


  return (
    <>
      {isLoading ? ( // display the Loading component while the data is being fetched
        <Loading />
      ) : (
        <>
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
                  key={order.order_id}
                  orderId={order.order_id}
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
                  city={order.shipping_address.city}
                  district={order.shipping_address.district}
                  state={order.shipping_address.state}
                  country={order.shipping_address.country}
                  pincode={order.shipping_address.pincode}
                  landmark={order.shipping_address.landmark}
                  SKU={order.SKU}
                  orderItemId={order.order_item_detail.order_item_id}
                  orderItemStatus={order.order_item_detail.order_item_status}

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
      )}
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
  pincode,
  landmark,
  SKU,
  orderItemId,
  orderItemStatus,
}) {
  const [saveButtonDisable, setSaveButtonDisble] = useState(true);
  const [productStatus, setProductStatus] = useState(true);
  const navigate = useNavigate();
  const orderItemStatusRef=useRef();
  const [showModal, setShowModal] = useState(true);
  const [modalProperties, setModalProperties] = useState({});



  const changeOrderStatus = () => {
    console.log(orderItemStatusRef.current.value);
    const orderItemStatus = orderItemStatusRef.current.value;
    api
      .patch(`/order-items/${orderItemId}`, {
        order_item_status: orderItemStatus,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log("Order Status Updated");
          setShowModal(true);
          setModalProperties({
            title: "Message",
            body: "Order Status Updated",
            cancelButtonPresent: false,
            onClose: () => {
              setShowModal(false);
              // window.location.reload();
            },
          });
        }
      })
      .catch((error) => {
        console.error(error);
        setShowModal(true);
        setModalProperties({
          title: "Message",
          body: "Some error occured in updating order status",
          cancelButtonPresent: false,
          onClose: () => {
            setShowModal(false);
            // window.location.reload();
          },
        });
      });
  };

  return (
    <>
    {showModal && (
      <Modal
        title={modalProperties.title}
        body={modalProperties.body}
        cancelButtonPresent={modalProperties.cancelButtonPresent}
        onClose={() => {
          setShowModal(false);
          window.location.reload();
        }}
      />
    )}

    <div className="card mb-3" style={{ maxWidth: 1000 }}>
      <div className="row g-0" style={{ cursor: "pointer" }}>
        <div className="col-md-4">
          <img src={imgSrc} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{cardTitle}</h2>
            <h3>
              Order:- {orderId}-{orderItemId}
            </h3>
            <h6>
              SKU code - <b>{SKU}</b>
            </h6>
            <h6>Variant Name - {variantName}</h6>
            <div className="card-text">
              <p style={{ fontSize: "16px" }}>
                Quantity - {quantity}
                <br />
                Price -<span>&#8377;</span>
                <del>{originalPrice}</del>&nbsp;
                <span>&#8377;</span>
                {offerPrice}
              </p>
              <p style={{ fontSize: "16px" }}>
                <b> Order Placed On -</b>
                {addedAt}
              </p>
            </div>

            <div>
              <fieldset>
                <legend>Shipping Address</legend>
                <p style={{ fontSize: "16px" }}>
                  <b> Ship to -</b> {fullName}
                  <br />
                  <b>Mobile -</b> {mobileNo}
                  <br />
                  <b>Address - </b>
                  {addressLine1}
                  <br />
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                  {addressLine2}
                  <br />
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {city}
                  <br />
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                  {district}
                  <br />
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                  {state}
                  <br />
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                  {country}
                  <br />
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                  {pincode}
                  <br />
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                  {landmark}
                  <br />
                </p>
              </fieldset>
            </div>

            <div style={{ marginTop: "40px" }}>
              <fieldset>
                <legend>Order Item Status</legend>

                <select
                  className="form-select"
                  aria-label="Default select example"
                  disabled={productStatus}
                  ref={orderItemStatusRef}
                >
                  <option value="" selected>
                    {orderItemStatus}
                  </option>
                  {orderItemStatus !== "initiated" && (
                    <option value="initiated" disabled="true">
                      Initiated
                    </option>
                  )}
                  {orderItemStatus !== "pending" && (
                    <option value="pending">Pending</option>
                  )}
                  {orderItemStatus !== "confirmed_by_seller" && (
                    <option value="confirmed_by_seller">
                      Confirmed By Seller
                    </option>
                  )}
                  {orderItemStatus !== "cancelled_by_seller" && (
                    <option value="cancelled_by_seller">
                      Cancelled By Seller
                    </option>
                  )}
                  {orderItemStatus !== "dispatched" && (
                    <option value="dispatched">Dispatched</option>
                  )}
                  {orderItemStatus !== "shipped" && (
                    <option value="shipped">Shipped</option>
                  )}
                  {orderItemStatus !== "delivered" && (
                    <option value="delivered">Delivered</option>
                  )}
                  {orderItemStatus !== "return_requested" && (
                    <option value="return_requested" disabled="true">
                      Return Requested
                    </option>
                  )}
                  {orderItemStatus !== "return_apporved" && (
                    <option value="return_apporved">Return Apporved</option>
                  )}
                  {orderItemStatus !== "returned" && (
                    <option value="returned">Returned</option>
                  )}
                  {orderItemStatus !== "failure" && (
                    <option value="failure">Failure</option>
                  )}
                  {orderItemStatus !== "success" && (
                    <option value="success">Success</option>
                  )}
                </select>
                <div
                  className="d-flex justify-content-center"
                  style={{ marginTop: "20px" }}
                >
                  <button
                    type="button"
                    className="btn btn-warning"
                    style={{ marginBottom: "20px" }}
                    onClick={(event) => {
                      setSaveButtonDisble(false);
                      setProductStatus(false);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    style={{ marginLeft: "20px", marginBottom: "20px" }}
                    disabled={saveButtonDisable}
                    data-bs-toggle="modal"
                    data-bs-target="#modal"
                    onClick={() => changeOrderStatus()}
                  >
                    Save Change
                  </button>
                </div>
              </fieldset>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Orders;
