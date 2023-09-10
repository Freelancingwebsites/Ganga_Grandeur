import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import MuiDateRangePicker from "./Components/MuiDateRangePicker";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import Venue from "./Components/Venue";
import Carousel from "./Components/Carousel";
import ImageGallery from "./Components/ImageGallery";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Carousel />
      <ImageGallery />
      <About />
      <MuiDateRangePicker />
      <FAQ />
      <Venue />
      <Footer />
    </React.Fragment>
  );
}

export default App;
