import React, { useEffect } from "react";
import ProfilePicture from "../profilePicture";
import Menu from "../menu";
import ReactHtmlParser from "react-html-parser";
import { FcLike, FcComments, FcShare } from "react-icons/fc";
import { IconButton } from "@mui/material";
import Comments from "../comments";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ContentWrapper from "../../home/styles/Contents.styled";
import MDEditor from "@uiw/react-md-editor";
import { useDispatch, useSelector } from "react-redux";
import { openShareEditor } from "../../home/slices/postWriteSlice";
import { openLikerNames } from "../../home/slices/LikerOpenSlice";
import VideoCarousel from "./VideoCarousel";
import PhotoandVideo from "./PhotoandVideo";
const VideoContent = () => {
  const [more, setMore] = React.useState(false);
  var s = "**Hellow** this is Hexa Overflow. \n *Presenting **DaakTicket***";
  const dispatch = useDispatch();
  const state = useSelector((state) => state.postWrite.shareEditVal);
  const openLikechngstate = useSelector(
    (state) => state.LikernamesOpener.value
  );
  const onRightClick = (event) => {
    if (event.nativeEvent.which === 1) {
      console.log("Left click");
    } else if (event.nativeEvent.which === 3) {
      console.log("Right click");
      event.preventDefault();
      dispatch(openLikerNames(true));
    }
  };

  return (
    <ContentWrapper>
      <div className="uppergrid">
        <ProfilePicture />
        <div className="owner">
          <span className="name">Subhradeep Pal</span>
          <span className="time">Time : 3 days ago</span>
        </div>
        <div></div>
        <div>
          <Menu />
        </div>
      </div>
      <div className="textContainer">
        <span className="text">
          {!more ? (
            <MDEditor.Markdown
              source={s.slice(0, 50)}
              style={{ whiteSpace: "pre-wrap" }}
            />
          ) : (
            <MDEditor.Markdown source={s} style={{ whiteSpace: "pre-wrap" }} />
          )}
        </span>
        <br />
        <span
          style={{ fontWeight: "700", cursor: "pointer", fontSize: "12px" }}
          onClick={() => {
            setMore((pre) => !pre);
          }}
        >
          {!more ? " Show More..." : " Show Less"}
        </span>
      </div>
      <div className="imageDiv">
        {/* <video
          src="https://www.youtube.com/watch?v=-pG7XQVRhbw"
          width="100%"
          height="auto"
          autoplay
          controls
        /> */}
        {/* <VideoCarousel/> */}
        <PhotoandVideo/>
      </div>
      <div className="reactDiv">
        <div className="item">
          <IconButton size="large" onContextMenu={onRightClick}>
            <FcLike size={30} />
          </IconButton>
          <span>9</span>
        </div>

        <div className="item">
          <IconButton size="large">
            <FcComments size={30} />
          </IconButton>
          <span>8</span>
        </div>
        <div className="item">
          <IconButton
            size="large"
            onClick={() => {
              dispatch(openShareEditor(true));
            }}
          >
            <FcShare size={30} />
          </IconButton>
          <span>2</span>
        </div>
      </div>
      <div className="commentsection">
        <div className="commentgrid">
          <div className="commentgive">
            <ProfilePicture />
          </div>
          <div className="textarea">
            <textarea
              name=""
              id=""
              className="commentadd"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div>
          <div className="showpreviouscomments">
            <span>
              Show Previous Comments
              <KeyboardArrowUpIcon fontSize="small" />
            </span>
          </div>
          <Comments />
          {/* <Comments />
					<Comments /> */}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default VideoContent;
