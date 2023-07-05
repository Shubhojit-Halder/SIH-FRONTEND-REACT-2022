import { MenuBook } from "@mui/icons-material";
import {
	Avatar,
	ListItem,
	ListItemAvatar,
	ListItemText,
	ListSubheader,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
const Menuheader = ({ subheader }) => {
	return (
		<ListSubheader
			component="div"
			id="nested-list-subheader"
			style={{ display: subheader }}
		>
			<ListItem>
				<motion.div
					animate={{ scale: 1 }}
					initial={{ scale: 0 }}
					transition={{ duration: 0.5 }}
				>
					<ListItemAvatar>
						<Avatar
							style={{
								background: "rgb(2,0,36)",
								background:
									"linear-gradient(90deg, rgba(19,6,232,1) 0%, rgba(137,20,255,1) 35%, rgba(0,212,255,1) 100%)",
							}}
						>
							<MenuBook color="white" />
						</Avatar>
					</ListItemAvatar>
				</motion.div>
				<ListItemText primary="Menu Book" secondary="Jan 9, 2014" />
			</ListItem>
		</ListSubheader>
	);
};

export default Menuheader;
