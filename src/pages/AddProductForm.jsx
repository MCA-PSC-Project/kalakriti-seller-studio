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
// import ProductImage from "../components/ProductImage";
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
      .max(999999, "Maximum 999999")
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
  const [productImages, setProductImages] = useState([]);
  const [addMoreDisabled, setAddMoreDisabled] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalProperties, setModalProperties] = useState({});
  const [subCategoryDisabled, setSubCategoryDisabled] = useState(true);
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
  const [subCategory,setSubCategory] = useState(null);
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

  // const handleProductImageSelection = (selectedImage) => {
  //   console.log("handleProductImageSelection");
  //   setImages([...images, selectedImage]);
  // };
  // const handleProductImage = () => {
  //   console.log("hello in product image");
  //   console.log(count);
  //   setCount(count + 1);

  //   setImages([...images, selectedImage]);

  //   if (count == 6) {
  //     setProductImageDisable(true);
  //   }
  // };

  // const uploadImage = (selectedImage) => {
  //   console.log("upload image called");
  //   const mediaList = [];
  //   for (let i = 0; i <= productImageCount; i++) {
  //     const formData = new FormData();
  //     formData.append("file", selectedImage);
  //     console.log("formdata= ", formData);
  //     // api.post(`/uploads/image`, formData, config).then((response) => {
  //     //   if (response.status === 201) {
  //     //     // console.log("image selected");
  //     //     console.log("response=", response.data);
  //     //     mediaList.append(response.data.id);
  //     //   } else {
  //     //     console.log("error");
  //     //   }
  //     // });
  //     console.log("images=", images);
  //   }
  // };

  const submitNewProduct = () => {
    console.log("form");
    console.log(productNameRef.current.value);
    const productName = productNameRef.current.value;
    console.log(productDescriptionRef.current.value);
    const productDescription = productDescriptionRef.current.value;
    console.log(categoryRef.current.value);
    //  console.log(categoryRef.current.name);

    const category = parseInt(categoryRef.current.value);


    console.log(subCategoryRef.current.value);
    if (subCategoryRef.current.value == 0){
         setSubCategory(null);
    }else{
      setSubCategory(parseInt(subCategoryRef.current.value));
    }
  
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

    console.log("productImages=", productImages);
    const mediaIds = [];
    const promises = [];
    for (const productImage of productImages) {
      const formData = new FormData();
      formData.append("file", productImage);
      console.log("formdata= ", formData);

      const promise = api
        .post(`/uploads/image`, formData, config)
        .then((response) => {
          if (response.status === 201) {
            console.log("response=", response.data);
            mediaIds.push(response.data.id);
          } else {
            console.log("error");
          }
        });
      promises.push(promise);
    }

    Promise.all(promises).then(() => {
      console.log("mediaIds=", mediaIds);

    

      const media_list = [];
      for (let i = 0; i < productImageCount; i++) {
        media_list.push({
          media_id: mediaIds[i],
          display_order: i+1,
        });
      }
     
      const product_items_list =[];
      product_items_list.push({
       variant: variant,
       variant_value: variantValue,
       product_variant_name: productVariantName,
       SKU: SKU,
       original_price: originalPrice,
       offer_price: offerPrice,
       quantity_in_stock: quantityInStock,
       media_list: media_list,
      });
    

      api
        .post(`/sellers/products`, {
          product_name: productName,
          product_description: productDescription,
          category_id: category,
          subcategory_id: subCategory,
          currency: currency,
          min_order_quantity: minOrder,
          max_order_quantity: maxOrder,
          product_items: product_items_list,
        })
        .then((response) => {
          if (response.status === 201) {
            console.log("Product created successfully");
            setShowModal(true);
            setModalProperties({
              title: "Message",
              body: "Product created successfully",
              cancelButtonPresent: false,
            });
          }
        })
        .catch((error) => {
          console.log(media_list);
          console.error("Some error occured in creating product");
          console.error(error);
          setShowModal(true);
          setModalProperties({
            title: "Message",
            body: "Some error occured in creating product",
            cancelButtonPresent: false,
          });
        });
    });
  };

  const [productImageCount, setProductImageCount] = useState(1);
  const handleAddMoreClick = () => {
    if (productImageCount < 6) {
      setProductImageCount(productImageCount + 1);
    } else {
      setAddMoreDisabled(true);
    }
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
                      disabled={subCategoryDisabled}
                      defaultValue={0}
                    >
                      <option value="0" selected>Select Subcategory</option>
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
                      min={1}
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
                   
                   
                    <select
                        className="form-select"
                        id="variant"
                        aria-label="Floating label select example"
                        required=""
                        ref={variantRef}
                        >
                          <option value="">Select Variant</option>
                          <option value="BASE" > BASE
                          </option>
                          <option value="COLOR">COLOR</option>
                          <option value="MATERIAL">MATERIAL</option>
                          <option value="SIZE">SIZE</option>
                         
                        </select>
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
                      type="text"
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
                      min={0}
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
                  {[...Array(productImageCount)].map((_, index) => (
                    <ProductImage
                      key={index}
                      onSelectImage={(selectedImage) => {
                        setAddMoreDisabled(false);
                        console.log("productImageDisabled=", addMoreDisabled);
                        // console.log("selectedImage=", selectedImage);
                        setProductImages([...productImages, selectedImage]);
                      }}
                    />
                  ))}
                  {/* {productImages} */}
                  <div style={{ textAlign: "right" }}>
                    <button
                      type="button"
                      disabled={addMoreDisabled}
                      onClick={() => {
                        setAddMoreDisabled(true);
                        handleAddMoreClick();
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
                    onClick={() => submitNewProduct()}
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

function ProductImage({ onSelectImage }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [dpUpdateMode, setDpUpdateMode] = useState(false);
  const [imageURL, setImageURL] = useState(null);

  const {
    //   register: addProductForm,
    //   handleSubmit,
    formState: { errors },
  } = useForm({
    //   resolver: yupResolver(addProductSchema),
  });

  // const config = {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   },
  // };

  useEffect(() => {
    if (selectedImage) {
      console.log("selectedImage=", selectedImage);
      // onSelectImage = () => {
      //   console.log("passed selectedImage to parent=", selectedImage);
      //   onSelectImage(selectedImage);
      // };
      onSelectImage(selectedImage);
    }
  }, [selectedImage]);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setSelectedImage(img);
      setImageURL(URL.createObjectURL(img));
      // setDpUpdateMode(true);
    }
  };

  return (
    <div className="col-12">
      <div>
        <label htmlFor="mediaList" className="form-label required">
          Upload medias for the product
        </label>
        <p>
          {selectedImage && (
            <img
              src={imageURL ?? selectedImage}
              class="rounded-circle"
              alt="preview"
              width="200"
              height="200"
            />
          )}
          <br />
          <input
            accept="image/*"
            type="file"
            id="select-image"
            onChange={handleImageChange}
          />
          <br />
        </p>
      </div>
      {errors.mediaList && (
        <span style={{ color: "red" }}>{errors.mediaList.message}</span>
      )}
    </div>
  );
}

export default AddProductForm;
