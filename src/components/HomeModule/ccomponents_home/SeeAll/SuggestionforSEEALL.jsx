import { Button, Paper } from "@mui/material";
import React from "react";
import Dp from "../../home/static/Dp.jpg";
import { SuggesSEEALLWRAPPER } from "./styles/SuggesSEEALL.styled";
import {IconButton} from "@mui/material";
import CloseRounded from "@mui/icons-material/CloseRounded";
import { useDispatch } from "react-redux";
import { Openseeall, SeeALLSlice } from "../../home/slices/OpenSEEALL";
const SuggestionsforSEEALL = () => {
    const dispatch = useDispatch();
  return (
    <SuggesSEEALLWRAPPER>
      <Paper className="paperCompSEEALL">
        <div className="headerSEEALL">
          <h2>You May Know</h2>
          <IconButton
            onClick={() => {
              dispatch(Openseeall(0));
            }}
          >
            <CloseRounded />
          </IconButton>
        </div>
        <div className="rowSEEALL">
          <div className="imgNamecompSEEALL">
            <img src={Dp} alt="Dp" className="imgSEEALL" />
            <span className="NameSEEALL">Shubhojit Halder</span>
          </div>
          <div className="buttonsSEEALL">
            <Button variant="contained" className="btnSEEALL">
              Follow
            </Button>
          </div>
        </div>
        <div className="rowSEEALL">
          <div className="imgNamecompSEEALL">
            <img src={Dp} alt="Dp" className="imgSEEALL" />
            <span className="NameSEEALL">Shubhojit Halder</span>
          </div>
          <div className="buttonsSEEALL">
            <Button variant="contained" className="btnSEEALL">
              Follow
            </Button>
          </div>
        </div>
      </Paper>
    </SuggesSEEALLWRAPPER>
  );
};

export default SuggestionsforSEEALL;
