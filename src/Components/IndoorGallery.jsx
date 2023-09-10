import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import indoor from "../assets/image-gallery/indoor.jpg";
import indoor1 from "../assets/image-gallery/indoor-images/indoor1.jpg";
import indoor2 from "../assets/image-gallery/indoor-images/indoor2.jpg";
import indoor3 from "../assets/image-gallery/indoor-images/indoor3.jpg";
import indoor4 from "../assets/image-gallery/indoor-images/indoor4.jpg";
import indoor5 from "../assets/image-gallery/indoor-images/indoor5.jpg";
import indoor6 from "../assets/image-gallery/indoor-images/indoor6.jpg";
import indoor7 from "../assets/image-gallery/indoor-images/indoor7.jpg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80%",
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  borderRadius: "0.5rem",
  boxShadow: 24,
  // p: 4,
};

export default function IndoorGallery() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
      <div
        style={{
          textAlign: "center",
          height: "150px",
          backgroundImage: `url(${indoor})`,
          backgroundSize: "cover",
          borderRadius: "0.5rem",
        }}
      >
        <Button
          onClick={handleOpen}
          size="large"
          variant="contained"
          sx={{ position: "relative", top: "50px" }}
        >
          Indoor
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div
              id="carouselExample"
              className="carousel slide carousel-fade h-100"
            >
              <div className="carousel-inner w-100 h-100">
                <div className="carousel-item active w-100 h-100">
                  <img
                    src={indoor1}
                    className="d-block w-100 h-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item h-100">
                  <img
                    src={indoor2}
                    className="d-block w-100 h-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item w-100 h-100">
                  <img
                    src={indoor3}
                    className="d-block w-100 h-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item w-100 h-100">
                  <img
                    src={indoor4}
                    className="d-block w-100 h-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item w-100 h-100">
                  <img
                    src={indoor5}
                    className="d-block w-100 h-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item w-100 h-100">
                  <img
                    src={indoor6}
                    className="d-block w-100 h-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item w-100 h-100">
                  <img
                    src={indoor7}
                    className="d-block w-100 h-100 rounded-3"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
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
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    </Grid>
  );
}
