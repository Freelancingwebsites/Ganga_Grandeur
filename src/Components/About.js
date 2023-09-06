import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";

function App() {
  return (
    <Container maxWidth="false" sx={{marginY:'2'}}>
    <Box sx={containerStyle}>
      <h1 style={headingStyle}> <b> ABOUT </b></h1>
      <p style={paragraphStyle}>
        Our Ganga Grandeur in Kanyakumari is an air-conditioned hall with a seating capacity of 1000 and a floating capacity of 1500.     
      </p>
      <p style={paragraphStyle}>
      The Dining capacity of Ganga Grandeur is 350.
      </p>
      <p style={paragraphStyle}>
      The Function Hall is on the Ground floor.
      </p>
      <p style={paragraphStyle}>
      A parking facility is available for 200 cars and 250 bikes.
      </p>
      <p style={paragraphStyle}>
      The Kalyana Mandapams provides air-conditioned rooms with a locker facility for the guests. 
      </p>
      <p style={paragraphStyle}>
      Both the Dining hall and Function hall are on the same floor which is an added advantage.
      </p>
      <p style={paragraphStyle}>
      You can contact us via WhatsApp for the best services.
      </p>
    </Box>
    </Container>
  );
}

const containerStyle = {
  background: 'linear-gradient(135deg, #6479e4, #8dfc46)', // Gradient background
  padding: '20px',
  minHeight: '85px', // Ensure full height of the viewport
  marginTop: '10px',
  marginBottom: '20px',
  borderRadius: '10px', // Add rounded corners
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '24px',
  marginBottom: '20px',
  color: 'black', // Text color
};

const paragraphStyle = {
  textAlign: 'left',
  fontSize: '18px',
  color: 'white', // Text color
};

export default App;
