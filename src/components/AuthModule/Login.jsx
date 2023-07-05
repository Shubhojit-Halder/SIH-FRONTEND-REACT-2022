import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "./static/logo_daakticket.png";
import Right from "./Login/Right";
import LoginWrapper from "./styles/Login.styled";
import background from "./static/background.png";
import SnackbarDisp from "./SnackbarDisp";
const Login = (props) => {
	return (
		<>
			<LoginWrapper logo={logo} back={background}>
				<SnackbarDisp/>
				<div className="background"></div>
				<div className="main">
					<motion.div
						className="signupmain"
						animate={{ opacity: 1 }}
						initial={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className="leftsection">
							<motion.div
								className="logo"
								animate={{ scale: 1 }}
								initial={{ scale: 0 }}
								transition={{ duration: 0.5 }}
							></motion.div>
							<motion.span
								className="welcome-text"
								animate={{ scale: 1 }}
								initial={{ scale: 0 }}
								transition={{ duration: 0.5 }}
							>
								Welcome Back !!! :-)
							</motion.span>
							<div className="form">
								<Right socket={props.socket} />
							</div>
						</div>
					</motion.div>
				</div>
			</LoginWrapper>
		</>
	);
};

export default Login;
