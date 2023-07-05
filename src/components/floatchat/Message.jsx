import {
  AddLink,
  AttachFile,
  Cancel,
  EmojiEmotionsSharp,
  FileUpload,
  Image,
  OpenInNew,
  PersonOffOutlined,
  PersonSharp,
  PrecisionManufacturingOutlined,
  SendSharp,
} from "@mui/icons-material";
import { Button, IconButton, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Followers from "../HomeModule/ccomponents_home/Followers";
import { MessageFCWrapper } from "./style/MessageFCWrapper.styled";
import { FcOk } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import Chat from "./Chat";
import EmojiMart from "../HomeModule/ccomponents_home/TextEditorANDpostShareShow/EmojiMart";
import { MessageMain } from "./style/message.styled";
import { openFC } from "./slices/FloatChatSlice";

const Message = () => {
  const [showEmoji, setshowEmoji] = React.useState(false);
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();
  const [cursorPos, setCursorPos] = useState({ start: 0, end: 0 });
  const Chatstate = useSelector((state) => state.emojimartslice.value);
  const EmojiState = useSelector((state) => state.emojimartslice.change);
  const chngState = useSelector((state) => state.floatChatOpener.change);
  const nameState = useSelector((state) => state.floatChatOpener.name);
  useEffect(() => {
    setValue((prev) => {
      let first = prev.slice(0, cursorPos.start);
      let last = prev.slice(cursorPos.end, prev.length);
      return first + Chatstate + last;
    });
    setCursorPos((prev) => {
      return { start: prev.start + 2, end: prev.end + 2 };
    });
  }, [EmojiState]);
  useEffect(() => {
    setValue("");
  }, []);
  return (
    <MessageFCWrapper>
      <MessageMain>
        <div className="headerMFC">
          <div className="profileMFC">
            <Followers
              chat={true}
              name={
                nameState.length > 15
                  ? nameState.slice(0, 15) + "..."
                  : nameState
              }
              hidesecondtext={true}
            />
          </div>
          <div className="iconMFC">
            <IconButton
              sx={{ color: "#5858fc" }}
              onClick={() => {
                dispatch(openFC(false));
              }}
            >
              <PersonSharp />
            </IconButton>
            <IconButton
              sx={{ color: "#5858fc" }}
              onClick={() => {
                dispatch(openFC(false));
              }}
            >
              <OpenInNew />
            </IconButton>
            <IconButton
              sx={{ color: "#5858fc" }}
              onClick={() => {
                dispatch(openFC(false));
              }}
            >
              <Cancel />
            </IconButton>
          </div>
        </div>
        <div className="messagedivMFC">
          <div className="messagesMFC">
            <Chat />
          </div>
          <div className="messageinputdivMFC">
            {showEmoji ? (
              <div style={{ position: "relative", zIndex: "1000" }}>
                <EmojiMart />
              </div>
            ) : (
              <></>
            )}
            <div className="messagebarMFC">
              <TextField
                id="outlined-multiline-flexible"
                placeholder="Write Your Message..."
                multiline
                maxRows={4}
                minRows={2}
                fullWidth={true}
                variant="standard"
                color="success"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  setCursorPos({
                    start: e.target.selectionStart,
                    end: e.target.selectionEnd,
                  });
                }}
                onSelect={(e) => {
                  setCursorPos({
                    start: e.target.selectionStart,
                    end: e.target.selectionEnd,
                  });
                }}
                onClick={(e) => {
                  setCursorPos({
                    start: e.target.selectionStart,
                    end: e.target.selectionEnd,
                  });
                }}
              />
              <div className="sendmessagebtngroupMFC">
                <div>
                  <IconButton>
                    <Image />
                  </IconButton>
                  <IconButton>
                    <AttachFile />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      setshowEmoji(!showEmoji);
                    }}
                  >
                    <EmojiEmotionsSharp />
                  </IconButton>
                </div>
                <div>
                  <Button
                    variant="contained"
                    className="sendBtn"
                    endIcon={<SendSharp />}
                    sx={{ bgcolor: "#5858fc" }}
                  >
                    send
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MessageMain>
    </MessageFCWrapper>
  );
};

export default Message;
