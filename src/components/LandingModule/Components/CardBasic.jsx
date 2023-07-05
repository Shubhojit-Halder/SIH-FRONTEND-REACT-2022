import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadePara2 } from "../styles/variants";
import { MidsecWrapper, MyButton } from "../styles/Midsection.styled";
const CardBasic = (props) => {
  return (
    <MidsecWrapper>
      <motion.div
        className="wholeCardDivLand"
        key={props.index}
        variants={fadePara2}
        initial="offscreen"
        whileInView="onscreen"
      >
        <Tilt options={{ max: 30, scale: 1.01, speed: 200 }}>
          <div className="imgLand">
            <motion.img
              animate={{ y: 10 }}
              transition={{ duration: 1, yoyo: Infinity }}
              src={props.image}
              alt=""
            className="imagesLand"
            />
          </div>
        </Tilt>
        <div className="writeupLand">
          <h2>{props.header}</h2>
          <span>{props.msg}</span>
          <br />
          <MyButton>Learn More...</MyButton>
        </div>
      </motion.div>
    </MidsecWrapper>
  );
};

export default CardBasic;
