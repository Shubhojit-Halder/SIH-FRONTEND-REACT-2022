import React, { useReducer } from "react";
import { useSelector } from "react-redux";
import Floatingchat from "./Floatingchat";
import Message from "./Message";

const FloatChatWrapper = () => {
    const state=useSelector((state)=>state.floatChatOpener.change);
  return (
    <>
      <Floatingchat />
      {state ? <Message /> : <></>}
    </>
  );
};

export default FloatChatWrapper;
