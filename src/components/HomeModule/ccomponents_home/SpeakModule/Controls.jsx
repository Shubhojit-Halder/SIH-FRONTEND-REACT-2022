import React from "react";
import { Button, Grid, IconButton } from "@mui/material";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch,useSelector } from "react-redux";
import { openSpeakMod, setReadingPitch, setReadingRate } from "../../home/slices/SpeakModuleSlice";
import Slider from "@mui/material/Slider";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import FastForwardIcon from "@mui/icons-material/FastForward";
const Controls = () => {
  const [value, setValue] = React.useState();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const rateState= useSelector((state)=>state.speakmodule.rate);
  const pitchState= useSelector((state)=>state.speakmodule.pitch);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <span>Controls</span>
      <IconButton
        sx={{color:"#5858fc"}}
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem sx={{margin:"20px 0px 10px 0px"}}>
          <span>
            <FastForwardIcon />
          </span>
          <Slider
            sx={{ width: "200px", marginLeft: "12px", color: "#5858fc" }}
            aria-label="Always visible"
            valueLabelDisplay="auto"
            defaultValue={1}
            value={rateState}
            step={0.1}
            max={2}
            marks
            onChange={(e)=>{
              dispatch(setReadingRate(e.target.value));
            }}
          />{" "}
        </MenuItem>
        <MenuItem sx={{margin:"10px 0px 10px 0px"}}>
          <span>
            <GraphicEqIcon />
          </span>
          <Slider
            sx={{ width: "200px", marginLeft: "12px", color: "#5858fc" }}
            onChange={(e) => {
              dispatch(setReadingPitch(e.target.value));
            }}
            aria-label="Always visible"
            valueLabelDisplay="auto"
            value={pitchState}
            defaultValue={1}
            step={0.25}
            min={0.25}
            max={2}
            marks
          />{" "}
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Controls;
