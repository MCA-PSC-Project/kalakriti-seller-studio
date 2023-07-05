import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";
import api from "../utils/api";
import Toast from "../components/Toast";
import "./Products.css";

function Products() {
  const [showToast, setShowToast] = useState(false);
  const [toastProperties, setToastProperties] = useState({});

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
      <h1 style={{backgroundColor:"orange",textAlign:"center"}}>Your Products</h1>
      <div className="d-flex justify-content-center align-items-center">
        <div className="text-left">
          {products && products.length > 0 ? (
            products.map((product) => {
              return (
                <ProductsHorizontalCard
                  key={product.product_id}
        
                  imgSrc={product.base_product_item.media.path}
                  cardTitle={product.product_name}
                  productStatus={product.product_status}
                  addedAt={product.added_at}
                  updatedAt={product.updated_at}
                  originalPrice={product.base_product_item.original_price}
                  offerPrice={product.base_product_item.offer_price}
                  // onDelete={() => handleDelete(product.product_item.id)}
                  // onAddToCart={() => handleAddToCart(product.product_item.id, 1)}
                />
              );
            })
          ) : (
            <h1 style={{backgroundColor:"red",textAlign:"center"}}>No Products Found!!</h1>
          )}

        </div>
      </div>
      <Footer />
    </>
  );
}

function ProductsHorizontalCard({
  imgSrc,
  cardTitle,
 productStatus,
 addedAt,
 updatedAt,
 originalPrice,
 offerPrice,
}) {
  return (
    <div className="card mb-3 " style={{ maxWidth: 1000 }}>
      <div className="row g-0  containermy">
        <div className="col-md-4 zoom-image">
          <img src={imgSrc} className="img-fluid rounded-start " alt="..." />
        </div>
        <div className="col-md-8 cont">
          <div className="card-body">
            <h2 className="card-title">{cardTitle}</h2>
            <hr/>
            <div style={{marginTop:20,}}>
             <p>
            <b>Product Status - </b>{productStatus}<br/>
            <b>Added At - </b>{addedAt}<br/>
            <b>Updated At -</b>{updatedAt}<br/>
            <b>Price -</b>
                <span>&#8377;</span>
                <del>{originalPrice}</del>&nbsp;
                <span>&#8377;</span>
                {offerPrice}
              </p>
          
            </div>
            
            <div className="card-text button">
            <button
                type="button"
                className="btn btn-outline-primary me-2"
                // onClick={getProducts}
              >
                View Details
              </button>  
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
