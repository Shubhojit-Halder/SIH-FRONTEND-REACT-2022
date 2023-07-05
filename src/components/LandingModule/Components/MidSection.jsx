import { Grid } from "@mui/material";
import React from "react";
import { MyButton, MidsecWrapper } from "../styles/Midsection.styled";
import { Data } from "../static/cardsData.js";
import { motion } from "framer-motion";
import CardBasic from "./CardBasic";
import CardBasic2 from "./cardBasic2";
import { staggerContainer } from "../styles/variants";
const MidSection = () => {
  return (
    <>
      <MidsecWrapper>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} className="wholecardGridLand">
            <motion.div variants={staggerContainer} viewport={{ amount: 1 }}>
              {Data.map((value, index) => {
                return (
                  <>
                    {value.bol == 0 ? (
                      <CardBasic
                        image={value.image}
                        header={value.header}
                        index={index}
                        msg={value.message}
                      />
                    ) : (
                      <CardBasic2
                        image={value.image}
                        header={value.header}
                        index={index}
                        msg={value.message}
                      />
                    )}
                  </>
                );
              })}
            </motion.div>
          </Grid>
        </Grid>
      </MidsecWrapper>
    </>
  );
};

export default MidSection;
{
  /* <Grid item xs={12} sm={12} md={12} className="wholecardGridLand">
          <div className="wholeCardDivLand">
              <div className="writeupLand" style={{marginLeft:"30px"}}>
                <h2>Follow Your Friends</h2>
                <span>
                  Get connected with your pals and see what they're upto (Just
                  like the old day).
                </span>
                <br />
                <MyButton>Learn More...</MyButton>
              </div>
              <Tilt options={{ max: 30, scale: 1.01, speed: 200 }}>
                <div className="imgLand">
                  <motion.img
                    animate={{ y: 10 }}
                    transition={{ duration: .7, yoyo: Infinity,delay:2 }}
                    src={Chat}
                    alt=""
                    width={250}
                  />
                </div>
              </Tilt>
            </div>
          </Grid> */
}
