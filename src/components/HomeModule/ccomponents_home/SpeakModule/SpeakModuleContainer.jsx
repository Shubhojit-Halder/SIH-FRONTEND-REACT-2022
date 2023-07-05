import { Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import SpeakModule from "./SpeakModule";

const SpeakModuleContainer = () => {
  const SmWrapper = styled.section`
  .mainPaperSpeak {
      width: 100vw;
      height: 100vh;
      margin-top: -80px;
      border-radius: 0px;
      padding: 50px 0px;
      background-color: #0000009b;
    }
    .subPaperSpeak {
      width: 500px;
      margin: auto;
      padding: 30px;
      background: #fff;
      z-index: 100000;
    }
    @media (max-width:550px) {
    .subPaperSpeak {
      width: 450px;
    }}
    @media (max-width:460px) {
    .subPaperSpeak {
      width: 350px;
    }}

   `;

  return (
    <SmWrapper>
      <div className="mainPaperSpeak">
        <div className="subPaperSpeak">
          <SpeakModule />
        </div>
      </div>
    </SmWrapper>
  );
};

export default SpeakModuleContainer;
