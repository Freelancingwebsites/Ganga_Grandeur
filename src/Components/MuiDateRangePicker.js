import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import CssBaseline from "@mui/material/CssBaseline";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "20px",
    marginTop: "10px",
    alignItems: "center",
    paddingBottom: "25px",
  },
  calendar: {
    flex: 1,
    marginRight: "10px",
    color: "black",
  },
  submitButton: {
    width: "95px",
    height: "59px",
    background: "linear-gradient(135deg, #FFD700, #FF6347)",
  },
  bookingText: {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    padding: "30px",
  },
  frame: {
    background: "linear-gradient(135deg, #e46bee, #61ff6b)", // Linear gradient background
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
  },
}));

export default function BasicDateRangePicker() {
  const classes = useStyles();

  const handleSubmit = () => {
    // Add your submit logic here
    console.log("Form submitted!");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false" sx={{ marginY: "2" }} id="booking">
        <div className={classes.frame} style={{ padding: "0 20px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className={classes.bookingText}>BOOKING</div>
            <div className={classes.container}>
              <div className={classes.calendar}>
                <DemoContainer components={["DateRangePicker"]}>
                  <DateRangePicker
                    localeText={{ start: "Check-in", end: "Check-out" }}
                  />
                </DemoContainer>
              </div>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                className={classes.submitButton}
              >
                <b>Get Booked</b>
              </Button>
            </div>
          </LocalizationProvider>
        </div>
      </Container>
    </React.Fragment>
  );
}
