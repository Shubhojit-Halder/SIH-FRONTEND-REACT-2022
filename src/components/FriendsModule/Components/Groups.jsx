import { Button, Paper } from "@mui/material";
import React from "react";
import { RightdivFrWrapper } from "../styles/RightdivFriends.styled";
import Dp from "../static/Dp.jpg";
const Groups = () => {
  return (
    <RightdivFrWrapper>
      <Paper className="paperCompRd">
        <div className="rowRD">
          <div className="imgNamecompRd">
            <img src={Dp} alt="Dp" className="imgRD" />
            <span className="NameRD">Shubhojit Halder</span>
          </div>
          <div className="buttonsRD">
            <Button variant="contained" className="btnRD">
              Follow
            </Button>
          </div>
        </div>
        <div className="rowRD">
          <div className="imgNamecompRd">
            <img src={Dp} alt="Dp" className="imgRD" />
            <span className="NameRD">Very VLSI</span>
          </div>
          <div className="buttonsRD">
            <Button variant="contained" className="btnRD">
              Follow
            </Button>
          </div>
        </div>
      </Paper>
    </RightdivFrWrapper>
  );
};

export default Groups;
