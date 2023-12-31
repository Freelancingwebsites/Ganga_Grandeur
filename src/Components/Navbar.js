import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  // Facebook,
  // Instagram,
  // Twitter,
  WhatsApp,
  // Phone,
} from "@mui/icons-material";
// import LocalPhoneTwoToneIcon from "@mui/icons-material/LocalPhoneTwoTone";
import Link from "@mui/material/Link";
import MarkEmailUnreadTwoToneIcon from "@mui/icons-material/MarkEmailUnreadTwoTone";

const drawerWidth = 250;
const navItems = [
  { navItem: "Home", navLink: "#home" },
  { navItem: "Booking", navLink: "#booking" },
  { navItem: "Images", navLink: "#images" },
  { navItem: "Venue Info", navLink: "#venue-info" },
  { navItem: "Faq", navLink: "#faq" },
  { navItem: "Contact", navLink: "#footer" },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "#2196F3", // Attractive blue color
        color: "white",
        paddingTop: "20px", // Add margin to the top
      }}
    >
      <Typography variant="h4" sx={{ my: 2 }}>
        <b> GANGA GRANDEUR </b>
      </Typography>
      <Divider sx={{ backgroundColor: "white" }} />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", color: "white" }}
              href={item.navLink}
            >
              <ListItemText primary={item.navItem} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Link
        href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER"
        color="inherit"
      >
        <WhatsApp />
      </Link>
      <Link
        href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER"
        color="inherit"
      >
        <MarkEmailUnreadTwoToneIcon />
      </Link>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{ display: "flex", marginTop: "10px", marginBottom: "20px" }}
        id="home"
      >
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                color: "white",
              }}
            >
              <b> GANGA GRANDEUR </b>
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  sx={{
                    color: "white",
                    margin: "0 10px", // Add margin between buttons
                  }}
                  href={item.navLink}
                >
                  {item.navItem}
                </Button>
              ))}
              <Link
                href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER"
                color="inherit"
              >
                <WhatsApp />
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER"
                color="inherit"
              >
                <MarkEmailUnreadTwoToneIcon />
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "#2196F3", // Attractive blue color
                color: "white",
                paddingTop: "20px", // Add margin to the top
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </React.Fragment>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
