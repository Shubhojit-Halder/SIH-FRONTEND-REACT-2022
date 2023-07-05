import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openSpeakMod,
  setPauseReading,
  setStartReading,
} from "../../home/slices/SpeakModuleSlice";
import Fab from "@mui/material/Fab";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import Controls from "./Controls";
const ControllerSection = () => {
  const dispatch = useDispatch();
  const [size, setSize] = useState("large");
  const startstate = useSelector((state) => state.speakmodule.start);
  const playstate = useSelector((state) => state.speakmodule.pause);
  useEffect(() => {
    if (window.innerWidth < 600) setSize("small");
    if (window.innerWidth < 800) setSize("medium");
  });

  const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .mainCSSp {
    }
    .FabCSSp {
      margin: 2px 4px;
      background-color: #5858fc;
      color: #fff;
      transition: 0.5s;
    }
    .FabCSSp:hover {
      background-color: #fff;
      color: #5858fc;
      border: 1px solid #5858fc;
    }
    @media (max-width: 550px) {
      /* .FabCSSp {
        width: 30px;
        height: 30px;
      } */
    }
  `;

  return (
    <>
      <Wrapper>
        <div className="mainCSSp">
          <Fab
            size={size}
            className="FabCSSp"
            onClick={() => {
              dispatch(setStartReading(true));
              dispatch(setPauseReading(true));
            }}
            disabled={startstate ? true : false}
          >
            <PlayCircleRoundedIcon />
          </Fab>
          <Fab
            size={size}
            className="FabCSSp"
            onClick={() => {
              dispatch(setStartReading(false));
              dispatch(setPauseReading(false));
            }}
            disabled={!startstate ? true : false}
          >
            <StopRoundedIcon />
          </Fab>
          <Fab
            size={size}
            className="FabCSSp"
            disabled={!startstate ? true : false}
            onClick={() => {
              dispatch(setPauseReading(!playstate));
            }}
          >
            {!playstate ? <PlayArrowRoundedIcon /> : <PauseRoundedIcon />}
          </Fab>
        </div>
        <Controls />
      </Wrapper>
    </>
  );
};
export default ControllerSection;
