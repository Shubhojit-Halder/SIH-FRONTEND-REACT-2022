import React, { useContext, useState } from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Followers from "../HomeModule/ccomponents_home/Followers";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CommentIcon from "@mui/icons-material/Comment";
import { FcSearch } from "react-icons/fc";
import { FloatingChatWrapper } from "./style/Floatingchat.styled";
import { nameChngFC, openFC } from "./slices/FloatChatSlice";
import { useDispatch } from "react-redux";
const Floatingchat = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  return (
    <FloatingChatWrapper>
      <div className="mainFloatingChat" >
        <div className="headerFloatingChat">
          <div className="messagetxtFloatingChat">
            <CommentIcon />
            <span style={{ paddingLeft: "10px" }}>Messages</span>
          </div>
          <div
            className="buttonupFloatingChat"
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            <IconButton aria-label="delete">
              {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </IconButton>
          </div>
        </div>
        {open ? (
          <div className="friendslistFloatingChat">
            <div className="searchbarFloatingChat">
              <input type="text" className="searchinputFloatingChat"/>
              <IconButton>
                <FcSearch />
              </IconButton>
            </div>
            {[
              "Shubhojit",
              "Aryadeep",
              "Pubali",
              "Priyanka",
              "Debargha",
              "Papiya Tapiya",
              "SPN Tapiya",
            ].map((name, index) => {
              return (
                <>
                  <div
                    onClick={() => {
                      dispatch(nameChngFC(name));
                      dispatch(openFC(true));
                    }}
                  >
                    <Followers chat={true} name={name} />
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </FloatingChatWrapper>
  );
};

export default Floatingchat;
