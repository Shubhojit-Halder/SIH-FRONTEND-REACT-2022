import { Delete, FileDownload, Reply } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import LeftFileStyled from "./styles/LeftFIle.styled";
import JsFileDownloader from "js-file-downloader";
import RightFileStyled from "./styles/RightFile.styled";
const RightFile = (props) => {
	const fileUrl =
		"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png";

	const [actions, setActions] = useState(false);
	return (
		<RightFileStyled>
			<div className="right-container">
				<div
					className="right-chat-message-main"
					onMouseEnter={(e) => {
						setActions(true);
					}}
					onMouseLeave={(e) => {
						setActions(false);
					}}
				>
					<div className="right-chat-message-parent">
						<div className="file">
							<span className="textt">
								<IconButton
									style={{ marginRight: 10 }}
									onClick={() => {
										new JsFileDownloader({
											url: fileUrl,
										})
											.then(function () {})
											.catch(function (error) {
												alert("File Not Found");
											});
									}}
								>
									<FileDownload />
								</IconButton>

								{props.file_name ? props.file_name : ""}
							</span>
						</div>

						<div className="file_message">
							<span className="textt">
								{props.message ? props.message : ""}
							</span>
						</div>
						<div className="message-time">
							<span> 12:40 PM</span>
						</div>
					</div>
					<div className="reply-button">
						{actions ? (
							<>
								<IconButton
									size="small"
									sx={{
										bgcolor: "#ffffff73",

										"&:hover": {
											bgcolor: "#ffffff73",
											color: "rgb(88,88,252)",
										},
									}}
								>
									<Reply fontSize="small" />
								</IconButton>
								<IconButton
									size="small"
									sx={{
										bgcolor: "#ffffff73",
										marginX: "5px",
										"&:hover": {
											bgcolor: "#ffffff73",
											color: "rgb(88,88,252)",
										},
									}}
								>
									<Delete fontSize="small" />
								</IconButton>
							</>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</RightFileStyled>
		// <></>
	);
};

export default RightFile;
