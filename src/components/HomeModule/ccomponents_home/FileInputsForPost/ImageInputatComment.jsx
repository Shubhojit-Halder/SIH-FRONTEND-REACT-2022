import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button, IconButton } from "@mui/material";
import CloseRounded from "@mui/icons-material/CloseRounded";
import { PhotoInputWrapper } from "./styles/PhotoInputWrapper.styled";
import { useDispatch, useSelector } from "react-redux";
import { setMediaType } from "../../home/slices/postWriteSlice";
import { image } from "@uiw/react-md-editor";
import { setImg } from "../../home/slices/CommentSlice";
const ImageInputatComment = () => {
  const dispatch = useDispatch();
  const [media, setMedia] = useState("");
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
    dispatch(setImg(media));
  }, [media]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/webp": [],
    },
  });

  return (
    <PhotoInputWrapper>
      <div className="PImain">
        <div
          className="dropzonePI"
          {...getRootProps()}
          style={{ border: "1px dashed black", padding: "5px" }}
        >
          <input {...getInputProps()} />
          {isDragActive ? "Drag Active" : `Click here to drop your image.`}
        </div>
        {media != "" && (
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <IconButton
              onClick={() => {
                setMedia("");
                console.log(media);
              }}
            >
              <CloseRounded />
            </IconButton>
            <img
              src={media}
              className="imagesSelectedPInput"
              style={{ width: "80px", height: "80px", margin: "5px" }}
            />
          </div>
        )}
      </div>
    </PhotoInputWrapper>
  );
};

export default ImageInputatComment;
