import React, { useEffect, useState } from "react";
import SingleMessage from "./SingleMessage";
import ChatReply from "./ChatReply";
import { ChatFloatChat } from "./style/chat_floatChat.styled";
import SingleMsgFile from "./SingleMsgFile";
const Chat = () => {
  useEffect(() => {
    var messageBody = document.querySelector("#messageBody");
    messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
  }, []);
  const [state, setState] = useState([
    "Hi there",
    "Hi breeeeeeeeeeeeeeeeeeeeeeeo",
    "HelloOOOOOOOOOooooooooooooooooogggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
    "Hello!!!!ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff!!!!!!!!!!!!!!!!!!!!!!!!",
  ]);
  return (
    <ChatFloatChat>
      <div
        className="mainFloatChat"
        id="messageBody"
        onScroll={(e) => {
          console.log();
          if (e.target.scrollTop <= 50) {
            console.log("load previous message");
          }
        }}
      >
        {state.map((value, index) => {
          if (index % 2 == 0) {
            return (
              <>
                <SingleMessage message={value} right={true} key={index} file={false}/>
                {/* <SingleMsgFile message={value} right={true} key={index} /> */}
              </>
            );
          }
          return (
            <>
              <SingleMessage message={value} right={false} key={index} file={true}/>
              <SingleMessage message={value} right={false} key={index} file={false}/>
            </>
          );
        })}
        <ChatReply
          message={`Repffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffflied`}
          parentmessage={"rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"}
          right={true}
        />
        <ChatReply
          message={`Rephhhhhhhhhhhhhhhhfflied`}
          parentmessage={
            "rrrrrrgggggggggggggggggggggggrrrrrrrrrrrrrrrrrrrrrrrrr"
          }
          right={false}
        />
      </div>
    </ChatFloatChat>
  );
};

export default Chat;
