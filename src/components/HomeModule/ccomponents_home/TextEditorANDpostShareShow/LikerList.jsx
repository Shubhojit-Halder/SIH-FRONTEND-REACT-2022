import { CloseOutlined } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { openLikerNames } from "../../home/slices/LikerOpenSlice";
import { LikerlistonPost } from "../../home/static/js/LikerlistonPost";
import { LikerListWrapper } from "../../home/styles/LikerListWrapper.styled";
import { fadeIn } from "../../../../Variants/Variants";
const LikerList = () => {
  const dispatch = useDispatch();
  return (
    <>
      <LikerListWrapper>
        <AnimatePresence>
          <motion.div
            className="wholePageLL"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <Paper className="subPaperLL">
              <div className="headerLL">
                <h2>Likes</h2>
                <IconButton
                  onClick={() => {
                    dispatch(openLikerNames(false));
                  }}
                >
                  <CloseOutlined />
                </IconButton>
              </div>
              <div className="allCompLL">
                {LikerlistonPost.map((value) => {
                  return (
                    <div className="oneLiker">
                      <img
                        src={value.dp}
                        alt=""
                        width={40}
                        height={40}
                        className="imgLL"
                      />
                      <span className="nameLL">{value.name}</span>
                    </div>
                  );
                })}
              </div>
            </Paper>
          </motion.div>
        </AnimatePresence>
      </LikerListWrapper>
    </>
  );
};

export default LikerList;
