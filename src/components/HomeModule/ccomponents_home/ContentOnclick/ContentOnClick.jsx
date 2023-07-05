import { CloseRounded } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Contents from "../contents";
import img from "../../home/static/background.png";
import PhotoandVideo from "../AllTypesofContent/PhotoandVideo";
import ProfilePicture from "../profilePicture";
import Menu from "../menu";
import { useSpeechSynthesis } from "react-speech-kit";
import { FcLike, FcComments, FcShare } from "react-icons/fc";
import Comments from "../comments";
import MDEditor from "@uiw/react-md-editor";
import { useDispatch, useSelector } from "react-redux";
import { openShareEditor } from "../../home/slices/postWriteSlice";
import { openLikerNames } from "../../home/slices/LikerOpenSlice";
import { InfoOutlined, MicRounded } from "@mui/icons-material";
import { Writedetail } from "../../home/static/js/Writedetail";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { setComment } from "../../home/slices/CommentSlice";
import ImageInputatComment from "../FileInputsForPost/ImageInputatComment";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  ContainerSectionWrapper,
  ContentWrapperinCSW,
} from "./styles/ContentOnClickWrapper.styled";
import {
  openSpeakMod,
  setMessagetoRead,
} from "../../home/slices/SpeakModuleSlice";
import { OpenContent } from "../../home/slices/ShowSingleContent";
import { useNavigate } from "react-router";
import { ContentOnClickWrapper } from "./styles/ContentOnClickWrapper.styled";
import Navbar from "../../../nav_and_fc/navbar_component/Navbar";
import SeeAll from "../SeeAll/SeeAll";
import TxtandSharePostShower from "../TextEditorANDpostShareShow/TxtandSharePostShower";

const ContentOnClick = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [more, setMore] = React.useState(false);
  const [speak, setSpeak] = useState(false);
  const [isopen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [OpenPhotoInput, setOpenPhotoInput] = React.useState(false);
  var s =
    "**Hellow** this is Hexa Overflow. \n Presenting **DakTicket** Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum pariatur qui aspernatur eligendi numquam quaerat, labore, dolorum impedit corporis dolores libero, harum voluptatum laborum fugiat perspiciatis id veniam placeat doloribus!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas obcaecati autem molestias excepturi optio non soluta quae. Cupiditate fugiat incidunt explicabo qui eligendi tempora maxime optio, illum et voluptatibus quasi eos quibusdam expedita repellat ea blanditiis modi, excepturi consectetur odit! Obcaecati facere rem adipisci aspernatur quaerat, quia, soluta sed aut voluptatum animi natus ipsa ratione nostrum, excepturi deserunt labore ullam illo perferendis sequi quam distinctio nisi. Placeat ratione inventore consectetur explicabo aperiam praesentium laboriosam in, odit delectus modi deleniti omnis voluptatum ipsum error deserunt obcaecati! Nemo nihil incidunt blanditiis, quisquam hic accusantium iure facilis expedita repellendus molestias sint corrupti aut.";
  useEffect(() => {
    dispatch(setComment(value));
  }, [value]);

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
    <>
      <Navbar />
      <TxtandSharePostShower />
      <SeeAll />
      <ContentWrapperinCSW>
        <ContentOnClickWrapper bgImg={img}>
          <Grid
            container
            className="mainContainerBigScreen"
            sx={{
              "@media screen and (max-width: 600px)": { display: "none" },
            }}
          >
            <Grid item sm={6} md={7.5} sx={{ maxHeight: "850px" }}>
              <ContainerSectionWrapper>
                <div className="section2">
                  <PhotoandVideo />
                </div>
              </ContainerSectionWrapper>
            </Grid>
            <Grid item sm={5} md={4.5}>
              <div className="sidebar">
                <div className="uppergrid">
                  <ProfilePicture />
                  <div className="owner">
                    <span className="name">Subhradeep Pal</span>
                    <span className="time">Time : 2 days ago</span>
                    <IconButton
                      onClick={() => {
                        dispatch(openSpeakMod(true));
                        dispatch(setMessagetoRead(s));
                      }}
                    >
                      <MicRounded />
                    </IconButton>
                  </div>
                  <div></div>
                  <div>
                    <Menu />
                  </div>
                </div>
                <div className="textContainer">
                  <span
                    className="textCN"
                    onClick={() => {
                      navigate("/name/post/1");
                    }}
                  >
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
                    style={{
                      fontWeight: "700",
                      cursor: "pointer",
                      fontSize: "12px",
                    }}
                    onClick={() => {
                      setMore((pre) => !pre);
                    }}
                  >
                    {!more ? " Show More..." : " Show Less"}
                  </span>
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
                <div className="maincontainerSmallScreen">
                  <div className="subcontainer">
                    <Grid container>
                      <Grid
                        item
                        xs={11}
                        sm={8}
                        md={6}
                        sx={{ background: "#fff", margin: "20px auto" }}
                      >
                        <Contents />
                      </Grid>
                    </Grid>
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
                        value={value}
                        onChange={(e) => {
                          setValue(e.target.value);
                        }}
                      ></textarea>
                      <IconButton
                        onClick={() => {
                          setOpenPhotoInput(!OpenPhotoInput);
                        }}
                      >
                        <AddPhotoAlternateOutlinedIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          setIsOpen(!isopen);
                        }}
                      >
                        <InfoOutlined />
                      </IconButton>
                    </div>
                  </div>
                  {OpenPhotoInput ? <ImageInputatComment /> : <></>}
                  {isopen ? (
                    <div
                      style={{
                        background: "#fff",
                        color: "#5858fc",
                        padding: "10px",
                      }}
                    >
                      {Writedetail.map((value, index) => {
                        return (
                          <>
                            <span
                              style={{ padding: "20px 0px" }}
                              key={value.index}
                            >
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
              </div>
            </Grid>
          </Grid>
        </ContentOnClickWrapper>
      </ContentWrapperinCSW>
    </>
  );
};

export default ContentOnClick;
