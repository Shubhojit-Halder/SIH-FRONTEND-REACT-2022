import React from 'react'
import Button from "@mui/material/Button";
import CallMadeIcon from "@mui/icons-material/CallMade";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import IconButton from "@mui/material/IconButton";
import RightdivWrapper from '../styles/RightDiv..styled';
const OtherProfileRightDiv = () => {
  return (
    <RightdivWrapper>
    <div className="main">
    <div className="upper">
      <p>
        Intro{" "}
        <span>
          {" "}
          <Button
            variant="contained"
            endIcon={<CallMadeIcon fontSize="10px" color="action" />}
            color="inherit"
            style={{
              borderRadius: "40px",
              fontSize: "10px",
              padding: "5px 10px",
            }}
            className = "seeallbtn"
          >
            See All
          </Button>
        </span>{" "}
      </p>

      <ul>
        <li>
          <WorkOutlineOutlinedIcon />
          <span>No workplace to show</span>
        </li>
        <li>
          <SchoolOutlinedIcon />
          <span>Meghnad Saha Institute of Technology</span>
        </li>
        <li>
          <LocationOnOutlinedIcon />
          <span>Andul</span>
        </li>
        <li></li>
      </ul>
    </div>
    <div className="lower">
      
      
    </div>
  </div>
  </RightdivWrapper>
  )
}

export default OtherProfileRightDiv