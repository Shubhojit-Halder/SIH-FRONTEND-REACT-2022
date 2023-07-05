import { Grid } from "@mui/material";
import { React, useState, useContext } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import { FriendnavWrapper } from "../styles/FriendnavWrapper.styled";
import { useDispatch, useSelector } from "react-redux";
import { openFollowerList } from "../slices/FollowerListSlice";
const FriendNavDiv = () => {
  const dispatch = useDispatch();
  const state = useSelector((state)=>state.followerList.value);

  return (
    <>
      <FriendnavWrapper>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <div className="heading">
              <h2 style={{ color: "#5858fc",fontFamily:"El Messiri"}}>Connections</h2>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <div className="allfriendsFR">
              <div
                className="navCompFR"
                onClick={() => {
                  dispatch(openFollowerList(1));
                }}
                style={{
                  color: state === 1 ? "#5858FC" : "",
                  transition: ".5s",
                }}
              >
                <span className="iconsFR">
                  <PersonAddOutlinedIcon />
                </span>
                <span className="itemFR">Followers</span>
              </div>
              <div
                className="navCompFR"
                onClick={() => {
                  dispatch(openFollowerList(2));
                }}
                style={{
                  color: state === 2 ? "#5858FC" : "",
                  transition: ".5s",
                }}
              >
                <span className="iconsFR">
                  <PersonAddOutlinedIcon />
                </span>
                <span className="itemFR">Follow Requests</span>
              </div>
              <div
                className="navCompFR"
                onClick={() => {
                  dispatch(openFollowerList(3));
                }}
                style={{
                  color: state === 3 ? "#5858FC" : "",
                  transition: ".5s",
                }}
              >
                <span className="iconsFR">
                  <PersonAddOutlinedIcon />
                </span>
                <span className="itemFR">Suggestions</span>
              </div>
              <div
                className="navCompFR"
                onClick={() => {
                  dispatch(openFollowerList(4));
                }}
                style={{
                  color: state === 4 ? "#5858FC" : "",
                  transition: ".5s",
                }}
              >
                <span className="iconsFR">
                  <PersonAddOutlinedIcon />
                </span>
                <span className="itemFR">Groups</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </FriendnavWrapper>
    </>
  );
};

export default FriendNavDiv;
