import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button, IconButton } from "@mui/material";
import CloseRounded from "@mui/icons-material/CloseRounded";
import { PhotoInputWrapper } from "./styles/PhotoInputWrapper.styled";
import { useDispatch, useSelector } from "react-redux";
import { setMediaType } from "../../home/slices/postWriteSlice";
import { image } from "@uiw/react-md-editor";
const MediaInput = (props) => {
	const dispatch = useDispatch();
	const media = props.media;
	const setMedia = props.setMedia;
	const MediaType = props.MediaType;
	const setMediatype = props.setMediatype;
	//   const mediaType = useSelector((state) => state.postWrite.mediaType);
	const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
		acceptedFiles.forEach((file) => {
			const reader = new FileReader();
			reader.onload = () => {
				setMedia((prevstate) => [...prevstate, reader.result]);
				let bs64ad = reader.result;
				let type = bs64ad.slice(5, 10);
				setMediatype((prev) => [...prev, type]);
			};
			reader.readAsDataURL(file);
		});
		console.log("acceptedFiles", acceptedFiles);
		console.log("rejectedFiles", rejectedFiles);
	}, []);
	useEffect(() => {
		console.log("Media", media);
	}, [media]);
	useEffect(() => {
		console.log("Media Array", MediaType);
	}, [MediaType]);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			"image/jpeg": [],
			"image/png": [],
			"image/webp": [],
			"video/mp4": [],
			"video/webm": [],
			"video/mpeg": [],
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
					{"Click To Upload Photos/Videos"}
				</div>
				{media.length > 0 && (
					<div
						style={{
							display: "flex",
							alignItems: "flex-start",
							flexWrap: "wrap",
						}}
					>
						{media.map((value, index) => {
							return (
								<>
									<div style={{ display: "flex", alignItems: "flex-start" }}>
										<IconButton
											onClick={() => {
												media.splice(index, 1);
												MediaType.splice(index, 1);
												setMedia((prevstate) => [...prevstate]);
												setMediaType((prevstate) => [...prevstate]);
												console.log(media);
											}}
										>
											<CloseRounded />
										</IconButton>
										{MediaType[index] == "image" ? (
											<img
												src={value}
												key={index}
												className="imagesSelectedPInput"
												style={{
													width: "80px",
													height: "80px",
													margin: "5px",
												}}
											/>
										) : (
											<video
												src={value}
												key={index}
												style={{
													width: "100px",
													height: "100px",
													margin: "5px",
													// muted
												}}
												autoPlay
											/>
										)}
									</div>
								</>
							);
						})}
					</div>
				)}
			</div>
		</PhotoInputWrapper>
	);
};
export default MediaInput;
