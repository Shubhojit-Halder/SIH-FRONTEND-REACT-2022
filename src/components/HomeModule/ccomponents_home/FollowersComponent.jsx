import React, { useEffect, useState } from "react";
import Followers from "./Followers";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CallMadeIcon from "@mui/icons-material/CallMade";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { motion } from "framer-motion";
import FollowerStyledWrap from "../home/styles/Followers.styled";

import { getFollowSuggestion } from "./Queries/getFollowSuggestions";
import { useMutation, useQuery } from "@tanstack/react-query";
import { CircularProgress } from "@mui/material";
import { SendRequest } from "./Queries/SendRequest";
import { query } from "quill";
import FollowSuggestions from "./FollowSuggestions/FollowSuggestions";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { openFollowerList } from "../../FriendsModule/slices/FollowerListSlice";
import {
  SetErrorAlert,
  SetErrorAlertMsg,
} from "../../AuthModule/slices/ErrorMessages";
const FollowersComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [followers, setFollowers] = useState([]);
  const mutation = useQuery(
    ["get-suggestion", localStorage.getItem("user_id")],
    getFollowSuggestion,
    {
      onSuccess: (e) => {
        setFollowers(e.data);
        // dispatch(SetErrorAlertMsg("Request Sent Successfully!!!"));
        // dispatch(SetErrorAlert(true));
      },
    }
  );
  // useEffect(() => {
  // 	mutation.mutate({ user_id: localStorage.getItem("user_id") });
  // }, []);
  const mutation2= useMutation(SendRequest, {
    onSuccess: (e) => {
      dispatch(SetErrorAlertMsg("Request Sent Successfully!!!"));
      dispatch(SetErrorAlert(true));
    },
  });
  return (
    <FollowerStyledWrap>
      <div className="seeall">
        <div className="title">
          <span className="followerstitle">You May Follow</span>
        </div>
        <div>
          <Button
            variant="contained"
            endIcon={<CallMadeIcon fontSize="10px" color="action" />}
            color="inherit"
            style={{ borderRadius: "40px", fontSize: "10px" }}
            onClick={() => {
              navigate("/followers");
              dispatch(openFollowerList(3));
            }}
          >
            See All
          </Button>
        </div>
      </div>
      <div className="followers">
        {!mutation.isFetched ? (
          <div className="progressbar">
            <CircularProgress size={30} sx={{ color: "rgb(88,88,252)" }} />
          </div>
        ) : (
          <></>
        )}
        {mutation.isSuccess
          ? mutation.data.data.map((value, index) => {
              return (
                <FollowSuggestions value={value} index={index} key={index} />
              );
            })
          : ""}

        {followers.length >= 5 ? (
          <div className="morefollowers">
            <Button
              variant="contained"
              startIcon={<ExpandMoreIcon color="action" />}
              color="inherit"
              style={{ borderRadius: "40px" }}
            >
              MORE
            </Button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </FollowerStyledWrap>
  );
};

export default FollowersComponent;
