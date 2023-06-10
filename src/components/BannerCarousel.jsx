import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";

function BannerCarousel() {
  return (
    <div id="myCarouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-label="Slide 1"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className=""
        ></button>
        <button
          type="button"
          data-bs-target="#myCarouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className=""
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={banner1}
            className="d-block w-100"
            alt="..."
            style={{ width: "100%", height: "500px" }}
          />
          <div class="carousel-caption d-none d-md-block">
            <button
              type="button"
              style={{
                fontFamily: "Impact, fantasy",
                fontSize: "20px",
                backgroundColor: "black",
              }}
              class="btn btn-primary"
            >
              Sign Up Today
            </button>
            <h5
              style={{
                fontFamily: "Stencil Std, fantasy",
                fontSize: "40px",
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "white",
              }}
            >
              you are just one click away!!
            </h5>
            <p
              style={{
                fontFamily: "Stencil Std, fantasy",
                fontSize: "40px",
                WebkitTextStroke: "1px white",
                WebkitTextFillColor: "black",
              }}
            >
              Grow your bussiness with us &nbsp;
              <FontAwesomeIcon
                icon={faArrowUpRightDots}
                size="2xs"
                beat
                style={{ color: "#121212" }}
              />
            </p>
          </div>
        </div>
        <div className="carousel-item ">
          <img
            src={banner2}
            className="d-block w-100"
            alt="..."
            style={{ width: "100%", height: "500px" }}
          />
          <div class="carousel-caption d-none d-md-block">
            <h5
              style={{
                fontFamily: "Stencil Std, fantasy",
                fontSize: "40px",
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "white",
              }}
            >
              Touching lives with business!
            </h5>
            <p
              style={{
                fontFamily: "Stencil Std, fantasy",
                fontSize: "40px",
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "orange",
              }}
            >
              #AasaanHaiBadhna
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={banner3}
            className="d-block w-100"
            alt="..."
            style={{ width: "100%", height: "500px" }}
          />
          <div class="carousel-caption d-none d-md-block">
            <h5
              style={{
                fontFamily: "Stencil Std, fantasy",
                fontSize: "40px",
                WebkitTextStroke: "1px white",
                WebkitTextFillColor: "black",
              }}
            >
              Supporting Local Business
            </h5>
            <p
              style={{
                fontFamily: "Stencil Std, fantasy",
                fontSize: "40px",
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "yellow",
              }}
            >
              Shop Local. We're In This Together
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default BannerCarousel;
