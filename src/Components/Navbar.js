// // import * as React from 'react';
// // import PropTypes from 'prop-types';
// // import AppBar from '@mui/material/AppBar';
// // import Box from '@mui/material/Box';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import Divider from '@mui/material/Divider';
// // import Drawer from '@mui/material/Drawer';
// // import IconButton from '@mui/material/IconButton';
// // import List from '@mui/material/List';
// // import ListItem from '@mui/material/ListItem';
// // import ListItemButton from '@mui/material/ListItemButton';
// // import ListItemText from '@mui/material/ListItemText';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import Toolbar from '@mui/material/Toolbar';
// // import Typography from '@mui/material/Typography';
// // import Button from '@mui/material/Button';
// // import { Facebook, Instagram, Twitter, WhatsApp , Phone} from "@mui/icons-material";
// // import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
// // import Link from '@mui/material/Link'; // Import the Link component
// // import MarkEmailUnreadTwoToneIcon from '@mui/icons-material/MarkEmailUnreadTwoTone';

// // const drawerWidth = 280;
// // const navItems = ['Home', 'About', 'Images', 'Venue Info', 'FAQ', 'Contact'];

// // function DrawerAppBar(props) {
// //   const { window } = props;
// //   const [mobileOpen, setMobileOpen] = React.useState(false);

// //   const handleDrawerToggle = () => {
// //     setMobileOpen((prevState) => !prevState);
// //   };

// //   const drawer = (
// //     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
// //       <Typography variant="h5" sx={{ my: 2 , color:'orange'}}>
// //       <b style={{ background: "linear-gradient(135deg, #0000FF, #FFFFFF)", WebkitBackgroundClip: "text", color: "transparent" }}> GANGA GRANDEUR </b>
// //       </Typography>
// //       <Divider />
// //       <List>
// //         {navItems.map((item) => (
// //           <ListItem key={item} disablePadding>
// //             <ListItemButton sx={{ textAlign: 'center', colour: 'white'  }}>
// //               <ListItemText primary={item} sx={{ color:'white'}}/>
// //             </ListItemButton>
// //           </ListItem>
// //         ))}
// //       </List>
// //       {/* Add Facebook link here */}
// //       <Link href="https://www.facebook.com/" color="inherit">
// //         <Facebook />
// //       </Link>
// //       <Link href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER" color="inherit">
// //       <LocalPhoneTwoToneIcon />
// //     </Link>
// //     </Box>
// //   );

// //   const container = window !== undefined ? () => window().document.body : undefined;

// //   return (
// //     <Box sx={{ display: 'flex' }}>
// //       <CssBaseline />
// //       <AppBar component="nav">
// //         <Toolbar>
// //           <IconButton
// //             color="inherit"
// //             aria-label="open drawer"
// //             edge="start"
// //             onClick={handleDrawerToggle}
// //             sx={{ mr: 2, display: { sm: 'none' } }}
// //           >
// //             <MenuIcon />
// //           </IconButton>
// //           <Typography
// //             variant="h5"
// //             component="div"
// //             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
// //           >
// //             <b> GANGA GRANDEUR </b>
// //           </Typography>
        
// //           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
// //             {navItems.map((item) => (
// //               <Button key={item} sx={{ color: '#fff' }}>
// //                 {item}
// //               </Button>
// //             ))}
// //               {/* WhatsApp Link */}
// //           <Link href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER" color="inherit">
// //           <WhatsApp />
// //         </Link>
// //         <Link href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER" color="inherit">
// //         <MarkEmailUnreadTwoToneIcon />
// //       </Link>
// //           </Box>
// //         </Toolbar>
// //       </AppBar>
// //       <nav>
// //         <Drawer
// //           container={container}
// //           variant="temporary"
// //           open={mobileOpen}
// //           onClose={handleDrawerToggle}
// //           ModalProps={{
// //             keepMounted: true, // Better open performance on mobile.
// //           }}
// //           sx={{
// //             display: { xs: 'block', sm: 'none' },
// //             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,  backgroundColor: '#fff', },
// //           }}
// //         >
// //           {drawer}
// //         </Drawer>
// //       </nav>
// //       <Box component="main" sx={{ p: 3 }}>
// //         <Toolbar />
// //         <Typography>

// //         </Typography>
// //       </Box>
// //     </Box>
// //   );
// // }

// // DrawerAppBar.propTypes = {
// //   /**
// //    * Injected by the documentation to work in an iframe.
// //    * You won't need it on your project.
// //    */
// //   window: PropTypes.func,
// // };

// // export default DrawerAppBar;


// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { Facebook, Instagram, Twitter, WhatsApp , Phone } from "@mui/icons-material";
// import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
// import Link from '@mui/material/Link'; // Import the Link component
// import MarkEmailUnreadTwoToneIcon from '@mui/icons-material/MarkEmailUnreadTwoTone';

// const drawerWidth = 280;
// const navItems = ['Home', 'About', 'Images', 'Venue Info', 'FAQ', 'Contact'];

// function DrawerAppBar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h5" sx={{ my: 2, color: 'orange' }}>
//         <b style={{ background: "linear-gradient(135deg, #0000FF, #FFFFFF)", WebkitBackgroundClip: "text", color: "transparent" }}> GANGA GRANDEUR </b>
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center', color: 'white' }}>
//               <ListItemText primary={item} sx={{ color: 'white' }} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       {/* Add Facebook link here */}
//       <Link href="https://www.facebook.com/" color="inherit">
//         <Facebook />
//       </Link>
//       <Link href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER" color="inherit">
//         <LocalPhoneTwoToneIcon />
//       </Link>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h5"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
//           >
//             <b style={{ background: "linear-gradient(135deg, #0000FF, #FFFFFF)", WebkitBackgroundClip: "text", color: "transparent" }}> GANGA GRANDEUR </b>
//           </Typography>

//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//               <Button key={item} sx={{ color: '#fff' }}>
//                 {item}
//               </Button>
//             ))}
//             {/* WhatsApp Link */}
//             <Link href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER" color="inherit">
//               <WhatsApp />
//             </Link>
//             <Link href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER" color="inherit">
//               <MarkEmailUnreadTwoToneIcon />
//             </Link>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#fff', },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//       <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
//         <Typography>

//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default DrawerAppBar;

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Facebook, Instagram, Twitter, WhatsApp, Phone } from "@mui/icons-material";
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import Link from '@mui/material/Link'; // Import the Link component
import MarkEmailUnreadTwoToneIcon from '@mui/icons-material/MarkEmailUnreadTwoTone';

const drawerWidth = 280;
const navItems = ['Home', 'About', 'Images', 'Venue Info', 'FAQ', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color: '#fff' }}>
      <Typography variant="h5" sx={{ my: 2 }}>
        <b style={{ background: "linear-gradient(135deg, #0000FF, #FFFFFF)", WebkitBackgroundClip: "text", color: "transparent" }}> GANGA GRANDEUR </b>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color: 'white' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* Add Facebook link here */}
      <Link href="https://www.facebook.com/" color="inherit">
        <Facebook />
      </Link>
      <Link href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER" color="inherit">
        <LocalPhoneTwoToneIcon />
      </Link>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'white' }}
          >
            <b> GANGA GRANDEUR </b>
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
            {/* WhatsApp Link */}
            <Link href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER" color="inherit">
              <WhatsApp />
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER" color="inherit">
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
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#fff', },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>

        </Typography>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;

