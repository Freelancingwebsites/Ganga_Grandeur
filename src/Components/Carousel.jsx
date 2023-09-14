import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import outlook1 from "../assets/images/outlook1.jpg";
import outlook2 from "../assets/images/outlook2.jpg";
import inner1 from "../assets/images/inner1.jpg";
import inner2 from "../assets/images/inner2.jpg";

function Carousel() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="false"
        sx={{ marginTop: "70px", marginBottom: "20px" }}
      >
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner rounded-3">
            <div className="carousel-item active ">
              <img src={outlook1} className="d-block w-100 " alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>A Hall of Love and Legacy</h5>
                <p>
                Where love and memories intertwine in perfect harmony.
                </p>
              </div>
            </div>
            <div className="carousel-item ">
              <img src={outlook2} className="d-block w-100 " alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Celebrate Love, Create Memories</h5>
                <p>
                Celebrate your love and let us help you create unforgettable memories.
                </p>
              </div>
            </div>
            <div className="carousel-item ">
              <img src={inner1} className="d-block w-100 " alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>The Ultimate Destination for Happily Ever Afters</h5>
                <p>
                Discover the ultimate destination where cherished memories that last a lifetime.
                </p>
              </div>
            </div>
            <div className="carousel-item ">
              <img src={inner2} className="d-block w-100 " alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>A Hall of Love: Where Memories are Made</h5>
                <p>
                A Hall of Love, where every step down the aisle is a memory in the making.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Carousel;
