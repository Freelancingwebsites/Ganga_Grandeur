import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CarIcon from '@mui/icons-material/DirectionsCar';
import Grid from '@mui/material/Grid';
import HotelIcon from '@mui/icons-material/Hotel';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CssBaseline from "@mui/material/CssBaseline";
import StarsIcon from '@mui/icons-material/Stars';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Container from "@mui/material/Container";

const CarCard = () => {
  const cardContainerStyle = {
    background: 'linear-gradient(135deg, #FFB6C1, #87CEEB)', // Gradient background
    borderRadius: '10px', // Rounded corners for the entire card
    padding: '20px', // Padding for spacing
    color: 'white', // Text color
    marginBottom: '20px',
    marginTop: '10px',
  };

  const sectionStyle = {
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#F0F0F0', // Light gray background
  };

  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="false" sx={{marginY:'2'}}>
    <div style={cardContainerStyle}> {/* Container with the background */}
      <Card>
        <CardContent>
          <Typography variant="h5" align="center" style={{ fontWeight: 'bold' }}>
            Venue Info
          </Typography>
        </CardContent>
        <CardContent>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ ...sectionStyle, backgroundColor: '#FFB6C1' }}>
                <CarIcon style={{ fontSize: 30, color: 'white' }} />
                <Typography variant="h8" style={{ marginTop: '10px', color: 'white' }}>Parking</Typography>
              </div>
              <div style={sectionStyle}>
                <Typography variant="body2" color="textSecondary"><p><b>• 250 Bike parking</b></p>
                  <p><b>• 200 Car parking</b></p></Typography>
              </div>
            </Grid>
           
            <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ ...sectionStyle, backgroundColor: '#87CEEB' }}>
               <StarsIcon style={{ fontSize: 30, color: 'white' }} /> {/* Replace with StarsIcon */}
               <Typography variant="h8" style={{ marginTop: '10px', color: 'white' }}>Decorator</Typography> {/* Update text to "Decorator" */}
             </div>
             <div style={sectionStyle}>
               <Typography variant="body2" color="textSecondary"><p><b>Outside decorators</b></p>
               <p><b>not allowed</b></p></Typography>
             </div>
           </Grid>
           <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             <div style={{ ...sectionStyle, backgroundColor: '#98FB98' }}>
               <HotelIcon style={{ fontSize: 30, color: 'white' }} />
               <Typography variant="h8" style={{ marginTop: '10px', color: 'white' }}>Room</Typography>
             </div>
             <div style={sectionStyle}>
               <Typography variant="body2" color="textSecondary"><p><b>• 2 Guest Rooms</b></p>
               <p><b>• 2 AC Rooms</b></p></Typography>
             </div>
           </Grid>
           <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             <div style={{ ...sectionStyle, backgroundColor: '#FFD700' }}>
               <FastfoodIcon style={{ fontSize: 30, color: 'white' }} />
               <Typography variant="h8" style={{ marginTop: '10px', color: 'white' }}>Food</Typography>
          </div>
             <div style={sectionStyle}>
               <Typography variant="body2" color="textSecondary"><p><b>Outside foods was</b></p>
               <p><b> not allowed</b></p></Typography>
             </div>
           </Grid>
           <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
           <div style={{ ...sectionStyle, backgroundColor: '#FFB6C1' }}>
             <LocalDiningIcon style={{ fontSize: 30, color: 'white' }} /> {/* Use LocalDiningIcon for cuisines */}
             <Typography variant="h8" style={{ marginTop: '10px', color: 'white' }}>Cuisines</Typography>
           </div>
           <div style={sectionStyle}>
             <Typography variant="body2" color="textSecondary"><p><b>• Vegeterian  </b></p>
               <p><b>• Non Vegeterian</b></p></Typography>
           </div>
         </Grid>
         <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
         <div style={{ ...sectionStyle, backgroundColor: '#87CEEB' }}>
           <AcUnitIcon style={{ fontSize: 30, color: 'white' }} /> {/* Use the AC icon */}
           <Typography variant="h8" style={{ marginTop: '10px', color: 'white' }}>Air Condition</Typography>
         </div>
         <div style={sectionStyle}>
           <Typography variant="body2" color="textSecondary"><p><b>Mahal was fully Air </b></p>
               <p><b>conditioned</b></p></Typography>
         </div>
       </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
    </Container>
        </React.Fragment>
  );
};

export default CarCard;
