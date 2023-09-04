import React from 'react';
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import  MuiDateRangePicker  from './Components/MuiDateRangePicker';
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import Venue from "./Components/Venue";


function App() {
	return (
		<React.Fragment>
			<Navbar/>
			<About/>
      <MuiDateRangePicker/>
	  <FAQ/>
	  <Venue/>
	  <Footer/>
		</React.Fragment>
	);
}

export default App;