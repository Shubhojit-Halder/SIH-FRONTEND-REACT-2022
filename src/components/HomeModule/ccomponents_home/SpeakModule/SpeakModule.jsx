import { Button, Grid, IconButton } from "@mui/material";
import React from "react";
import { BorderRight, CloseRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { openSpeakMod, setPauseReading, setStartReading } from "../../home/slices/SpeakModuleSlice";
import SpeakerSelection from "./SpeakerSelection";
import ControllerSection from "./ControllerSection";
import MDEditor from "@uiw/react-md-editor";
import styled from "styled-components";
const SpeakModule = () => {
  const Wrapper = styled.section`
    .contentdivCSSp {
      max-height: 300px;
      overflow-y: scroll;
      border-radius: 10px;
    }
    .contentdivCSSp::-webkit-scrollbar {
      width: 3px;
    }
    .contentdivCSSp::-webkit-scrollbar-thumb {
      background: #4343436e;
      border-radius:5px ;
    }
  `;

  const dispatch = useDispatch();
  const Caption = useSelector((state) => state.speakmodule.caption);
  return (
    <>
      <Wrapper>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} sx={{ marginBottom: "10px" }}>
            <IconButton
              onClick={() => {
                dispatch(openSpeakMod(false));
              }}
            >
              <CloseRounded />
            </IconButton>
            <SpeakerSelection />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <div className="contentdivCSSp">
              <MDEditor.Markdown
                source={Caption}
                style={{
                  whiteSpace: "pre-wrap",
                  background: "#fff",
                  color: "#000",
                  BorderRadius: "5px",
                }}
              />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
              marginTop: "20px",
            }}
          >
            <ControllerSection />
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
};

export default SpeakModule;
