import React, { useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Button, IconButton, Paper } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { openShareEditor } from "../../home/slices/postWriteSlice";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Writedetail } from "../../home/static/js/Writedetail";
import MoodRoundedIcon from "@mui/icons-material/MoodRounded";
import EmojiMart from "./EmojiMart";
import { useDispatch, useSelector } from "react-redux";
import { myEmoji, Change } from "../../home/slices/EmojimartSlice";
import { WholeEditorWrapperRichText } from "../../home/styles/WholeEditorWrapperRichText.styled";
import Contents from "../contents";
import ContentShownShare from "../ContentShownShare";
const PostSharingTextbox=()=>{
  const dispatch = useDispatch();
  const state = useSelector((state) => state.emojimartslice.value);
  const chngState = useSelector((state) => state.emojimartslice.change);
  const [value, setValue] = React.useState("*Hello world!!!*");
  const [isopen, setIsOpen] = React.useState(false);
  const [showEmoji, setshowEmoji] = React.useState(false);
  let start;
  let end;
  useEffect(() => {
    const x = document.getElementById("txtAreaRTE");
    start = x.selectionStart;
    end = x.selectionEnd;
    setValue(value.substring(0, start) + state + value.substring(end));
  }, [chngState]);
  return (
    <>
      <WholeEditorWrapperRichText>
        <Paper className="mainPaperRTE">
          <Paper className="subPaperRTE">
            <div className="topDivRTE">
              <IconButton
                onClick={() => {
                  setshowEmoji(!showEmoji);
                }}
              >
                <MoodRoundedIcon />
              </IconButton>
              <h3>Share Post</h3>
              <div className="btnRTE">
                <IconButton
                  onClick={() => {
                    setIsOpen(!isopen);
                  }}
                >
                  <InfoOutlinedIcon />
                </IconButton>
                <IconButton
                  onClick={() => {
                    dispatch(openShareEditor(false));
                  }}
                >
                  <CloseRoundedIcon />
                </IconButton>
              </div>
            </div>
            <hr />
            {showEmoji ? (
              <div style={{ position: "relative", zIndex: "1000" }}>
                <EmojiMart />
              </div>
            ) : (
              <></>
            )}
            <div className="containerEditorRTE">
              {/* <MDEditor value={value} onChange={setValue} /> */}
              {isopen ? (
                <div className="openedRTE">
                  {Writedetail.map((value, index) => {
                    return (
                      <>
                        <span style={{ padding: "20px 0px" }} key={value.index}>
                          {value.value}
                          {value.detail}
                        </span>
                        <br />
                      </>
                    );
                  })}
                </div>
              ) : (
                <></>
              )}
              <textarea
                id="txtAreaRTE"
                className="txtAreaRTE"
                placeholder="Compose an epic..."
                cols="30"
                rows="7"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              ></textarea>
              <div className="previewRTE">
                {value ? <h4>Preview</h4> : <></>}
                <MDEditor.Markdown
                  source={value}
                  style={{ whiteSpace: "pre-wrap",background:"#fff",color:"#000" }}
                />
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection:"column",
                  alignItems: "center",
                  padding: "5px 4%",
                }}
              >
                <ContentShownShare />

                <Button
                  variant="contained"
                  sx={{ bgcolor: "#5858fc", width: "80%",margin:"5px 0px",'@media(max-width:470px)':{
                    width:"100%",
                  } }}
                >
                  Share
                </Button>
              </div>
            </div>
          </Paper>
        </Paper>
      </WholeEditorWrapperRichText>
    </>
  );
}
export default PostSharingTextbox;