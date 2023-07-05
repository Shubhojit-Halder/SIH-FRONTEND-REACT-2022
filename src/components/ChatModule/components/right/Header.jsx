import React, { useEffect } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { KeyboardArrowLeft, MoreVert } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { open, change } from "../../slices/ChatOpen";
import { Head } from "./styles/headStyle";
import { chngImg } from "../../slices/BgImageChng";
import HeaderImage from "./HeaderImageAndName/HeaderImage";
const Header = () => {
	const { data, value } = useSelector((state) => state.chatopen);
	const dispatch = useDispatch();
	useEffect(() => {
		if (window.innerWidth > 530) {
			dispatch(open(false));
		} else {
			dispatch(open(true));
		}
	}, []);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const openn = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Head>
			<div className="full">
				<div className="imagediv">
					{data && <HeaderImage />}

					<span>{data}</span>
				</div>
				<div className="buttons">
					{value ? (
						<IconButton
							onClick={() => {
								dispatch(change(true));
							}}
						>
							<KeyboardArrowLeft sx={{ color: "rgb(88, 88, 252)" }} />
						</IconButton>
					) : (
						<></>
					)}
					<IconButton onClick={handleClick}>
						<MoreVert sx={{ color: "rgb(88, 88, 252)" }} />
					</IconButton>
					<Menu
						open={openn}
						onClose={handleClose}
						anchorOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						transformOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
					>
						<MenuItem onClick={handleClose}>Profile</MenuItem>
						<MenuItem
							onClick={() => {
								dispatch(chngImg(true));
								handleClose();
							}}
						>
							Set Wallpaper
						</MenuItem>
						<MenuItem onClick={handleClose}>Logout</MenuItem>
					</Menu>
					{/* </div> */}
				</div>
			</div>
		</Head>
	);
};

export default Header;
