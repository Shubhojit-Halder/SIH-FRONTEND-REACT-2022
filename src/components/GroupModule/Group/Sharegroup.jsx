import React from "react";
import ProfilePicture from "./profilePicture";
import ReactHtmlParser from "react-html-parser";
import Groupcontent from "./Groupcontent";
import SharegroupWrapper from "../styles/Sharegroup.styled";
import FadeMenu from "../../HomeModule/ccomponents_home/menu";
const Sharegroup = () => {
  const [more, setMore] = React.useState(false);
  const [more2, setMore2] = React.useState(false);
  var s =
    "<span>Project<span> Is Done by ,\nHexa Overflow\nHexa Overflow\nHexa Overflow\nHexa Overflow";
  return (
    <SharegroupWrapper>
      <div className="smain2">
        <div className="suppergrid">
          <ProfilePicture />
          <div className="sowner">
            <span
              className="sname"
            >{`Shubhojit Halder Shared Hexaoverflow's post`}</span>
            <span className="time">Time : 2 days ago</span>
          </div>
          <div className="owner"></div>
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
        <div className="ownercontainer">
          <Groupcontent />
        </div>
      </div>
    </SharegroupWrapper>
  );
};

export default Sharegroup;
