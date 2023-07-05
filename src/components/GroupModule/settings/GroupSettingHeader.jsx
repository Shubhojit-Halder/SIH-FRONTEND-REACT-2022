import React from "react";
import { Grid } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import IconButton from "@mui/material/IconButton";
import { GrSettingHeaderWrapper } from "../styles/Groupsettingheader.styled";
const GroupSettingHeader = () => {
  return (
    <>
      <GrSettingHeaderWrapper>
        <Grid container spacing={2} marginTop="50px">
          <Grid item xs={12} sm={12} md={12}>
            <IconButton className="backButtonGs">
              <ArrowBackIosRoundedIcon />
            </IconButton>
            <div className="mainGs">
              <div className="imageDivGs">
                <img
                  src="https://images.unsplash.com/photo-1658312228094-d598e76edcbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                  width={750}
                  height={300}
                  className="coverImgGs"
                />
              </div>
              <div className="profileImageGs">
                <img
                  src="https://pps.whatsapp.net/v/t61.24694-24/291130683_355936526700033_2724619031560912413_n.jpg?ccb=11-4&oh=01_AVw2mtwv8kCv2R934NmM4tcQALJnIXyyYWT9C6bsiScdDQ&oe=62EA1E45"
                  height={150}
                  width={150}
                  className="imageGs"
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <div className="profileNameGs">
              <div className="nameContainerGs">
                <div className="nameGs">
                  HexaOverflow
                  <br />
                </div>
                <div className="identityGs">Group of MSIT</div>
              </div>
            </div>
          </Grid>
        </Grid>
      </GrSettingHeaderWrapper>
    </>
  );
};

export default GroupSettingHeader;
