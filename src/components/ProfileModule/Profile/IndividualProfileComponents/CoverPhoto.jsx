import React from "react";
import default_cover from "../../static/default-cover.png";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CoverPhoto = () => {
	const query = useQuery(
		["user_cover_image", localStorage.getItem("user_id")],
		() => {
			return axios.get(
				"http://localhost:8080/fetch/cover?user=" +
					localStorage.getItem("user_id")
			);
		},
		{
			onError: (e) => {
				console.log(e);
			},
		}
	);
	return (
		<img
			className="CoverImgIndpage"
			src={query.isSuccess ? query.data.data.url : default_cover}
			alt=""
		/>
	);
};

export default CoverPhoto;
