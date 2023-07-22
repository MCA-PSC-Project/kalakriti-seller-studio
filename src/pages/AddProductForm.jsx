import Footer from "../components/Footer";
import Logo from "../assets/logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthService from "../services/auth-service";
import "./AddProductForm.css";
import NavBar from "../components/NavBar";
import React, { useState, useEffect, useRef } from "react";
import profilePicSample from "../assets/profilePicSample.jpg";
import ProductImage from "../components/ProductImage";
import Modal from "../components/Modal";
import api from "../utils/api";

const addProductSchema = yup
  .object({
    productName: yup.string().required("Product Name is required"),
    productDescription: yup
      .string()
      .required("Product Description is required"),
    category: yup.string().required("Category is required"),
    subcategory: yup.string().required("Subcategory is required"),
    minOrderQuantity: yup
      .number()
      .typeError("Must be numeric.")
      .integer("Must be an integer.")
      .min(1, "Minimum 1")
      .max(999999, "Maximum 999.999")
      // .transform((value) => (isNaN(value) ? undefined : value))
      .required("Minimum order quantity is required"),
    maxOrderQuantity: yup
      .number()
      .typeError("Must be numeric.")
      .integer("Must be an integer.")
      .min(1, "Minimum 1")
      .max(999999, "Maximum 999.999")
      // .transform((value) => (isNaN(value) ? undefined : value))
      .required("Maximum order quantity is required"),
    productVariantName: yup
      .string()
      .required("Product Variant Name is required"),
    SKU: yup.string().required("SKU is required"),
    originalPrice: yup
      .number()
      .typeError("Must be numeric.")
      .integer("Must be an integer.")
      .min(1, "Minimum 1")
      .max(999999, "Maximum 999.999")
      // .transform((value) => (isNaN(value) ? undefined : value))
      .required("Original Price is required"),
    offerPrice: yup
      .number()
      .typeError("Must be numeric.")
      .integer("Must be an integer.")
      .min(1, "Minimum 1")
      .max(999999, "Maximum 999.999")
      // .transform((value) => (isNaN(value) ? undefined : value))
      .required("Offer Price is required"),
    mediaList: yup.string().required("Please provide media for product"),
  })
  .required();

