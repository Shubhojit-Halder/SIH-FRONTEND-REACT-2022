//akdom bhetorer ta
import React from "react";
import ProfilePicture from "./profilePicture";
// import Menu from "./menu";
import ReactHtmlParser from "react-html-parser";
// import Image from "next/image";
import { FcLike, FcComments, FcShare } from "react-icons/fc";
import { IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import GroupcontentWrapper from "../styles/GroupcontentWrapper.styled";
import FadeMenu from "../../HomeModule/ccomponents_home/menu";
import AlignItemsList from "../../HomeModule/ccomponents_home/comments";
// import img from '../../../public/images/food.jpg'
const Groupcontent = () => {
  const [more, setMore] = React.useState(false);
  var s =
    "<span>Project<span> Is Done by ,\nHexa Overflow\nHexa Overflow\nHexa Overflow\nHexa Overflow";
  return (
    <>
      <GroupcontentWrapper>
        <div className="main">
          <div className="uppergrid">
            <ProfilePicture />
            <span className="groupimagediv" height={25} width={25}>
              <img
                className="groupimage"
                width={25}
                height={25}
              />
            </span>
            <div className="owner">
              <span className="groupname">Hexaoverflow Group</span>
              <span className="time">Pubali Dey</span>
              <span className="time">Time : 2 days ago</span>
            </div>
            <div>
              <FadeMenu/>
            </div>
          </div>
          <div className="textContainer">
            <span className="text">
              {!more ? ReactHtmlParser(s.slice(0, 50)) : ReactHtmlParser(s)}
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
            <img
              src="https://i.pinimg.com/550x/4a/6f/59/4a6f59296f90c11d77744720ca10d1af.jpg"
              width="100%"
              height="auto"
            />
          </div>
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
              <IconButton size="large">
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
              <AlignItemsList/>
              {/* <Comments />
					<Comments /> */}
            </div>
          </div>
        </div>
      </GroupcontentWrapper>
    </>
  );
};

export default Groupcontent;
