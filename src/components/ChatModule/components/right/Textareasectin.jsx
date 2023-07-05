import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Fab } from "@mui/material";
import * as Icons from "@mui/icons-material";
import containsDoubleByte from "./static/emojiClickHandler";
import SendButton from "../SendButton";

const Textareasectin = () => {
	const { change, data } = useSelector((state) => state.emojibar);
	const [text, setText] = useState("");
	useEffect(() => {
		setText((prev) => {
			let first = prev.slice(0, cursorPos.start);
			let last = prev.slice(cursorPos.end, prev.length);
			return first + data + last;
		});
		setCursorPos((prev) => {
			return { start: prev.start + 2, end: prev.end + 2 };
		});
	}, [change]);
	useEffect(() => {
		setText("");
	}, []);

	const [cursorPos, setCursorPos] = useState({ start: 0, end: 0 });
	return (
		<>
			<motion.div
				className="textfield"
				animate={{ scale: 1 }}
				initial={{ scale: 0 }}
				transition={{ duration: 0.6 }}
			>
				<textarea
					multiline
					type="text"
					id="messagebox"
					placeholder="Write you message here..."
					value={text}
					onChange={(e) => {
						setText(e.target.value);
						setCursorPos({
							start: e.target.selectionStart,
							end: e.target.selectionEnd,
						});
					}}
					onSelect={(e) => {
						setCursorPos({
							start: e.target.selectionStart,
							end: e.target.selectionEnd,
						});
					}}
					onClick={(e) => {
						setCursorPos({
							start: e.target.selectionStart,
							end: e.target.selectionEnd,
						});
					}}
					onKeyDown={(e) => {
						if (["ArrowDown", "ArrowUp"].includes(e.key)) {
							e.preventDefault();
						}
						if (e.key === "Home") {
							setCursorPos({
								start: 0,
								end: 0,
							});
						}
						if (e.key === "End") {
							setCursorPos({ start: text.length, end: text.length });
						}

						if (e.key == "ArrowLeft") {
							setCursorPos((prev) => {
								if (containsDoubleByte(text[prev.start - 1])) {
									return {
										...prev,
										start: prev.start - 2,
										end: prev.end - 2,
									};
								}
								return {
									...prev,
									start: prev.start - 1,
									end: prev.end - 1,
								};
							});
						} else if (e.key == "ArrowRight") {
							setCursorPos((prev) => {
								if (containsDoubleByte(text[prev.start])) {
									return {
										...prev,
										start: prev.start + 2,
										end: prev.end + 2,
									};
								}
								return {
									...prev,
									start: prev.start + 1,
									end: prev.end + 1,
								};
							});
						}
					}}
				/>
			</motion.div>
			<SendButton data={text} setData={setText} />
		</>
	);
};

export default Textareasectin;
