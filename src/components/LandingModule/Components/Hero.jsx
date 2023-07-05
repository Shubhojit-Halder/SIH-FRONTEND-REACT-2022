import { Grid } from "@mui/material";
import React from "react";
import logo from "../static/Dak ticket logo.png";
import Typed from "react-typed";
import { Stringsval } from "../static/Stringsval";
import RightImg from "../static/Post-cuate.png";
import "react-typed/dist/animatedCursor.css";
import {
  HeroWrapper,
  Bubblespan,
  Bubblespan2,
  Myh1,
  Bubblespan3,
} from "../styles/hero.styled";
import { headerVariant, fadeIn } from "../styles/variants";
import { motion, Variants } from "framer-motion";
import styled from "styled-components";
import { useNavigate } from "react-router";
const Hero = () => {
  const navigate = useNavigate();
  const Myh1 = styled.h1`
    color: #5858fc;
    font-size: 7rem;

    @media (max-width: 1080px) {
      font-size: 4rem;
    }
    @media (max-width: 650px) {
      font-size: 3.2rem;
    }
  `;
  return (
    <>
      <motion.div variants={fadeIn} initial="initial" animate="animate">
        <HeroWrapper>
          <Grid container>
            <Grid item md={12} sm={12} xs={12} marginTop="-20px"></Grid>
            <Grid
              item
              md={12}
              sm={12}
              xs={12}
              style={{
                marginTop: "30px",
                marginLeft: "20px",
              }}
            >
              <img src={logo} alt="" className="heroLogo" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} className="HeroMid">
              <div className="leftSide">
                <motion.div
                  animate={{ y: -6 }}
                  transition={{ yoyo: Infinity, duration: 1 }}
                >
                  <motion.div
                    variants={headerVariant}
                    initial="initial"
                    animate="animate"
                  >
                    <Bubblespan2 onClick={()=>{navigate("/auth/login")}} >
                      <p>Login</p>
                    </Bubblespan2>
                    <Bubblespan3></Bubblespan3>
                  </motion.div>
                </motion.div>
                <motion.div
                  animate={{ y: 10 }}
                  transition={{ yoyo: Infinity, duration: 1.5 }}
                >
                  <motion.div
                    variants={headerVariant}
                    initial="initial"
                    animate="animate"
                  >
                    <Bubblespan onClick={()=>{navigate("/auth/signup")}}>
                      <p>Get Started</p>
                    </Bubblespan>
                  </motion.div>
                </motion.div>
                <div className="leftTexts">
                  Welcome to
                  <Myh1 style={{ fontFamily: "El Messiri" }}>DaakTicket</Myh1>
                </div>
                <br />
                <div className="TypedStyledHero">
                  <Typed
                    strings={Stringsval}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                  ></Typed>
                </div>
                {/* <div className="buttonHero"></div> */}
              </div>
              <div className="rightSide">
                <motion.img
                  src={RightImg}
                  alt="SocialmediaImg"
                  className="rightSideImg"
                  animate={{ y: 10 }}
                  transition={{ duration: 2, yoyo: Infinity }}
                />
              </div>
            </Grid>
          </Grid>
        </HeroWrapper>
      </motion.div>
    </>
  );
};

export default Hero;
