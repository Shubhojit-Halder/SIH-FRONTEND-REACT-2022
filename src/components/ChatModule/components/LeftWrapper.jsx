import React from "react";
import Leftsection from "./left/Leftsection";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const LeftWrapper = (props) => {
	const { change, value } = useSelector((state) => state.chatopen);
	return (
		<>
			{value ? (
				change ? (
					<motion.div
						className="left-section"
						animate={{ scale: 1 }}
						initial={{ scale: 0 }}
					>
						{props.children}
					</motion.div>
				) : (
					<></>
				)
			) : (
				<div className="left-section">{props.children}</div>
			)}
		</>
	);
};

export default LeftWrapper;
