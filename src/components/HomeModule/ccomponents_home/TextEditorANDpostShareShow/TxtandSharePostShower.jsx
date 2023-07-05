import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RichtextEditor from "./RichtextEditor";
import PostSharingTextbox from "./PostSharingTextbox";
import LikerList from "./LikerList";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../Variants/Variants";
import SpeakModuleContainer from "../SpeakModule/SpeakModuleContainer";
import ContentOnClick from "../ContentOnclick/ContentOnClick";
const TxtandSharePostShower = () => {
  const shareState = useSelector((state) => state.postWrite.shareEditVal);
  const state = useSelector((state) => state.postWrite.value);
  const likerlistState = useSelector((state) => state.LikernamesOpener.value);
  const speakModuleState = useSelector((state) => state.speakmodule.value);
  const SingleContent = useSelector((state) => state.showsinglecontent.value);
  return (
    <>
      {state ? (
        <div
          style={{
            position: "fixed",
            zIndex: 1000000,
            width: "100%",
            margin: "80px auto",
          }}
        >
          <RichtextEditor />{" "}
        </div>
      ) : (
        <></>
      )}
      {shareState ? (
        <div
          style={{
            position: "fixed",
            zIndex: 1000000,
            width: "100%",
            margin: "80px auto",
          }}
        >
          <PostSharingTextbox />{" "}
        </div>
      ) : (
        <></>
      )}
      {likerlistState ? (
        <div
          style={{
            position: "fixed",
            zIndex: 1000000,
            width: "100%",
            margin: "100px auto",
          }}
        >
          <LikerList />
        </div>
      ) : (
        <></>
      )}
      {speakModuleState ? (
        <div
          style={{
            position: "fixed",
            zIndex: 1000,
            width: "100%",
            margin: "80px auto",
          }}
        >
          <SpeakModuleContainer />
        </div>
      ) : (
        <></>
      )}
      {/* {SingleContent ? (
        <div
          style={{
            position: "fixed",
            zIndex: 1000,
            width: "100%",
            margin: "80px auto",
          }}
        >
          <ContentOnClick />
        </div>
      ) : (
        <></>
      )} */}
    </>
  );
};

export default TxtandSharePostShower;
