import { Grid } from "@mui/material";
import React from "react";
import { PiWrapper } from "../../styles/PiWrappper.styled";
import { IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { PersonalInfoData } from "../../Datas/PersonalInfo";
import AddedItem from "../IntroDivandComps/AddedItem";
import { useDispatch, useSelector } from "react-redux";
import { openPI } from "../../slices/PiSlice";

const PersonalInfo = () => {
  const dispatch = useDispatch();
  return (
    <>
      <PiWrapper>
        <Grid container className="GridMainPI">
          <Grid item xs={12} sm={12} md={12}>
            <div className="headerPI">
              <span>Personal Info</span>
              <IconButton
                onClick={() => {
                  dispatch(openPI(false));
                }}
              >
                <CloseRoundedIcon />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <div className="allitemsPI">
              {PersonalInfoData.map((value, index) => {
                return (
                  <div className="singleItemPI">
                    <div className="headerSIPI">{value.head}</div>
                    <div className="bodySIPI">
                      <div className="adderPI">
                        {value.startLogo}
                        <span className="addPI">{value.add}</span>
                      </div>
                      <AddedItem index={index} />
                    </div>
                  </div>
                );
              })}
            </div>
          </Grid>
        </Grid>
      </PiWrapper>
    </>
  );
};

export default PersonalInfo;
