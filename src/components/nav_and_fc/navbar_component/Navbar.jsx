import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import GamesIcon from "@mui/icons-material/Games";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Wrapper from "./styles/Navbar.styled";
import logo from "./static/logo_daakticket.png";
import Sidenav from "./sidenavbar/Sidenav";
import FollowerDropddown from "./FollowerDropddown";
import NotificationDropdown from "./Notifications";
import { open, people, notification } from "../slices/Sidebarslice";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import NotificationButton from "./Notification/NotificationButton";
const Navbar = () => {
	const navigate = useNavigate();
	const state = useSelector((state) => state.navbar.value);
	const followers = useSelector((state) => state.navbar.people); // For Pending requests and you may follow floating dropdown
	const notify = useSelector((state) => state.navbar.notification); //For notification section
	const dispatch = useDispatch();
	const [display, setDisplay] = useState("flex");
	const [searchopen, setSearchopen] = useState(false);
	useEffect(() => {
		if (window.innerWidth <= 540) {
			setDisplay("none");
		} else {
			setDisplay("flex");
		}
		// };
	}, []);

	return (
		<>
			<Sidenav />
			<Wrapper>
				<div className="main">
					{searchopen ? (
						<motion.div
							animate={{ scale: 1 }}
							initial={{ scale: 0 }}
							transition={{ duration: 0.5 }}
						>
							<IconButton
								onClick={() => {
									setSearchopen(false);
								}}
							>
								<KeyboardBackspaceIcon
									sx={{ "&:hover": { color: "rgb(88,88,252)" } }}
								/>
							</IconButton>
						</motion.div>
					) : (
						<></>
					)}
					{!searchopen ? (
						<motion.div
							animate={{ scale: 1 }}
							initial={{ scale: 0 }}
							transition={{ duration: 0.5 }}
							style={{ cursor: "pointer" }}
							onClick={() => {
								navigate("/");
							}}
						>
							<img src={logo} className="logo_daakticket" alt="" />
						</motion.div>
					) : (
						<></>
					)}

					<motion.div
						className="searchBar"
						style={{ display: display }}
						animate={{ scale: 1 }}
						initial={{ scale: 0 }}
						transition={{ duration: 0.5 }}
					>
						<input
							type="text"
							placeholder="Search.."
							className="searchinput"
							style={{ zIndex: "12" }}
						/>
					</motion.div>
					{searchopen ? (
						<>
							<motion.div
								className="searchBar"
								animate={{ scale: 1 }}
								initial={{ scale: 0 }}
								transition={{ duration: 0.5 }}
							>
								<input
									type="text"
									placeholder="Search.."
									className="searchinput searchinput22"
									style={{ minWidth: "200px", zIndex: "12" }}
									autoFocus
								/>
							</motion.div>
						</>
					) : (
						<></>
					)}
					{display == "flex" ? (
						<IconButton variant="contained" className="searchBtn">
							<SearchIcon sx={{ "&:hover": { color: "rgb(88,88,252)" } }} />
						</IconButton>
					) : (
						<></>
					)}
					{/* )} */}

					<div className="iconContainer">
						{display == "none" ? (
							<div className="searchbtncontainer">
								<IconButton
									variant="contained"
									className="searchBtnn"
									onClick={() => {
										if (!searchopen) {
											setSearchopen(true);
										}
									}}
								>
									<SearchIcon sx={{ "&:hover": { color: "rgb(88,88,252)" } }} />
								</IconButton>
							</div>
						) : (
							<></>
						)}

						<ul className="nav_icons">
							<li className="homeicon">
								<IconButton
									aria-label="Home"
									color="inherit"
									onClick={() => {
										navigate("/");
									}}
								>
									<HomeRoundedIcon
										sx={{ "&:hover": { color: "rgb(88,88,252)" } }}
									/>
								</IconButton>
								{/* </Link> */}
							</li>
							<li className="peopleicon">
								<IconButton
									aria-label="Home"
									color="inherit"
									onClick={() => {
										if (notify) {
											dispatch(notification(false));
										}
										dispatch(people(!followers));
									}}
								>
									<PeopleAltRoundedIcon
										sx={{ "&:hover": { color: "rgb(88,88,252)" } }}
									/>
								</IconButton>
								{/* </Link> */}
							</li>
							<NotificationButton notify={notify} followers={followers} />
							<li className="gameicon">
								{/* <Link href="/search"> */}
								<IconButton
									aria-label="Games"
									color="inherit"
									onClick={() => {
										navigate("/gamingzone/home");
									}}
								>
									<GamesIcon sx={{ "&:hover": { color: "rgb(88,88,252)" } }} />
								</IconButton>
								{/* </Link> */}
							</li>
							<li className="menuicon">
								{/* <Link href="../Home/menulist"> */}
								<IconButton
									aria-label="Menu"
									color="inherit"
									onClick={() => {
										// dispatch({ type: "sidenav" });
										dispatch(open(true));
										dispatch(notification(false));
										dispatch(people(false));
									}}
								>
									<MenuIcon sx={{ "&:hover": { color: "rgb(88,88,252)" } }} />
								</IconButton>
								{/* </Link> */}
							</li>
						</ul>
					</div>
				</div>
				{followers ? <FollowerDropddown /> : <></>}
				{notify ? <NotificationDropdown /> : <></>}
			</Wrapper>
		</>
	);
};

export default Navbar;
