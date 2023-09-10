import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IndoorGallery from "./IndoorGallery";
import RoomsGallery from "./RoomsGallery";
import DiningGallery from "./DiningGallery";
import OutdoorGallery from "./OutdoorGallery";

// const divStyle = {
//   textAlign: "center",
//   height: "150px",
//   backgroundImage: `url(${indoor})`,
//   backgroundSize: "cover",
// };

export default function ImageGallery() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false" sx={{ margin: "4% 0" }}>
        <Typography variant="h4" align="center" marginBottom={4}>
          Explore Gallery
        </Typography>
        <Box>
          <Grid container spacing={4}>
            <IndoorGallery />
            <RoomsGallery />
            <DiningGallery />
            <OutdoorGallery />
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
