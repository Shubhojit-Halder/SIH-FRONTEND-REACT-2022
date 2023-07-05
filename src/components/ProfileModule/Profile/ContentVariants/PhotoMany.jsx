import React from "react";
import { ReactPhotoCollage } from "react-photo-collage";
const photoMany = [
	{
		source:
			"https://images.unsplash.com/photo-1659471202280-742f0e0934c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
	},
	{
		source:
			"https://images.unsplash.com/photo-1659395688635-80a02916c76e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
	},
	{
		source:
			"https://images.unsplash.com/photo-1657299156653-d3c0147ba3ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80jpg",
	},
	{
		source:
			"https://images.unsplash.com/photo-1659447055750-4a85ffdf119e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
	},
	{
		source:
			"https://images.unsplash.com/photo-1659456194848-a61987e81510?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
	},
	{
		source:
			"https://images.unsplash.com/photo-1659456194848-a61987e81510?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
	},
];
// console.log(photoMany.length);
const PhotoMany = (props) => {
	const setting = props.files
		? {
				width: "100%",
				//   height: ["300px","170px"],
				layout: props.files.length == "1" ? [1, 0] : [1, 2],
				photos: props.files.map((value) => {
					return { source: value };
				}),
				height:
					props.files.length == "1" ? ["600px", "0px"] : ["300px", "170px"],

				showNumOfRemainingPhotos: true,
		  }
		: {
				width: "100%",
				//   height: ["300px","170px"],
				layout: photoMany.length == "1" ? [1, 1] : [1, 2],
				photos: photoMany,
				height: photoMany.length == "1" ? ["600px", "0px"] : ["300px", "170px"],

				showNumOfRemainingPhotos: true,
		  };
	return (
		<>
			{props.files ? (
				props.files.length == 1 ? (
					<div className="imageDiv">
						<img src={props.files[0]} width="100%" height="auto" />
					</div>
				) : (
					<>
						{props.files.length > 1 ? (
							<ReactPhotoCollage {...setting} />
						) : (
							<></>
						)}
					</>
				)
			) : (
				<></>
			)}
		</>
	);
};

export default PhotoMany;
