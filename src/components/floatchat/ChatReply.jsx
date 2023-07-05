import React from "react";
import { useState } from "react";
import { ChatFloatChat } from "./style/chat_floatChat.styled";
import { LeftChat, RightChat } from "./style/message.styled";
const SingleMessage = (props) => {
  console.log(props.message.length);
  const [state, setState] = useState(false);
  const d = new Date();
  const time = d.toLocaleTimeString();
  return (
    <>
      <ChatFloatChat>
        {props.right ? (
          <RightChat>
            <div className="skewFloatChat"></div>
            {/* <br /> */}
            <div className="textFloatChat">
              <div className="parentmessageFloatChat">
                <span>
                  {props.parentmessage ? props.parentmessage.slice(0, 15) : ""}
                </span>
              </div>
              <span>{state ? props.message : props.message.slice(0, 15)}</span>
              <br />
              {props.message.length > 15 ? (
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
              <div className="downFloatChat">
                <span>{`Reply`}</span>
                <span>{time}</span>
              </div>
            </div>
          </RightChat>
        ) : (
          <LeftChat>
            <div className="skewFloatChat"></div>
            {/* <br /> */}
            <div className="textFloatChat">
              <div className="parentmessageFloatChat">
                <span>
                  {props.parentmessage ? props.parentmessage.slice(0, 15) : ""}
                </span>
              </div>
              <span>{state ? props.message : props.message.slice(0, 15)}</span>
              <br />
              {props.message.length > 15 ? (
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
              <div className="downFloatChat">
                <span>{`Reply`}</span>
                <span>{time}</span>
              </div>
            </div>
          </LeftChat>
        )}
      </ChatFloatChat>
    </>
  );
};

export default SingleMessage;
