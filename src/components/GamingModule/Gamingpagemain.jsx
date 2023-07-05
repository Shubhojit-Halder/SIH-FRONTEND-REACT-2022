import React from "react";
import Grid from "@mui/material/Grid";
import Gameimg from "./static/Games.png";
import { GamingMainWrapper } from "./styles/GamingMain.styled";
import { motion } from "framer-motion";
import { Drop } from "./styles/variants";
import Svg from "./static/Svg";
import { useNavigate } from "react-router";

const Gamingpagemain = () => {
  const navigate = useNavigate();
  return (
    <>
      <GamingMainWrapper>
        <Grid container className="GridContainerGPM">
          <Grid item md={6} sm={12} xs={12} className="AllWrittenPartGPM">
            <motion.div
              animate={{ y: 5 }}
              transition={{ yoyo: "Infinity", duration: 0.8 }}
              style={{ marginLeft: "40%" }}
            >
              <motion.div
                className="btnGPM"
                variants={Drop}
                initial="initial"
                animate="animate"
                onClick={() => {
                  navigate("/gamingzone/allgames");
                }}
              >
                Play Now
              </motion.div>
            </motion.div>
            <motion.div
              style={{ marginLeft: "40%" }}
              animate={{ y: 6 }}
              transition={{ yoyo: "Infinity", duration: 0.9 }}
            >
              {" "}
              <motion.div className="dotsGPM"></motion.div>
            </motion.div>
            <motion.div
              style={{ marginLeft: "40%" }}
              animate={{ y: 7 }}
              transition={{ yoyo: "Infinity", duration: 1 }}
            >
              {" "}
              <div className="dotsGPM2"></div>
            </motion.div>
            <div className="headerGPM">
              <h3 className="welcomeGPM">Welcome to </h3>
              <p className="brandnameGPM"> Daakticket </p>
              <p className="gameWordGPM">Gaming</p>
            </div>
          </Grid>
          <Grid item md={6} sm={8} xs={12} className="photoGridGPM">
            <motion.img
              src={Gameimg}
              className="gameImg"
              alt=""
              animate={{ y: 6 }}
              transition={{ yoyo: Infinity, duration: 1 }}
            />
          </Grid>
          <Grid item xs={12} md={12} sm={12} className="svgWaveGPM">
            <Svg />
          </Grid>
        </Grid>
      </GamingMainWrapper>
    </>
  );
};

export default Gamingpagemain;
