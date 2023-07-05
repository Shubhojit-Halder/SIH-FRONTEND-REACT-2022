import React from "react";
import img from "../../home/static/logo.png";
import { LoaderWrapper } from "./styles/Loaderpage.styled.js";
import { motion } from "framer-motion";
import { LoaderPage } from "../../../../Variants/Variants";

const Loader = () => {
  return (
    <>
      <LoaderWrapper>
        <motion.div
          className="logoLoader"
          variants={LoaderPage}
          initial="initial"
          animate="animate"
        >
          <img src={img} width={250} height={55} />
          <div className="loadingBarLoader"></div>
        </motion.div>
      </LoaderWrapper>
    </>
  );
};

export default Loader;
