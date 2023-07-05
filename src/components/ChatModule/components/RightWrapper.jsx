import React from "react";
import Rightsection from "./right/Rightsection";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import EmojiAdd from "./right/EmojiAdd";
const RightWrapper = (props) => {
	const { change, value } = useSelector((state) => state.chatopen);
	return (
		<>
			{value ? (
				change ? (
					<div className="right-section">{props.children}</div>
				) : (
					<motion.div
						className="right-section-visible"
						animate={{ scale: 1 }}
						initial={{ scale: 0 }}
					>
						{props.children}
					</motion.div>
				)
			) : (
				<div className="right-section">{props.children}</div>
			)}
			<EmojiAdd />
		</>
	);
};

export default RightWrapper;
