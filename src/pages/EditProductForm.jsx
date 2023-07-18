import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/Modal";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../utils/api";
function EditProductForm() {
  const { state } = useLocation();
  const { productId } = state;
  const navigate = useNavigate();
  const [subCategoryDisable, setSubCategoryDisabled] = useState(true);
  const [productStatusDisable, setProductStatusDisable] = useState(true);
  const [productDetail, setProductDetail] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [modalProperties, setModalProperties] = useState({});

  const productNameRef = useRef(null);
  const productDescriptionRef = useRef(null);
  const categoryRef = useRef(null);
  const subCategoryRef = useRef(null);
  const currencyRef = useRef(null);
  const minOrderRef = useRef(null);
  const maxOrderRef = useRef(null);
  const productStatusRef = useRef(null);
  // const [categoryID, setCategoryID] = useState([]);
  var categoryID, categoryIN, categoryIndex;

  const handleCategoryChange = (event) => {
    categoryID = categoryRef.current.value;
    categoryIN = categoryRef.current.selectedIndex;
    console.log(categoryID);

    categoryIndex = categoryIN - 1;
    console.log(categoryIndex);
    console.log(categories[categoryIndex].subcategories);
    if (categories[categoryIndex].subcategories) {
      setSubCategoryDisabled(false);
      setSubCategories(categories[categoryIndex].subcategories);
    } else {
      setSubCategoryDisabled(true);
    }
  };

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({});

  const handleSubmit = () => {
    console.log("form");
    console.log(productNameRef.current.value);
    const productName = productNameRef.current.value;
    console.log(productDescriptionRef.current.value);
    const productDescription = productDescriptionRef.current.value;
    console.log(categoryRef.current.value);
    //  console.log(categoryRef.current.name);
     console.log(productDetail.category.id);
     const category = categoryRef.current.value;
    console.log(subCategoryRef.current.value);
    console.log(productDetail.subcategory.id);
    const subCategory = subCategoryRef.current.value;
    console.log(currencyRef.current.value);
    const currency = currencyRef.current.value;
    console.log(minOrderRef.current.value);
    const minOrder = minOrderRef.current.value;
    console.log(maxOrderRef.current.value);
    const maxOrder = maxOrderRef.current.value ;


    // api
    // .put(`/sellers/products/${productId}`, {
    //   product_name: productName ||productDetail.product_name ,
    //   product_description :productDescription ||productDetail.product_description ,
    //   category_id: category || productDetail.category.id,
    //   subcategory_id: subCategory || productDetail.subcategory.id,
    //   currency: currency ||productDetail.currency,
    //   min_order_quantity: minOrder || productDetail.min_order_quantity,
    //   max_order_quantity: maxOrder || productDetail.max_order_quantity,
    // })
    // .then((response) => {
    //   console.log(response);
    //   if (response.status === 200) {
    //     console.log("Product Details Updated");
    //     setShowModal(true);
    //     setModalProperties({
    //       title: "Message",
    //       body: "Product Details Updated",
    //       cancelButtonPresent: false,
    //     });
    //   }
    // })
    // .catch((error) => {
    //   console.error(error);
    //   setShowModal(true);
    //   setModalProperties({
    //     title: "Message",
    //     body: "Some error occured in updating product details",
    //     cancelButtonPresent: false,
    //   });
    // });
    // console.log(productStatusRef.current.value);
  };

  useEffect(() => {
    api
      .get(`/products/${productId}`)
      .then((response) => {
        setProductDetail(response.data === null ? [] : response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
        console.log(productId);
      });
  }, []);

  useEffect(() => {
    api
      .get(`/categories`)
      .then((response) => {
        setCategories(response.data === null ? [] : response.data);
        console.log(response.data);
        console.log(categoryID);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
        />)}
      <div className="text-center">
        <h1>Edit product details</h1>
      </div>
      <div className="mx-auto col-10 col-md-8 col-lg-6">
        <form
          className="edit-product-form"
          id="product_detail"
          noValidate=""
          // onSubmit={handleSubmit(onSubmit)}
        >
          <div className="row g-3">
            <div className="col-12">
              <div style={{ textAlign: "left" }}>
                <label htmlFor="productName" className="form-label">
                  Product name
                </label>
              </div>
              <input
                type="text"
                className="form-control"
                id="productName"
                // placeholder=" name"
                defaultValue={productDetail.product_name}
                required=""
                ref={productNameRef}
              />
            </div>

            <div className="col-12">
              <div style={{ textAlign: "left" }}>
                <label htmlFor="productDescription" className="form-label">
                  Product Descritption
                </label>
              </div>
              <textarea
                className="form-control"
                id="productDescription"
                style={{ height: 200 }}
                defaultValue={productDetail.product_description}
                required=""
                ref={productDescriptionRef}
              />
            </div>

            <div className="col-12">
              <div style={{ textAlign: "left" }}>
                <label htmlFor="category" className="form-label required">
                  Category
                </label>
              </div>
              <select
                className="form-select"
                id="category"
                aria-label="Floating label select example"
                required=""
                onChange={handleCategoryChange}
                ref={categoryRef}
              >
                {/* <option value="" selected>{productDetail.category.name}</option> */}
                {categories && categories.length > 0 ? (
                  categories.map((category) => {
                    return <option value={category.id}>{category.name}</option>;
                  })
                ) : (
                  <h1 style={{ backgroundColor: "red", textAlign: "center" }}>
                    No Category Found!!
                  </h1>
                )}
              </select>
            </div>

            <div className={subCategoryDisable ? "d-none" : "col-12"}>
              <div style={{ textAlign: "left" }}>
                <label htmlFor="subcategory" className="form-label required">
                  Subcategory
                </label>
              </div>
              <select
                className="form-select"
                id="subcategory"
                aria-label="Floating label select example"
                required=""
                ref={subCategoryRef}
              >
                {console.log({ subCategories })}
                {/* <option selected value={productDetail.subCategory.id}>{productDetail.subCategory.name}</option> */}
                {subCategories && subCategories.length > 0 ? (
                  subCategories.map((subCategory) => {
                    return (
                      <option value={subCategory.id}>{subCategory.name}</option>
                    );
                  })
                ) : (
                  <h1 style={{ backgroundColor: "red", textAlign: "center" }}>
                    No subCategory Found!!
                  </h1>
                )}
              </select>
            </div>

            <div className="col-12">
              <div style={{ textAlign: "left" }}>
                <label htmlFor="currency" className="form-label required">
                  Currency
                </label>
              </div>
              <select
                className="form-select"
                id="currency"
                aria-label="Floating label select example"
                required=""
                ref={currencyRef}
              >
                <option selected>{productDetail.currency}</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>

            <div className="col-12">
              <div style={{ textAlign: "left" }}>
                <label
                  htmlFor="minOrderQuantity"
                  className="form-label required"
                >
                  Minimum order quantity per Order
                </label>
              </div>
              <input
                type="number"
                className="form-control"
                id="minOrderQuantity"
                placeholder=""
                defaultValue={productDetail.min_order_quantity}
                required=""
                min={1}
                ref={minOrderRef}
              />
            </div>

            <div className="col-12">
              <div style={{ textAlign: "left" }}>
                <label
                  htmlFor="maxOrderQuantity"
                  className="form-label required"
                >
                  Maximum order quantity per Order
                </label>
              </div>
              <input
                type="number"
                className="form-control"
                id="maxOrderQuantity"
                placeholder=""
                defaultValue={productDetail.max_order_quantity}
                required=""
                min={0}
                ref={maxOrderRef}
              />
            </div>
          </div>
        </form>

        <form
          className="edit-product-form"
          style={{ marginTop: "10px" }}
          noValidate=""
          // onSubmit={handleSubmit(onSubmit)}
          // id="product_status"
        >
          <div className="d-flex justify-content-between">
            <label htmlFor="currency" className="form-label required">
              Product Status
            </label>
            <button
              style={{ backgroundColor: "#FFFF00" }}
              onClick={() => {
                setProductStatusDisable(false);
              }}
            >
              <FontAwesomeIcon
                icon={faPencil}
                fade
                style={{ color: "#0d0d0c" }}
              />
            </button>
          </div>

          <select
            className="form-select"
            // id="product"
            aria-label="Floating label select example"
            required=""
            disabled={productStatusDisable}
            ref={productStatusRef}
          >
            <option value="" selected>
              {productDetail.product_status}
            </option>
            {productDetail.product_status !== "published" && (
              <option value="published">Published</option>
            )}
            {productDetail.product_status !== "unpublished" && (
              <option value="unpublished">Unpublished</option>
            )}
            {productDetail.product_status !== "draft" && (
              <option value="draft">Draft</option>
            )}
            {productDetail.product_status !== "submitted_for_review" && (
              <option value="submitted_for_review" disabled="true">
                Submitted for review
              </option>
            )}
            {productDetail.product_status !== "review_rejected" && (
              <option value="review_rejected" disabled="true">
                Review Rejected
              </option>
            )}
            {productDetail.product_status !== "trashed" && (
              <option value="trashed" disabled="true">
                Trashed
              </option>
            )}
          </select>
        </form>

        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "25px" }}
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              navigate(`/products/${productId}`);
            }}
          >
            Close
          </button>
          <button
            style={{ marginLeft: "10px" }}
            type="button"
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#modal"
            onClick={() => handleSubmit()}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}

export default EditProductForm;
