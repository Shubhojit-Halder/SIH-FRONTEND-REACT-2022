import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "./static/logo_daakticket.png";
import Right from "./Signup/Right";
import SignupWrapper from "./styles/Signup.styled";
import background from "./static/background.png";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { SetAlert } from "./slices/ErrorMessages";
import SnackbarDisp from "./SnackbarDisp";
const Signup = () => {
  return (
    <>
      <SignupWrapper logo={logo} back={background}>
        <SnackbarDisp />
        <div className="background"></div>
        <div className="main">
          <motion.div
            className="signupmain"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="leftsection">
              <motion.div
                className="logo"
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                transition={{ duration: 0.5 }}
              ></motion.div>
              <motion.span
                className="welcome-text"
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                transition={{ duration: 0.5 }}
              >
                Welcome to a new world !!!
              </motion.span>
              <div className="form">
                <Right />
              </div>
            </div>
            <div className="rightsection">
              <div className="right-text">
                <h1>Discover a new world with us.</h1>
                <p>
                  {`We're here to give you a better social media experience where you
						can learn and grow without losing a single bit of fun. ;-)`}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </SignupWrapper>
    </>
  );
};

export default Signup;
