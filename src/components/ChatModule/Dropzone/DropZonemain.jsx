import React, { useCallback, useEffect, useState } from "react";
import { DzWrapper } from "./styles/Dz.styled";
import { useDropzone } from "react-dropzone";
import { image } from "@uiw/react-md-editor";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { chngImg } from "../slices/BgImageChng";
import axios from "axios";
import bgImg from "../static/background.png";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const DropZonemain = () => {
  const dispatch = useDispatch();
  const [images, setImages] = useState("");
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImages(reader.result);
      };
      reader.readAsDataURL(file);
    });
    console.log("acceptedFiles", acceptedFiles);
    console.log("rejectedFiles", rejectedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
  });
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (data) => {
      return axios.put("http://localhost:8080/upload/upload_chatbg", data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([
          "user_chat_bg_image",
          localStorage.getItem("user_id"),
        ]);
      },
    }
  );
  return (
    <DzWrapper bgImg={bgImg}>
      <div className="DZmain">
        <IconButton
          onClick={() => {
            dispatch(chngImg(false));
          }}
        >
          <CloseRounded />
        </IconButton>
        <div className="dropzoneDZ" {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? "Drag Active" : "You can drop your files here."}
        </div>

        {images != "" ? <img src={images} className="imagesFromDZ" /> : <></>}
        <div className="btnDZ">
          <Button
            variant="contained"
            onClick={() => {
              mutation.mutate({
                file_path: images,
                user: localStorage.getItem("user_id"),
              });
              dispatch(chngImg(false));
            }}
            sx={{
              width: "300px",
              margin: "5px 0px",
              bgcolor:"#5858fc",
              borderRadius: "20px",
              "&:hover": { bgcolor: "#3a3aa3" },
            }}
          >
            Set Chat Background
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "red",
              width: "300px",
              borderRadius: "20px",
              "&:hover": { bgcolor: "red" },
            }}
            // onClick={() => {
            // 	dispatch(chngImg(false));
            // }}
          >
            Remove Chat Background
          </Button>
        </div>
      </div>
    </DzWrapper>
  );
};

export default DropZonemain;
