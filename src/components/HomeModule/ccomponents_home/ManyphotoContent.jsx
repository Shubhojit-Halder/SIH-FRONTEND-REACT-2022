import React from "react";
import ProfilePicture from "./profilePicture";
import Menu from "./menu";
import ReactHtmlParser from "react-html-parser";
import { FcLike, FcComments, FcShare } from "react-icons/fc";
import { IconButton } from "@mui/material";
import Comments from "./comments";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ContentWrapper from "../home/styles/Contents.styled";
import MDEditor from "@uiw/react-md-editor";
import { useDispatch, useSelector } from "react-redux";
import { openShareEditor } from "../home/slices/postWriteSlice";
import { ReactPhotoCollage } from "react-photo-collage";
import Dp from "../home/static/Dp.jpg";

const photoMany = [
  {
    source:
      "https://images.unsplash.com/photo-1659471202280-742f0e0934c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    source:
      "https://images.unsplash.com/photo-1659395688635-80a02916c76e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    source:
      "https://images.unsplash.com/photo-1657299156653-d3c0147ba3ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80jpg",
  },
  {
    source:
      "https://images.unsplash.com/photo-1659447055750-4a85ffdf119e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    source:
      "https://images.unsplash.com/photo-1659456194848-a61987e81510?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    source:
      "https://images.unsplash.com/photo-1659456194848-a61987e81510?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
  },
];
// console.log(photoMany.length);
const setting = {
  width: "100%",
  //   height: ["300px","170px"],
  layout: photoMany.length == "1" ? [1, 1] : [1, 2],
  photos: photoMany,
  height: photoMany.length == "1" ? ["600px", "0px"] : ["300px", "170px"],

  showNumOfRemainingPhotos: true,
};

const ManyphotoContent = () => {
  const [more, setMore] = React.useState(false);
  var s = "**Hellow** this is Hexa Overflow. \n *Presenting **DaakTicket***";
  const dispatch = useDispatch();
  const state = useSelector((state) => state.postWrite.shareEditVal);
  return (
    <ContentWrapper>
      <div className="uppergrid">
        <ProfilePicture />
        <div className="owner">
          <span className="name">Subhradeep Pal</span>
          <span className="time">Time : 2 days ago</span>
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
              style={{
                whiteSpace: "pre-wrap",
                background: "#fff",
                color: "#000",
              }}
            />
          ) : (
            <MDEditor.Markdown
              source={s}
              style={{
                whiteSpace: "pre-wrap",
                background: "#fff",
                color: "#000",
              }}
            />
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
      {/* <div className="imageDiv"> */}
      <ReactPhotoCollage {...setting} />
      {/* </div> */}
      <div className="reactDiv">
        <div className="item">
          <IconButton size="large">
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

export default ManyphotoContent;
