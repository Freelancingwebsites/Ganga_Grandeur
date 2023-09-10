import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[400],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            {/* Updated section with the embedded map */}
            <iframe
              title="Kanyakumari Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d987.2602539838997!2d77.45027964283852!3d8.19862284376179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f14abfffffff%3A0xf7a9d562ab2695a6!2sGanga%20Grandeur!5e0!3m2!1sen!2sus!4v1693677425209!5m2!1sen!2sus"
              width="200"
              height="350"
              style={{
                border: "10px solid grey", // Add thick grey border
                borderRadius: "20px", // Apply a radius of 30px
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              5FX2+F8X, Therakalputhoor,
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Nagercoil,
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tamil Nadu 629001.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone Number:8907654676
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
