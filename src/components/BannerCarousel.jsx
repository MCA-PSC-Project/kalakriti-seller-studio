import banner1 from "../assets/banner1.jpg";
 import banner2 from "../assets/banner2.jpg";
 import banner3 from "../assets/banner3.jpg";

function BannerCarousel(){
  return(
    <div id="myCarouselExampleIndicators" className="carousel slide" >
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
         <button type="button" style={{backgroundColor:"black"}} class="btn btn-primary">Sign up Today</button>
        <h5  style={{fontSize:"40px" , WebkitTextStroke:"1px white", WebkitTextFillColor:"black" }}>First slide label</h5>
        <p style={{fontSize:"40px" , WebkitTextStroke:"1px white", WebkitTextFillColor:"black" }}><b>
          Nulla vitae elit libero, a pharetra augue mollis interdum.</b>
        </p>
      </div>
      </div>
      <div className="carousel-item active">
        <img
            src={banner2}
          className="d-block w-100"
          alt="..."
          style={{ width: "100%", height: "500px" }}
        />
         <div class="carousel-caption d-none d-md-block">
        <h5>second slide label</h5>
        <p>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
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
        <h5>third slide label</h5>
        <p>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
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