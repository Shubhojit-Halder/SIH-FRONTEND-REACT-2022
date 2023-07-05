import React from "react";
import Chat from "../components/Chat";
import { Helmet } from "react-helmet";
const ChatMain = () => {
  return (
    <>
      <Helmet>
        <title>DaakTicket | Messages</title>
        <meta name="All messages" content="Messages" />
      </Helmet>
      <Chat />
    </>
  );
};

export default ChatMain;
