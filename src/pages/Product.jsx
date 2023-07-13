import { Link, useParams } from "react-router-dom";
import MediaCarousel from "../components/MediaCarousel";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faStar,
  faTruckFast,
  faMinus,
  faPlus,
  faHeart as faHeartFilled,
  faShare,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Rating from "../components/Rating";
import Review from "../components/Review";
import { useEffect, useState } from "react";
import "./Product.css";
import api from "../utils/api";
import AuthConsumer from "../hooks/useAuth";
import Toast from "../components/Toast";

function Product() {
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

  const { productId } = useParams();
  const { authed, logout } = AuthConsumer();
  const isLoggedIn = authed ? true : false;
  const [product, setProduct] = useState({});
  const [selectedProductItem, setSelectedProductItem] = useState(null);
  const [productReviewsList, setProductReviewsList] = useState([]);
  const [quantity, setQuantity] = useState(null);
  const [isProductReviewsShown, setIsProductReviewsShown] = useState(false);
  const [mediaSrcList, setMediaSrcList] = useState([]);
  // const [isItemInWishlist, setIsItemInWishlist] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: "smooth",
    // });
    api
      .get(`/products/${productId}`)
      .then((response) => {
        setProduct(response.data === null ? {} : response.data);
        console.log(response.data);
        console.log(productId);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    setSelectedProductItem(
      product?.product_items?.find((item) => {
        item.id === product?.base_product_item_id;
        return item;
      })
    );
    setQuantity(product?.min_order_quantity);
  }, [product]);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   // window.scrollTo({
  //   //   top: 0,
  //   //   left: 0,
  //   //   behavior: "smooth",
  //   // });
  //   if (selectedProductItem) {
  //     console.log("selected pi=", selectedProductItem);
  //     const localMediaSrcList = [];
  //     const media_list = selectedProductItem?.media_list;
  //     if (media_list) {
  //       for (const media of media_list) {
  //         localMediaSrcList.push(media.path);
  //       }
  //     }
  //     setMediaSrcList(localMediaSrcList);
  //   }

  //   api
  //     .get(`/check-wishlists/${selectedProductItem?.id}`)
  //     .then((response) => {
  //       setIsItemInWishlist(response.data === null ? false : response.data);
  //       console.log(response.data);
  //     })
  //     .catch((err) => {
  //       setIsItemInWishlist(false);
  //       console.error(err);
  //     });
  // }, [selectedProductItem]);

  useEffect(() => {
    api
      .get(`/products/${productId}/product-reviews`)
      .then((response) => {
        setProductReviewsList(response.data === null ? [] : response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [isProductReviewsShown]);

  // const handleWishlistClick = () => {
  //   if (!isItemInWishlist) {
  //     api
  //       .post(`/wishlists`, { product_item_id: selectedProductItem?.id })
  //       .then((response) => {
  //         console.log(response);
  //         if (response.data) {
  //           setIsItemInWishlist(true);
  //           console.log("item added to wishlist successfully");
  //           setShowToast(true);
  //           setToastProperties({
  //             toastType: "success",
  //             toastMessage: "item added to wishlist successfully",
  //           });
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         setShowToast(true);
  //         setToastProperties({
  //           toastType: "error",
  //           toastMessage: "some error occured in adding item to wishlist",
  //         });
  //       });
  //   } else if (isItemInWishlist) {
  //     api
  //       .delete(`/wishlists/${selectedProductItem?.id}`)
  //       .then((response) => {
  //         console.log(response);
  //         if (response.data) {
  //           console.log("item removed from wishlist successfully");
  //           setIsItemInWishlist(false);
  //           setShowToast(true);
  //           setToastProperties({
  //             toastType: "success",
  //             toastMessage: "item removed from wishlist successfully",
  //           });
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         setShowToast(true);
  //         setToastProperties({
  //           toastType: "error",
  //           toastMessage: "some error occured in removing item from wishlist",
  //         });
  //       });
  //   }
  // };

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
      {/* content */}
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <MediaCarousel mediaSrcList={mediaSrcList} />
              <div className="d-flex justify-content-center mb-3"></div>
              {/* thumbs-wrap.// */}
              {/* gallery-wrap .end// */}
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <div style={{ textAlign: "end" }}>
                  <EditProductModal />
                  <button
                    type="button"
                    className="btn btn-warning btn-lg"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalCenteredScrollable"
                    // onClick={onAddToCart}
                  >
                    Edit{" "}
                    <FontAwesomeIcon
                      icon={faPencil}
                      fade
                      style={{ color: "#0d0d0c" }}
                    />
                  </button>
                </div>
                <h4 className="title text-dark">{product?.product_name}</h4>
                <h6 className="title text-dark">
                  sold by &nbsp;
                  <b className="text text-info">
                    <Link to="" title="view seller details">
                      {product?.seller?.seller_name}
                    </Link>
                  </b>
                </h6>
                <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    <span className="ms-1">
                      {parseFloat(product?.average_rating).toFixed(1)}
                      <FontAwesomeIcon
                        icon={faStar}
                        size="xl"
                        style={{ color: "#ffff00" }}
                      />
                    </span>
                    |<span>&nbsp;{product?.rating_count} Ratings</span>
                  </div>
                  {/* <span className="text-muted">
                    <i className="fas fa-shopping-basket fa-sm mx-1" />
                    154 orders
                  </span> */}
                  {/* <span className="text-success ms-2">In stock</span> */}
                </div>
                <div className="mb-3">
                  {/* <button
                    type="button"
                    className="btn border px-2 me-2"
                    title={
                      isItemInWishlist
                        ? "Remove From wishlist"
                        : "Add To wishlist"
                    }
                    onClick={() => handleWishlistClick()}
                  >
                    {isItemInWishlist ? (
                      <FontAwesomeIcon
                        icon={faHeartFilled}
                        size="xl"
                        style={{ color: "#ff0000" }}
                        // beatFade
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faHeart}
                        size="xl"
                        style={{ color: "#ff0000" }}
                        // beatFade
                      />
                    )}
                  </button> */}

                  <button
                    type="button"
                    className="btn border px-2 me-2"
                    title="share"
                    // onClick=""
                  >
                    <FontAwesomeIcon
                      icon={faShare}
                      size="xl"
                      style={{ color: "#20511f" }}
                    />
                  </button>
                </div>
                <div className="text-success mb-1">In stock</div>
                <div className="mb-3">
                  <span>
                    <del>
                      &#8377;
                      {selectedProductItem?.original_price}
                    </del>
                  </span>
                  &nbsp;
                  <span>
                    <b>
                      &#8377;
                      {selectedProductItem?.offer_price}
                    </b>
                  </span>
                </div>
                <hr />

                <div className="row mb-4">
                  <div className="col-md-4 col-6">
                    {product?.product_items?.map((product_item) => {
                      return (
                        <button
                          type="button"
                          className="btn btn-outline-secondary shadow-0 me-2"
                          key={product_item.id}
                          disabled={
                            product_item === selectedProductItem
                              ? "true"
                              : undefined
                          }
                          onClick={() => setSelectedProductItem(product_item)}
                        >
                          {product_item.product_variant_name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="row mb-4">
                  {/* col.// */}
                  <div className="col-md-4 col-6 mb-3">
                    <label className="mb-2 d-block">Quantity</label>
                    <div className="input-group mb-3" style={{ width: 170 }}>
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-decrement-quantity"
                        data-mdb-ripple-color="dark"
                        onClick={(event) =>
                          quantity > product.min_order_quantity
                            ? setQuantity(quantity - 1)
                            : null
                        }
                      >
                        <FontAwesomeIcon
                          icon={faMinus}
                          size="lg"
                          style={{ color: "#000000" }}
                        />
                      </button>
                      <input
                        type="text"
                        className="form-control text-center border border-secondary"
                        placeholder={quantity}
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button-increment-quantity"
                        id="button-addon2"
                        data-mdb-ripple-color="dark"
                        onClick={(event) =>
                          quantity < product.max_order_quantity
                            ? setQuantity(quantity + 1)
                            : null
                        }
                      >
                        <FontAwesomeIcon
                          icon={faPlus}
                          size="lg"
                          style={{ color: "#000000" }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  {isLoggedIn ? (
                    <>
                      <span className="text text-success">Delivery: </span>
                      <span>between 7-10 June</span>
                    </>
                  ) : (
                    <>
                      <form>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control-sm"
                            placeholder="Enter Pincode here"
                          />
                          <button className="btn btn-info input-group-text shadow-0">
                            Check Delivery
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
      {/* content */}
      <section className="bg-light border-top py-4">
        <div className="container">
          <div className="row gx-4">
            <div className="col-lg-8 mb-4">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-description-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-description"
                    type="button"
                    role="tab"
                    aria-controls="pills-description"
                    aria-selected="true"
                  >
                    Description
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-reviews-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-reviews"
                    type="button"
                    role="tab"
                    aria-controls="pills-reviews"
                    aria-selected="false"
                    onClick={() => setIsProductReviewsShown(true)}
                  >
                    Product Reviews
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                {/* for Description */}
                <div
                  className="tab-pane fade show active"
                  id="pills-description"
                  role="tabpanel"
                  aria-labelledby="pills-description-tab"
                >
                  {product?.product_description}
                  {/* lorem*10 */}
                </div>
                {/* for product reviews */}
                <div
                  className="tab-pane fade"
                  id="pills-reviews"
                  role="tabpanel"
                  aria-labelledby="pills-reviews-tab"
                >
                  {productReviewsList.map((productReview) => {
                    return (
                      <Review
                        key={productReview.id}
                        profilePicSrc={productReview.dp.path}
                        userName={
                          productReview.first_name +
                          " " +
                          productReview.last_name
                        }
                        rating={productReview.rating}
                        review={productReview.review}
                        added_at={productReview.added_at}
                        updated_at={productReview.updated_at}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            {/* for similar items */}
            <div className="col-lg-4">
              <div className="px-0 border rounded-2 shadow-0">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Similar items</h5>
                    <div className="d-flex mb-3">
                      <a href="#" className="me-3">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp"
                          style={{ minWidth: 96, height: 96 }}
                          className="img-md img-thumbnail"
                        />
                      </a>
                      <div className="info">
                        <a href="#" className="nav-link mb-1">
                          Rucksack Backpack Large <br />
                          Line Mounts
                        </a>
                        <strong className="text-dark"> $38.90</strong>
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <a href="#" className="me-3">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp"
                          style={{ minWidth: 96, height: 96 }}
                          className="img-md img-thumbnail"
                        />
                      </a>
                      <div className="info">
                        <a href="#" className="nav-link mb-1">
                          Summer New Men's Denim <br />
                          Jeans Shorts
                        </a>
                        <strong className="text-dark"> $29.50</strong>
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <a href="#" className="me-3">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp"
                          style={{ minWidth: 96, height: 96 }}
                          className="img-md img-thumbnail"
                        />
                      </a>
                      <div className="info">
                        <a href="#" className="nav-link mb-1">
                          {" "}
                          T-shirts with multiple colors, for men and lady{" "}
                        </a>
                        <strong className="text-dark"> $120.00</strong>
                      </div>
                    </div>
                    <div className="d-flex">
                      <a href="#" className="me-3">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp"
                          style={{ minWidth: 96, height: 96 }}
                          className="img-md img-thumbnail"
                        />
                      </a>
                      <div className="info">
                        <a href="#" className="nav-link mb-1">
                          {" "}
                          Blazer Suit Dress Jacket for Men, Blue color{" "}
                        </a>
                        <strong className="text-dark"> $339.90</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

function EditProductModal() {
  return (
    <>
      {/* Vertically centered scrollable modal */}
      <div
        className="modal fade"
        id="exampleModalCenteredScrollable"
        tabIndex={-1}
        aria-labelledby="exampleModalCenteredScrollableTitle"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="exampleModalCenteredScrollableTitle"
              >
                Update Product
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <ProductUpdateForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ProductUpdateForm() {
  return (
    <form className="needs-validation" noValidate="">
      <div className="row g-3">
        <div className="col-12">
          <label htmlFor="productName" className="form-label">
            Product name
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            // placeholder=" name"
            defaultValue=""
            required=""
          />
        </div>

        <div className="col-12">
          <label htmlFor="productDescription" className="form-label">
            Product Descritption
          </label>
          <textarea
            className="form-control"
            id="productDescription"
            style={{height:200}}
            defaultValue=""
            required=""
          />
        </div>

        <div className="col-12">
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
                      
                    />
                  </div>
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
                     
                    />
                  </div>
                  </div>

        </div>
       


      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-danger"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" className="btn btn-success">
          Save changes
        </button>
      </div>
    </form>
  );
}

export default Product;
