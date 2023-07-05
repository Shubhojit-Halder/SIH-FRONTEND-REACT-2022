import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button, IconButton } from "@mui/material";
import CloseRounded from "@mui/icons-material/CloseRounded";
import { PhotoInputWrapper } from "./styles/PhotoInputWrapper.styled";
import { useDispatch, useSelector } from "react-redux";
import { setMediaType } from "../../home/slices/postWriteSlice";
import { image } from "@uiw/react-md-editor";
const PhotoInput = () => {
  const dispatch = useDispatch();
  const [media, setMedia] = useState([]);
  const mediaType = useSelector((state) => state.postWrite.mediaType);
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setMedia((prevstate) => [...prevstate, reader.result]);
      };
      reader.readAsDataURL(file);
    });
    console.log("acceptedFiles", acceptedFiles);
    console.log("rejectedFiles", rejectedFiles);
  }, []);
  useEffect(() => {
    console.log(media);
  }, [media]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept:
      mediaType == "photo"
        ? {
            "image/jpeg": [],
            "image/png": [],
            "image/webp": [],
          }
        : {
            "video/mp4": [],
            "video/webm": [],
            "video/mpeg": [],
          },
  });

  return (
    <PhotoInputWrapper>
      {mediaType == "" ? (
        <>
          <div className="mediaSelectBtnDivPhotoInput">
            <span>What do you want to add?</span>
            <div className="btnSelectPhotoInput">
              <Button
                sx={{ color: "#5858fc" }}
                onClick={() => {
                  dispatch(setMediaType("photo"));
                }}
              >
                Photos
              </Button>
              <Button
                sx={{ color: "#5858fc" }}
                onClick={() => {
                  dispatch(setMediaType("video"));
                }}
              >
                Videos
              </Button>{" "}
            </div>
          </div>
        </>
      ) : (
        <div className="PImain">
          <div
            className="dropzonePI"
            {...getRootProps()}
            style={{ border: "1px dashed black", padding: "5px" }}
          >
            <input {...getInputProps()} />
            {isDragActive
              ? "Drag Active"
              : `Click here to drop your ${mediaType}s.`}
          </div>
          {media.length > 0 && (
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              {media.map((value, index) => {
                return (
                  <>
                    <IconButton
                      onClick={() => {
                        media.splice(index, 1);
                        setMedia((prevstate) => [...prevstate]);
                        console.log(media);
                      }}
                    >
                      <CloseRounded />
                    </IconButton>
                    {mediaType == "photo" ? (
                      <>
                      <img
                        src={value}
                        key={index}
                        className="imagesSelectedPInput"
                        style={{ width: "80px", height: "80px", margin: "5px" }}
                      />
                      </>
                    ) : (
                      <video
                        src={value}
                        key={index}
                        style={{
                          width: "100px",
                          height: "100px",
                          margin: "5px",
                        }}
                        autoPlay
                      />
                    )}
                  </>
                );
              })}
            </div>
          )}
        </div>
      )}
    </PhotoInputWrapper>
  );
};

export default PhotoInput;
