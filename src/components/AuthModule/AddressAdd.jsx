import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "./static/logo_daakticket.png";
import Right from "./AddressAdd/Right";
import background from "./static/background.png";
import AddressWrapper from "./styles/Address.styled";
const AddressAdd = () => {
	return (
		<>
			<AddressWrapper logo={logo} back={background}>
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
								Set Up Address and Date of Birth
							</motion.span>
							<div className="form">
								<Right />
							</div>
						</div>
					</motion.div>
				</div>
			</AddressWrapper>
		</>
	);
};

export default AddressAdd;
