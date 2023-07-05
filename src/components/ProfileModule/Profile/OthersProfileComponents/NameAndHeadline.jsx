import { MessageOutlined, PersonAddOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { axios } from "axios";
import { useDispatch } from "react-redux";
import { openMsgReq } from "../../slices/MessageReqSlice";
const NameAndHeadline = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="profileNameOthprof">
      <div className="nameContainerOthprof">
        <div className="nameOthprof">
          {props.name}
          <br />
        </div>
        <div className="identityOthprof">{props.headline}</div>
        <div className="editingButtonsOthprof">
          <Button className="editBtnOthprof" variant="outlined">
            <PersonAddOutlined sx={{ paddingRight: "5px" }} />
            Follow
          </Button>
          <Button
            className="followerBtnOthprof"
            variant="outlined"
            onClick={() => {
              dispatch(openMsgReq(true));
            }}
          >
            <MessageOutlined sx={{ paddingRight: "5px" }} /> Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NameAndHeadline;
