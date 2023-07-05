import { Button } from "@mui/material";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { LoadingButton } from "@mui/lab";
const sendPost = (data) => {
	return axios.post("http://localhost:8081/upload", data);
};
const getType = (arr) => {
	if (arr.length === 1) {
		if (arr[0] == "image") {
			return "single-image";
		}
		if (arr[0] == "video") {
			return "single-video";
		}
	} else if (arr.length >= 1) {
		if (arr.includes("video") && arr.includes("image")) {
			return "image-video";
		} else if (arr.includes("video") && !arr.includes("image")) {
			return "many-video";
		} else if (!arr.includes("video") && arr.includes("image")) {
			return "many-image";
		}
	} else return "";
};

const PostButton = (props) => {
	const mutation = useMutation(sendPost, {
		onSuccess: (e) => {
			console.log("Uploaded Post", e.data);
		},
		onError: (e) => {
			console.log("Upload error", e);
		},
	});

	return (
		<LoadingButton
			loading={mutation.isLoading}
			variant="contained"
			sx={{ bgcolor: "#5858fc" }}
			onClick={() => {
				mutation.mutate({
					file_type: getType(props.MediaType),
					desc: props.text,
					files: props.media,
					owner_id: localStorage.getItem("user_id"),
					shared_from: "",
					shared_from_owner: "",
					is_shared: false,
					is_public: true,
					share_owner: "",
				});
			}}
		>
			Post
		</LoadingButton>
	);
};

export default PostButton;
