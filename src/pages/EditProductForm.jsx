import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import api from "../utils/api";
function EditProductForm() {
  const { state } = useLocation();
  const { productId } = state;
  const navigate = useNavigate();
  const [isDisable, setIsDisable] = useState(true);
  const [productDetail, setProductDetail] = useState([]);
  const [categories, setCategories] = useState([]);
  //  const [subCategories, setSubCategories] = useState([]);
  const categoryRef = useRef(null);
  // const [categoryID, setCategoryID] = useState([]);
  var categoryID, categoryIN, categoryIndex;

  const handleSelectChange = (event) => {
    categoryID = categoryRef.current.value;
    categoryIN = categoryRef.current.selectedIndex;
    console.log(categoryID);

    categoryIndex = categoryIN - 1;
    console.log(categoryIndex);
    console.log(categories[categoryIndex].subcategories);
    if (categories[categoryIndex].subcategories){
    setIsDisable(false);}
    else{
      setIsDisable(true);
    }
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
      <div className="text-center">
        <h1>Edit product details</h1>
      </div>
      <div className="mx-auto col-10 col-md-8 col-lg-6">
        <form className="edit-product-form" noValidate="">
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
                onChange={handleSelectChange}
                ref={categoryRef}
              >
                <option selected>Select Category</option>
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

            <div className="col-12">
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
                disabled={isDisable}
              >
                <option selected>Select Subcategory</option>
                {categories[categoryIndex].subcategories &&
                categories[categoryIndex].subcategories.length > 0 ? (
                  categories[categoryIndex].subcategories.map((subCategory) => {
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
              >
                <option selected>INR (Indian Rupee)</option>
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
                defaultValue={1}
                required=""
                min={1}
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
                defaultValue={5}
                required=""
                min={0}
              />
            </div>
          </div>

          <div className="modal-footer">
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
              type="button"
              className="btn btn-success"
              // onClick={}
            >
              Update
            </button>
          </div>
        </form>
      </div>

      {/* <div
className="col-12"
style={{ marginTop: "30px", textAlign: "end" }}
>
<select disabled={isDisable}>
  <option value="" selected>
    {product.product_status}
  </option>
  {product.product_status !== "published" && (
    <option value="published">Published</option>
  )}
  {product.product_status !== "unpublished" && (
    <option value="unpublished">Unpublished</option>
  )}
  {product.product_status !== "draft" && (
    <option value="draft">Draft</option>
  )}
  {product.product_status !== "submitted_for_review" && (
    <option value="submitted_for_review">
      Submitted for review
    </option>
  )}
  {product.product_status !== "review_rejected" && (
    <option value="review_rejected">Review Rejected</option>
  )}
  {product.product_status !== "trashed" && (
    <option value="trashed">Trashed</option>
  )}
</select>
<button
  style={{ backgroundColor: "#FFFF00" }}
  onClick={() => {
    setIsDisable(false);
  }}
>
  <FontAwesomeIcon
    icon={faPencil}
    fade
    style={{ color: "#0d0d0c" }}
  />
</button>

<div>
  <button
    type="button"
    className="btn btn-success "
    disabled={isDisable}
    onClick={() => {
      setIsDisable(true);
    }}
  >
    Save Changes
  </button>
</div>
</div> */}
    </>
  );
}

export default EditProductForm;
