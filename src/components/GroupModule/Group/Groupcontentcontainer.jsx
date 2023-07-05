//shob gulo eksathe
import React from "react";
// import style from "../../../styles/GroupPost/Groupcontentcontainer.module.css";
// import Contents from "./contents";
// import SharedContent from "./SharedContent";
import Paper from "@mui/material/Paper";
import Groupcontent from "./Groupcontent";
// import Groupcontentshare from "./Groupcontentshare";
import Sharegroup from "./Sharegroup";
import GroupcontentcontainerWrapper from "../styles/GroupcontentcontainerWrapper.styled";
import Navbar from "../../nav_and_fc/navbar_component/Navbar";
import Groupcontentshare from "./Groupcontentshare";
const Groupcontentcontainer = () => {
  return (
    <>
        {/* <Navbar/> */}
      <GroupcontentcontainerWrapper>
        <div className="gusthirpindi">
          <div className="containerSection2">
            <Paper elevation={1} className="section2">
              <Groupcontent />
            </Paper>
          </div>
          <div className="containerSection2">
            <Paper elevation={1} className="section2">
              <Groupcontentshare/>
            </Paper>
          </div>
          <div className="containerSection2">
            <Paper elevation={1} className="section2">
              <Sharegroup />
            </Paper>
          </div>

          <div className="containerSection2">
            <Paper elevation={1} className="section2">
              <Groupcontent />
            </Paper>
          </div>

          <div className="containerSection2">
            <Paper elevation={1} className="section2">
              <Groupcontent />
            </Paper>
          </div>

          <div className="containerSection2">
            <Paper elevation={1} className="section2">
              <Groupcontent />
            </Paper>
          </div>

          <div className="containerSection2">
            <Paper elevation={1} className="section2">
              <Groupcontent />
            </Paper>
          </div>
        </div>
      </GroupcontentcontainerWrapper>
    </>
  );
};

export default Groupcontentcontainer;
