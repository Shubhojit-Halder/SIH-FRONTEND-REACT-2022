import React from "react";
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
import { ReactPhotoCollage } from "react-photo-collage";
import VideoCarousel from "./VideoCarousel";


const ManyVideoContent = () => {
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
      {/* <div className="imageDiv"> */}
        {/* {
            VideoMany.map((data,index)=>{
                return(
                    <>
                    <video src={data.source} key={index} controls />
                    </>
                )
            })
        } */}
        <VideoCarousel/>
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

export default ManyVideoContent;
