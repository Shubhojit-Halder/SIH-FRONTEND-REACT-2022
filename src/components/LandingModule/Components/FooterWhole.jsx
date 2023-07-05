import { Grid } from "@mui/material";
import React from "react";
import FooterclgComp from "./FooterclgComp";
import FooterNameComp from "./FooterNameComp";
import FooterTop from "./FooterTop";
import styled from "styled-components";
import { motion } from "framer-motion";
const FooterWhole = () => {
  const WrapperFW = styled.div`
    .midAllFCC {
      display: grid;
      grid-template-columns: 2fr 3fr;
    }
    @media (max-width: 600px) {
      .midAllFCC {
        grid-template-columns: 0fr 1fr;
      }
      .svgGRIDFW {
        margin-top: 30px;
      }
    }
  `;
  return (
    <>
      <WrapperFW>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <FooterTop />
          </Grid>
          <Grid item xs={12} sm={12} md={12} sx={{ marginBottom: "-50px" }}>
            <div className="midAllFCC">
              <FooterclgComp />
              <FooterNameComp />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} className="svgGRIDFW">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <motion.path
                animate={{ y: 8 }}
                transition={{ duration: 1.5, yoyo: Infinity }}
                  //   fill="#ff3131"
                  fill="#5858FC"
                  fill-opacity="0.9"
                  d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,128C672,149,768,171,864,186.7C960,203,1056,213,1152,208C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></motion.path>
                <motion.path
                animate={{ y: 10 }}
                transition={{ duration: 2, yoyo: Infinity }}
                  fill="#2cd8f7"
                  fill-opacity="0.7"
                  d="M0,192L48,202.7C96,213,192,235,288,250.7C384,267,480,277,576,250.7C672,224,768,160,864,122.7C960,85,1056,75,1152,106.7C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></motion.path>
              </svg>
          </Grid>
        </Grid>
      </WrapperFW>
    </>
  );
};

export default FooterWhole;
