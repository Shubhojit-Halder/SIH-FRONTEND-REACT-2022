import React from "react";
import { useSelector } from "react-redux";
import Chatmain from "../components/Chatmain";
import DropZonemain from "./DropZonemain";

const DropzoneWrapper = () => {
  const state = useSelector((state) => state.ChangeBgImg.value);
  return (
    <>
      {state ? (
        <div
          style={{
            position: "fixed",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "30px",
            background: "#00000066",
            height: "100vh",
          }}
        >
          <DropZonemain />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default DropzoneWrapper;
