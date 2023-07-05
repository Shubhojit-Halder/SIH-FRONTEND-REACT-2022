import React from "react";
import Contents from "../Content/contents";
import PhotoMany from "./PhotoMany";
import VideoCarousel from "./VideoCarousel";

const RouterContents = (props) => {
	if (
		props.value._source.file_type === "single-image" ||
		props.value._source.file_type === "many-image" ||
		props.value._source.file_type === ""
	)
		return (
			<>
				<Contents
					user_id={props.value._source.owner_id}
					time={props.value._source.time}
					files={props.value._source.access_url}
					desc={props.value._source.desc}
					content={<PhotoMany files={props.value._source.access_url} />}
				/>
			</>
		);
	else if (
		props.value._source.file_type === "single-video" ||
		props.value._source.file_type === "many-video"
	) {
		return (
			<>
				<Contents
					user_id={props.value._source.owner_id}
					time={props.value._source.time}
					files={props.value._source.access_url}
					desc={props.value._source.desc}
					content={
						<VideoCarousel VideoProps={props.value._source.access_url} />
					}
				/>
			</>
		);
	}
};

export default RouterContents;
