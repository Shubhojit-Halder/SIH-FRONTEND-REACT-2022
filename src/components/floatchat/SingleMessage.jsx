import React from "react";
import { useState } from "react";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { IconButton } from "@mui/material";
// import img from "../../public/images/img2.jpg";
import { LeftChat, RightChat } from "./style/message.styled";
const SingleMessage = (props) => {
  console.log(props.message.length);
  const [state, setState] = useState(false);
  const d = new Date();
  const time = d.toLocaleTimeString();
  // console.log(img);
  return (
    <>
      {props.right ? (
        <RightChat>
          <div className="skewFloatChat"></div>
          <div className="textFloatChat">
            {props.file ? (
              <IconButton>
                <DownloadRoundedIcon />
              </IconButton>
            ) : (
              <></>
            )}
            <span>{state ? props.message : props.message.slice(0, 15)}</span>
            <br />
            {props.message.length > 15 ? (
                <span>
                  {!props.file ? (
                    <span
                      className="showmorebtnFloatChat"
                      onClick={() => {
                        setState((prev) => !prev);
                      }}
                    >
                      {!state ? `Show More...` : `...Show Less`}
                    </span>
                  ) : (
                    <></>
                  )}
                </span>
              ) : (
                <></>
              )}
            <div className="downFloatChat">
              <span>{`Reply`}</span>
              <span>{time}</span>
            </div>
          </div>
        </RightChat>
      ) : (
        <>
          <LeftChat>
            <div className="skewFloatChat"></div>
            <div className="textFloatChat">
			{props.file ? (
              <IconButton>
                <DownloadRoundedIcon />
              </IconButton>
            ) : (
              <></>
            )}
              <span>{state ? props.message : props.message.slice(0, 15)}</span>
              <br />

              {props.message.length > 15 ? (
                <span>
                  {!props.file ? (
                    <span
                      className="showmorebtnFloatChat"
                      onClick={() => {
                        setState((prev) => !prev);
                      }}
                    >
                      {!state ? `Show More...` : `...Show Less`}
                    </span>
                  ) : (
                    <></>
                  )}
                </span>
              ) : (
                <></>
              )}

              <div className="downFloatChat">
                <span>{`Reply`}</span>
                <span>{time}</span>
              </div>
            </div>
          </LeftChat>
        </>
      )}
    </>
  );
};

export default SingleMessage;
