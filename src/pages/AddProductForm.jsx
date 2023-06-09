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

    // dp: yup.string().required("Please provide a profile picture"),
  })
  .required();

function AddProductForm() {
  const {
    register: addProductForm,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addProductSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const bodyContent = JSON.stringify({
        product_name: data.productName,
        product_description: data.productDescription,
        category,
        subcategory,
        min_order_quantity: data.minOrderQuantity,
        max_order_quantity: data.maxOrderQuantity,
        product_variant_name: data.productVariantName,
        SKU: data.SKU,
        original_price: data.originalPrice,
        offer_price: data.offerPrice,
      });
      const response = await AuthService.register(bodyContent);
      // if (result.data) {
      //   // navigate("/profile");
      // }
      alert("Form submitted!!!");
      console.log(response.data);
      alert(response.data);
    } catch (error) {
      console.log(error);
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
              onSubmit={handleSubmit(onSubmit)}
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
                    >
                      <option selected>Select Category</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
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
                    >
                      <option selected>Select Subcategory</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
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
                    <select
                      className="form-select"
                      id="minOrderQuantity"
                      aria-label="Floating label select example"
                      required=""
                    >
                      <option selected>1</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
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
                    <select
                      className="form-select"
                      id="maxOrderQuantity"
                      aria-label="Floating label select example"
                      required=""
                    >
                      <option selected>Select</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
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
                    type="text"
                    className="form-control"
                    id="offerPrice"
                    placeholder=""
                    defaultValue=""
                    required=""
                    min={0}
                    {...addProductForm("offerPrice")}
                  />
                  {errors.offerPrice && (
                    <span style={{ color: "red" }}>
                      {errors.offerPrice.message}
                    </span>
                  )}
                </div>

                <div className="col-12">
                  <label htmlFor="dp" className="form-label">
                    UPLOAD YOUR PROFILE PICTURE
                  </label>
                  <input
                    type="file"
                    accept="image/* , /pdf"
                    className="btn btn-outline-primary"
                    id="dp"
                    name="choose-file"
                  />
                  <br />
                  {errors.dp && (
                    <span style={{ color: "red" }}>{errors.dp.message}</span>
                  )}
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="w-100 btn btn-lg btn-success"
                    onClick={(e) => handleSubmit(e)}
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