function AddProductForm() {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(2);
  const [productImageDisable, setProductImageDisable] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalProperties, setModalProperties] = useState({});
  const [subCategoryDisable, setSubCategoryDisabled] = useState(true);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const {
    register: addProductForm,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addProductSchema),
  });

  const productNameRef = useRef(null);
  const productDescriptionRef = useRef(null);
  const categoryRef = useRef(null);
  const subCategoryRef = useRef(null);
  const currencyRef = useRef(null);
  const minOrderRef = useRef(null);
  const maxOrderRef = useRef(null);
  const variantRef = useRef(null);
  const variantValueRef = useRef(null);
  const productVariantNameRef = useRef(null);
  const SKURef = useRef(null);
  const originalPriceRef = useRef(null);
  const offerPriceRef = useRef(null);
  const quantityInStockRef = useRef(null);

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

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const onSubmit = () => {
    console.log("form");

    // console.log(productNameRef.current.value);
    // console.log(productDescriptionRef.current.value);
    // try {

    // const mediaList = []
    // for(i=0;i<=count;i++){
    // const formData = new FormData();
    //   formData.append("file", selectedImage);
    //   console.log("formdata= ", formData);
    //   api
    //     .post(`/uploads/image`, formData, config)
    //     .then((response) => {
    //       if (response.status === 201) {
    //         // console.log("image selected");
    //         console.log("response=", response.data);
    //         mediaList.append(response.data.id);
    //       }})
    //     }
    // const bodyContent = JSON.stringify({
    //   product_name: data.productName,
    //   product_description: data.productDescription,
    //   category,
    //   subcategory,
    //   min_order_quantity: data.minOrderQuantity,
    //   max_order_quantity: data.maxOrderQuantity,
    //   product_variant_name: data.productVariantName,
    //   SKU: data.SKU,
    //   original_price: data.originalPrice,
    //   offer_price: data.offerPrice,
    //   media_list: data.mediaList,
    // });
    // const response = await AuthService.register(bodyContent);
    // // if (result.data) {
    // //   // navigate("/profile");
    // // }
    // alert("Form submitted!!!");
    // console.log(response.data);
    // alert(response.data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleProductImage = () => {
    console.log("hello in product image");
    console.log(count);
    setCount(count + 1);
    setImages([...images, <ProductImage />]);
    if (count == 6) {
      setProductImageDisable(true);
    }
  };

  const addNewProduct = () => {
    console.log("form");
    console.log(productNameRef.current.value);
    const productName = productNameRef.current.value;
    console.log(productDescriptionRef.current.value);
    const productDescription = productDescriptionRef.current.value;
    console.log(categoryRef.current.value);
    //  console.log(categoryRef.current.name);

    const category = categoryRef.current.value;
    console.log(subCategoryRef.current.value);

    const subCategory = subCategoryRef.current.value;
    console.log(currencyRef.current.value);
    const currency = currencyRef.current.value;
    console.log(minOrderRef.current.value);
    const minOrder = minOrderRef.current.value;
    console.log(maxOrderRef.current.value);
    const maxOrder = maxOrderRef.current.value;
    console.log(variantRef.current.value);
    const variant = variantRef.current.value;
    console.log(variantValueRef.current.value);
    const variantValue = variantValueRef.current.value;
    console.log(productVariantNameRef.current.value);
    const productVariantName = productVariantNameRef.current.value;
    console.log(SKURef.current.value);
    const SKU = SKURef.current.value;
    console.log(originalPriceRef.current.value);
    const originalPrice = originalPriceRef.current.value;
    console.log(offerPriceRef.current.value);
    const offerPrice = offerPriceRef.current.value;
    console.log(quantityInStockRef.current.value);
    const quantityInStock = quantityInStockRef.current.value;
    // api
    //   .post(`/sellers/products`, {
    //       product_name: productName,
    //       product_description: productDescription,
    //       category_id: category,
    //       subcategory_id: subcategory || null,
    //       currency: currency,
    //       min_order_quantity: minOrderQuantity,
    //       max_order_quantity: maxOrderQuantity,
    // "product_items": [
    //   {
    //     "variant": "BASE",
    //     "variant_value": "BASE",
    //     product_variant_name: productVariantName,
    //     "SKU": SKU,
    //     "original_price": originalPrice,
    //     "offer_price": offerPrice,
    //     "quantity_in_stock": 10,
    //     "media_list": [
    //       {
    //         "media_id": 1,
    //         "display_order": 1
    //       },
    //       {
    //         "media_id": 2,
    //         "display_order": 2
    //       },
    //          {
    //         "media_id": 3,
    //         "display_order": 3
    //       }
    //     ]
    //   }
    // ]

    // })
    // .then((response) => {
    //   if (response.status === 201) {
    //     console.log("Product created successfully");
    //     setShowModal(true);
    //     setModalProperties({
    //       title: "Message",
    //       body: "Product created successfully",
    //       cancelButtonPresent: false,
    //     });
    //   }
    // })
    // .catch((error) => {
    //   console.error("Some error occured in creating product");
    //   console.error(error);
    //   setShowModal(true);
    //   setModalProperties({
    //     title: "Message",
    //     body: "Some error occured in creating product",
    //     cancelButtonPresent: false,
    //   });
    // });
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="text-center">
          <h1>Add a product</h1>
        </div>
        <div className="row">
          <div className="mx-auto col-10 col-md-8 col-lg-6">
            <form
              className="add-product-form"
              noValidate=""
              // onSubmit={handleSubmit(onSubmit)}
            >
              <div className="row g-3">
                <div className="col-12">
                  <label htmlFor="productName" className="form-label required">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    placeholder="Product Name"
                    defaultValue=""
                    required=""
                    {...addProductForm("productName")}
                    ref={productNameRef}
                  />
                  {errors.productName && (
                    <span style={{ color: "red" }}>
                      {errors.productName.message}
                    </span>
                  )}
                </div>

                <div className="col-12">
                  <label
                    htmlFor="productDescription"
                    className="form-label required"
                  >
                    Product Description
                  </label>
                  <textarea
                    className="form-control"
                    placeholder="Add Description of the product here"
                    id="productDescription"
                    style={{ height: 400 }}
                    defaultValue={""}
                    required=""
                    {...addProductForm("productDescription")}
                    ref={productDescriptionRef}
                  />
                  {errors.productDescriptions && (
                    <span style={{ color: "red" }}>
                      {errors.productDescription.message}
                    </span>
                  )}
                </div>

                <div className="col-md-6">
                  <div>
                    <label htmlFor="category" className="form-label required">
                      Category
                    </label>
                    <select
                      className="form-select"
                      id="category"
                      aria-label="Floating label select example"
                      required=""
                      ref={categoryRef}
                      onChange={handleCategoryChange}
                    >
                      <option selected>Select Category</option>
                      {categories && categories.length > 0 ? (
                        categories.map((category) => {
                          return (
                            <option value={category.id}>{category.name}</option>
                          );
                        })
                      ) : (
                        <h1
                          style={{
                            backgroundColor: "red",
                            textAlign: "center",
                          }}
                        >
                          No Category Found!!
                        </h1>
                      )}
                    </select>
                  </div>
                  {errors.category && (
                    <span style={{ color: "red" }}>
                      {errors.category.message}
                    </span>
                  )}
                </div>

                <div className="col-md-6">
                  <div>
                    <label
                      htmlFor="subcategory"
                      className="form-label required"
                    >
                      Subcategory
                    </label>
                    <select
                      className="form-select"
                      id="subcategory"
                      aria-label="Floating label select example"
                      required=""
                      ref={subCategoryRef}
                      disabled={subCategoryDisable}
                    >
                      <option selected>Select Subcategory</option>
                      {subCategories && subCategories.length > 0 ? (
                        subCategories.map((subCategory) => {
                          return (
                            <option value={subCategory.id}>
                              {subCategory.name}
                            </option>
                          );
                        })
                      ) : (
                        <h1
                          style={{
                            backgroundColor: "red",
                            textAlign: "center",
                          }}
                        >
                          No subCategory Found!!
                        </h1>
                      )}
                    </select>
                  </div>
                  {errors.subcategory && (
                    <span style={{ color: "red" }}>
                      {errors.subcategory.message}
                    </span>
                  )}
                </div>

                <div className="col-md-4">
                  <div>
                    <label htmlFor="currency" className="form-label required">
                      Currency
                    </label>
                    <select
                      className="form-select"
                      id="currency"
                      aria-label="Floating label select example"
                      required=""
                      ref={currencyRef}
                    >
                      <option selected>INR (Indian Rupee)</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  {errors.currency && (
                    <span style={{ color: "red" }}>
                      {errors.currency.message}
                    </span>
                  )}
                </div>

                <div className="col-md-4">
                  <div>
                    <label
                      htmlFor="minOrderQuantity"
                      className="form-label required"
                    >
                      Minimum order quantity per Order
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="minOrderQuantity"
                      placeholder=""
                      defaultValue={1}
                      required=""
                      min={1}
                      {...addProductForm("minOrderQuantity")}
                      ref={minOrderRef}
                    />
                  </div>
                  {errors.minOrderQuantity && (
                    <span style={{ color: "red" }}>
                      {errors.minOrderQuantity.message}
                    </span>
                  )}
                </div>

                <div className="col-md-4">
                  <div>
                    <label
                      htmlFor="maxOrderQuantity"
                      className="form-label required"
                    >
                      Maximum order quantity per Order
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="maxOrderQuantity"
                      placeholder=""
                      defaultValue={5}
                      required=""
                      min={0}
                      {...addProductForm("maxOrderQuantity")}
                      ref={maxOrderRef}
                    />
                  </div>
                  {errors.maxOrderQuantity && (
                    <span style={{ color: "red" }}>
                      {errors.maxOrderQuantity.message}
                    </span>
                  )}
                </div>

                <div className="col-md-4">
                  <div>
                    <label htmlFor="variant" className="form-label required">
                      Variant
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="variant"
                      placeholder="BASE"
                      defaultValue="BASE"
                      required=""
                      ref={variantRef}
                    />
                  </div>
                  {errors.maxOrderQuantity && (
                    <span style={{ color: "red" }}>
                      {errors.maxOrderQuantity.message}
                    </span>
                  )}
                </div>

                <div className="col-md-4">
                  <div>
                    <label
                      htmlFor="variantValue"
                      className="form-label required"
                      placeholder="BASE"
                      defaultValue="BASE"
                      required=""
                    >
                      variant value
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="variantValue"
                      placeholder=""
                      required=""
                      ref={variantValueRef}
                    />
                  </div>
                  {errors.maxOrderQuantity && (
                    <span style={{ color: "red" }}>
                      {errors.maxOrderQuantity.message}
                    </span>
                  )}
                </div>

                <div className="col-12">
                  <label
                    htmlFor="productVariantName"
                    className="form-label required"
                  >
                    Product Variant Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productVariantName"
                    placeholder="Product Variant Name"
                    defaultValue=""
                    required=""
                    {...addProductForm("productVariantName")}
                    ref={productVariantNameRef}
                  />
                  {errors.productVariantName && (
                    <span style={{ color: "red" }}>
                      {errors.productVariantName.message}
                    </span>
                  )}
                </div>

                <div className="col-12">
                  <label htmlFor="SKU" className="form-label required">
                    SKU (Seller Keeping Unit)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="SKU"
                    placeholder="SKU (Seller Keeping Unit)"
                    defaultValue=""
                    required=""
                    {...addProductForm("SKU")}
                    ref={SKURef}
                  />
                  {errors.SKU && (
                    <span style={{ color: "red" }}>{errors.SKU.message}</span>
                  )}
                </div>

                <div className="col-12">
                  <label
                    htmlFor="originalPrice"
                    className="form-label required"
                  >
                    Original Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="originalPrice"
                    placeholder=""
                    defaultValue=""
                    required=""
                    min={0}
                    {...addProductForm("originalPrice")}
                    ref={originalPriceRef}
                  />
                  {errors.originalPrice && (
                    <span style={{ color: "red" }}>
                      {errors.originalPrice.message}
                    </span>
                  )}
                </div>

                <div className="col-12">
                  <label htmlFor="offerPrice" className="form-label required">
                    Offer Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="offerPrice"
                    placeholder=""
                    defaultValue=""
                    required=""
                    {...addProductForm("offerPrice")}
                    ref={offerPriceRef}
                  />
                  {errors.offerPrice && (
                    <span style={{ color: "red" }}>
                      {errors.offerPrice.message}
                    </span>
                  )}
                </div>

                <div className="col-md-4">
                  <div>
                    <label
                      htmlFor="quantityInStock"
                      className="form-label required"
                    >
                      Quantity In Stock
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="quantityInStock"
                      placeholder=""
                      required=""
                      ref={quantityInStockRef}
                    />
                  </div>
                  {errors.maxOrderQuantity && (
                    <span style={{ color: "red" }}>
                      {errors.maxOrderQuantity.message}
                    </span>
                  )}
                </div>

                <div>
                  <ProductImage />
                  {images}
                  <div style={{ textAlign: "right" }}>
                    <button
                      disabled={productImageDisable}
                      onClick={() => {
                        handleProductImage();
                      }}
                    >
                      Add More ++
                    </button>
                  </div>
                </div>

                <div className="col-12">
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-success"
                    onClick={() => addNewProduct()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddProductForm;
