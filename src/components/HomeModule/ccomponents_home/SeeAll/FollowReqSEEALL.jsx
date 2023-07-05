import { CloseRounded } from "@mui/icons-material";
import { Button, IconButton, Paper } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Openseeall, SeeALLSlice } from "../../home/slices/OpenSEEALL";
import Dp from "../../home/static/Dp.jpg";
import { FOllowReqSEEALLWrapper } from "./styles/FollowReqSEEALL.styled";
const FollowReqSEEALL = () => {
    const dispatch = useDispatch();
  return (
    <FOllowReqSEEALLWrapper>
      <Paper className="paperCompRd">
        <div className="headerSEEALLFR">
            <h2>Follow Requests</h2>
            <IconButton onClick={()=>{dispatch(Openseeall(0))}}><CloseRounded/></IconButton>
        </div>
        <div className="rowRD">
          <div className="imgNamecompRd">
            <img src={Dp} alt="Dp" className="imgRD" />
            <span className="NameRD">Shubhojit Halder</span>
          </div>
          <div className="buttonsRD">
            <Button variant="contained" className="btnRDFR">
              Accept
            </Button>
            <Button variant="contained" className="btnRDFR">
              Decline
            </Button>
          </div>
        </div>
        <div className="rowRD">
          <div className="imgNamecompRd">
            <img src={Dp} alt="Dp" className="imgRD" />
            <span className="NameRD">Shubhojit Halder</span>
          </div>
          <div className="buttonsRD">
            <Button variant="contained" className="btnRDFR">
              Accept
            </Button>
            <Button variant="contained" className="btnRDFR">
              Decline
            </Button>
          </div>
        </div>
      </Paper>
    </FOllowReqSEEALLWrapper>
  );
};

export default FollowReqSEEALL;
