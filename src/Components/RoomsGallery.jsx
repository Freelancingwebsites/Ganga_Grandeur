import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import room1 from "../assets/image-gallery/room-images/room1.jpg";
import room2 from "../assets/image-gallery/room-images/room2.jpg";
import room3 from "../assets/image-gallery/room-images/room3.jpg";
import room4 from "../assets/image-gallery/room-images/room4.jpg";
import room5 from "../assets/image-gallery/room-images/room5.jpg";
import room6 from "../assets/image-gallery/room-images/room6.jpg";
import room7 from "../assets/image-gallery/room-images/room7.jpg";
import room8 from "../assets/image-gallery/room-images/room8.jpg";
import room9 from "../assets/image-gallery/room-images/room9.jpg";
import room10 from "../assets/image-gallery/room-images/room10.jpg";
import room11 from "../assets/image-gallery/room-images/room11.jpg";
import room12 from "../assets/image-gallery/room-images/room12.jpg";
import room13 from "../assets/image-gallery/room-images/room13.jpg";

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

export default function RoomsGallery() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
      <div
        style={{
          textAlign: "center",
          height: "150px",
          backgroundImage: `url(${room7})`,
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
          Rooms
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
                    src={room1}
                    className="d-block w-100 h-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item h-100">
                  <img
                    src={room2}
                    className="d-block w-100 h-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item w-100 h-100">
                  <img
                    src={room3}
                    className="d-block w-100 h-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item w-100 h-100">
                  <img
                    src={room4}
                    className="d-block w-100 h-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item w-100 h-100">
                  <img
                    src={room5}
                    className="d-block w-100 h-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item w-100 h-100">
                  <img
                    src={room6}
                    className="d-block w-100 h-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item w-100 h-100">
                  <img
                    src={room7}
                    className="d-block w-100 h-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item w-100 h-100">
                  <img
                    src={room8}
                    className="d-block w-100 h-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item w-100 h-100">
                  <img
                    src={room9}
                    className="d-block w-100 h-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item w-100 h-100">
                  <img
                    src={room10}
                    className="d-block w-100 h-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item w-100 h-100">
                  <img
                    src={room11}
                    className="d-block w-100 h-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item w-100 h-100">
                  <img
                    src={room12}
                    className="d-block w-100 h-100 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="carousel-item w-100 h-100">
                  <img
                    src={room13}
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
