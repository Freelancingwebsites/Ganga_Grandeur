// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
// import MuiAccordion from "@mui/material/Accordion";
// import MuiAccordionSummary from "@mui/material/AccordionSummary";
// import MuiAccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";

// const Accordion = styled((props) => (
//   <MuiAccordion disableGutters elevation={1} square {...props} /> // Added elevation
// ))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   "&:not(:last-child)": {
//     borderBottom: 0,
//   },
//   "&:before": {
//     display: "none",
//   },
// }));

// const AccordionSummary = styled((props) => (
//   <MuiAccordionSummary
//     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
//     {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === "dark"
//       ? "rgba(255, 255, 255, .05)"
//       : "rgba(0, 0, 0, .03)",
//   flexDirection: "row-reverse",
//   "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
//     transform: "rotate(90deg)",
//   },
//   "& .MuiAccordionSummary-content": {
//     marginLeft: theme.spacing(1),
//   },
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderTop: "1px solid rgba(0, 0, 0, .125)",
// }));

// export default function CustomizedAccordions() {
//   const [expanded, setExpanded] = React.useState("panel1");

//   const handleChange = (panel) => (event, newExpanded) => {
//     setExpanded(newExpanded ? panel : false);
//   };

//   return (
//     <div style={{ textAlign: "center", background: "linear-gradient(135deg, #6479e4, #8dfc46)", paddingTop: "1px", paddingBottom: "20px" }}>
//       <h6 style={{ fontSize: "24px", fontWeight: "bold", color: "#333", marginBottom: "10px" }}>FAQ</h6>
//       <Accordion
//         expanded={expanded === "panel1"}
//         onChange={handleChange("panel1")}
//       >
//         <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
//           <Typography>Collapsible Group Item #1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
//             dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
//             lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion
//         expanded={expanded === "panel2"}
//         onChange={handleChange("panel2")}
//       >
//         <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
//           <Typography>Collapsible Group Item #2</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
//             dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
//             lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion
//         expanded={expanded === "panel3"}
//         onChange={handleChange("panel3")}
//       >
//         <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
//           <Typography>Collapsible Group Item #3</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
//             dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
//             lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }


import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"; // Import the Box component

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={1} square {...props} /> // Added elevation
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #6479e4, #8dfc46)", // Linear gradient background
        padding: '20px',
        minHeight: '85px', // Ensure full height of the viewport
        marginBottom: '20px',
        borderRadius: '10px', // Add rounded corners
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h6 style={{ fontSize: "24px", fontWeight: "bold", color: "#333", marginBottom: "10px" }}>FAQ</h6>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Collapsible Group Item #1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
              lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Collapsible Group Item #2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
              lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Collapsible Group Item #3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
              lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Box>
  );
}
