import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { MidsecWrapper, MyButton } from "../styles/Midsection.styled";
import { fadePara } from "../styles/variants";
const CardBasic2 = (props) => {
  return (
    <MidsecWrapper>
      <motion.div
        className="wholeCardDivLand"
        key={props.index}
        variants={fadePara}
        initial="offscreen"
        whileInView="onscreen"
      >
        <div className="writeupLand" style={{ marginLeft: "30px" }}>
          <h2>{props.header}</h2>
          <span>{props.msg}</span>
          <br />
          <MyButton>Learn More...</MyButton>
        </div>
        <Tilt options={{ max: 30, scale: 1.01, speed: 200 }}>
          <div className="imgLand">
            <motion.img
              animate={{ y: 10 }}
              transition={{ duration: 0.7, yoyo: Infinity, delay: 2 }}
              src={props.image}
              alt=""
              className="imagesLand"
            />
          </div>
        </Tilt>
      </motion.div>
    </MidsecWrapper>
  );
};

export default CardBasic2;
