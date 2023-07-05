import React from "react";
import errorPic from "./static/errorPic.png";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Button } from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import { useNavigate } from "react-router";
import bg from "./static/bg.png";
const Errorpage = () => {
  const navigate = useNavigate();
  const ErrWrapper = styled.section`
    background: linear-gradient(rgba(255,255,255,.96), rgba(255,255,255,.92)), url(${(props) => props.bgImg});
    background-size: 22%;
    background-repeat: repeat;
    .wholeERR {
      display: flex;
      justify-content: center;
      overflow: hidden;
      flex-direction: column;
      align-items: center;
      height: 100vh;
      opacity: 1;
    }
    .errImgERR {
      width: 500px;
    }
    @media (max-width: 650px) {
      .errImgERR {
        width: 450px;
      }
    }
    @media (max-width: 460px) {
      .errImgERR {
        width: 340px;
      }
    }
  `;
  return (
    <ErrWrapper bgImg={bg}>
      <div className="wholeERR">
        <motion.div
          animate={{ y: 10 }}
          transition={{ yoyo: Infinity, duration: 1.3 }}
        >
          <img src={errorPic} className="errImgERR" />
        </motion.div>
        <div>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#5858fc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                bgcolor: "#3a3aa9",
              },
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            <ChevronLeftRoundedIcon /> Go Back
          </Button>
        </div>
      </div>
    </ErrWrapper>
  );
};

export default Errorpage;
