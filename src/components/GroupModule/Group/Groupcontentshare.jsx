//bhetor r bairer ta
import React from "react";
import Groupcontent from "./Groupcontent";
import Paper from "@mui/material/Paper";
import GroupcontentcontainerWrapper from "../styles/GroupcontentcontainerWrapper.styled";

const Groupcontentshare = () => {
  return (
    <GroupcontentcontainerWrapper>
     <div className="containerSection2">
				<Paper elevation={1} className="section2">
					<Groupcontent />
				</Paper>
    </div>
    </GroupcontentcontainerWrapper>
  );
}

export default Groupcontentshare;