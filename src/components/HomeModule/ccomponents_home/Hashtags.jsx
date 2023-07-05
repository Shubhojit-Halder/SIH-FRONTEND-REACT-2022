import React from "react";
import Button from "@mui/material/Button";
import CallMadeIcon from "@mui/icons-material/CallMade";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import FollowerStyledWrap from "../home/styles/Followers.styled";
import { motion } from "framer-motion";
const Hashtags = () => {
	return (
		<FollowerStyledWrap>
			<div className="seeall2">
				<div className="title">
					<span className="followerstitle">Hashtags</span>
				</div>
				<div>
					<Button
						variant="contained"
						endIcon={<CallMadeIcon fontSize="10px" color="action" />}
						color="inherit"
						style={{ borderRadius: "40px", fontSize: "10px" }}
					>
						Discover More
					</Button>
				</div>
			</div>
			<div className="followers2">
				<div className="hashtags">
					<List
						sx={{
							width: "100%",
							maxWidth: 360,
							bgcolor: "background.paper",
							position: "relative",
							overflow: "auto",
							maxHeight: 300,
							"& ul": { padding: 0 },
						}}
						subheader={<li />}
					>
						<li>
							<ul>
								<ListItem sx={{ pl: 4 }}>
									<ListItemText
										primary={`#marvel `}
										style={{ textDecoration: "underline", cursor: "pointer" }}
									></ListItemText>
								</ListItem>
								<ListItem sx={{ pl: 4 }}>
									<ListItemText
										primary={`#SIH2022 `}
										style={{ textDecoration: "underline", cursor: "pointer" }}
									/>
								</ListItem>
								<ListItem sx={{ pl: 4 }}>
									<ListItemText
										primary={`#hackathon `}
										style={{ textDecoration: "underline", cursor: "pointer" }}
									/>
								</ListItem>
								<ListItem sx={{ pl: 4 }}>
									<ListItemText
										primary={`#Web_3.0 `}
										style={{ textDecoration: "underline", cursor: "pointer" }}
									/>
								</ListItem>
							</ul>
						</li>
					</List>
				</div>
			</div>
		</FollowerStyledWrap>
	);
};

export default Hashtags;
