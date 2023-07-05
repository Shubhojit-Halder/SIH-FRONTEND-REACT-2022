import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import default_cover from "../../static/default-cover.png";
const CoverPicture = (props) => {
	console.log(props.user_id);
	const query = useQuery(
		["user_cover_image", props.user_id],
		() => {
			return axios.get(
				"http://localhost:8080/fetch/cover?user=" + props.user_id
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
			className="CoverImgOthprof"
			src={query.isSuccess ? query.data.data.url : default_cover}
			alt=""
		/>
	);
};

export default CoverPicture;
