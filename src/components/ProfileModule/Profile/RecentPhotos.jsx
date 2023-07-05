import React from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";
import Button from "@mui/material/Button";
import RecentPhotosWrapper from "../styles/RecentPhotos.styled";
const RecentPhotos = () => {
	return (
		<RecentPhotosWrapper>
			<div className="main">
				<div className="seeall">
					<div className="title">
						<span className="followerstitle">Recent Uploads</span>
					</div>
					<Button
						variant="contained"
						endIcon={<CallMadeIcon fontSize="10px" color="action" />}
						color="inherit"
						style={{ borderRadius: "40px", fontSize: "10px" }}
					>
						See All
					</Button>
				</div>
				<div className="allphotos">
					<div className="photos">
						<img width={75} height={75} />
					</div>
					<div className="photos">
						<img width={75} height={75} />
					</div>
					<div className="photos">
						<img width={75} height={75} />
					</div>
				</div>
			</div>
		</RecentPhotosWrapper>
	);
};

export default RecentPhotos;
