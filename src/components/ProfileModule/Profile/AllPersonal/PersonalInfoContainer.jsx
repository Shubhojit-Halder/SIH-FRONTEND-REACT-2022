import { Grid } from "@mui/material";
import React from "react";
import Navbar from "../../../nav_and_fc/navbar_component/Navbar";
import { PiWrapper } from "../../styles/PiWrappper.styled";
import PersonalInfo from "./PersonalInfo";

const PersonalInfoContainer = () => {
  return (
    <>
      <PiWrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00000085",
            height: "100vh",
          }}
        >
          <div className="containerPI" style={{}}>
            <PersonalInfo />
          </div>
        </div>
      </PiWrapper>
    </>
  );
};

export default PersonalInfoContainer;
