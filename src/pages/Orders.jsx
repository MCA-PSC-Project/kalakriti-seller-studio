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

  const [products, setProducts] = useState([]);
  useEffect(() => {
    api
      .get(`/sellers/products`)
      .then((response) => {
        setProducts(response.data === null ? [] : response.data);
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
          {products && products.length > 0 ? (
            products.map((product) => {
              return (
                <ProductHorizontalCard
                  key={product.id}
                  productId={product.id}
                  imgSrc={product.base_product_item.media.path}
                  cardTitle={product.product_name}
                  originalPrice={product.base_product_item.original_price}
                  offerPrice={product.base_product_item.offer_price}
                  average_rating={product.average_rating}
                  ratingCount={product.rating_count}
                  quantityInStock={product.base_product_item.quantity_in_stock}
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
  productId,
  imgSrc,
  cardTitle,
  originalPrice,
  offerPrice,
  average_rating,
  ratingCount,
  quantityInStock,
}) {
  const navigate = useNavigate();
  return (
    <div
      className="card mb-3"
      style={{ maxWidth: 1000 }}
      onClick={(event) => {
        navigate(`/products/${productId}`);
      }}
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
