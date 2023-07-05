import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { image } from "@uiw/react-md-editor";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { openDropzoneCoverPic } from "../../slices/CoverselectSlice";
import { CPEWrapper } from "../../styles/CoverPicEditWrapper.styled";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
const CoverphotoEdit = () => {

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
	useEffect(() => {
		console.log(images);
	}, [images]);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			"image/jpeg": [],
			"image/png": [],
		},
	});
	const mutation = useMutation((data) => {
		return axios.put("http://localhost:8080/upload/upload_cover", data);
	});
	return (
		<CPEWrapper>
			<div className="wholeCPE">
				<div className="CPEmain">
					<IconButton
						onClick={() => {
							dispatch(openDropzoneCoverPic(false));
						}}
					>
						<CloseRounded />
					</IconButton>
					<div className="midCPE">
						<div className="dropzoneCPE" {...getRootProps()}>
							<input {...getInputProps()} />
							{isDragActive ? "Drag Active" : "You can drop your files here."}
						</div>
						{images != "" ? (
							<>
								<div
									style={{
										display: "flex",
										justifyContent: "flex-start",
										alignItems: "flex-start",
									}}
								>
									<IconButton
										onClick={() => {
											setImages("");
										}}
									>
										<CloseRounded />
									</IconButton>
									<img src={images} className="imagesFromCPE" />{" "}
								</div>
							</>
						) : (
							<></>
						)}
						<div className="btnCPE">
							<Button
								variant="contained"
								sx={{ bgcolor: "#5858fc",width:"250px",marginTop:"5px","&:hover":{ bgcolor: "#4040c5"} }}
								onClick={() => {
									mutation.mutate({
										file_path: images,
										user: localStorage.getItem("user_id"),
									});
								}}
							>
								Set Cover Picture
							</Button>
							<Button variant="contained" sx={{bgcolor:"red",width:"250px",marginTop:"5px","&:hover":{ bgcolor: "red"}}}>Remove Cover Picture</Button>
						</div>
					</div>
				</div>
			</div>
		</CPEWrapper>
	);

};

export default CoverphotoEdit;
