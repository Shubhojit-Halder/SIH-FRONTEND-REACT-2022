import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myEmoji, Change } from "../../home/slices/EmojimartSlice";
import MDEditor from "@uiw/react-md-editor";

const TextAreaRTE = (props) => {
	const state = useSelector((state) => state.emojimartslice.value);
	const [cursorPos, setCursorPos] = useState({ start: 0, end: 0 });
	const chngState = useSelector((state) => state.emojimartslice.change);
	const addPhotos = useSelector((state) => state.postWrite.mediaPost);
	const value = props.value;
	const setValue = props.setValue;
	const [isopen, setIsOpen] = React.useState(false);
	const [showEmoji, setshowEmoji] = React.useState(false);
	useEffect(() => {
		setValue((prev) => {
			let first = prev.slice(0, cursorPos.start);
			let last = prev.slice(cursorPos.end, prev.length);
			return first + state + last;
		});
		setCursorPos((prev) => {
			return { start: prev.start + 2, end: prev.end + 2 };
		});
	}, [chngState]);
	useEffect(() => {
		setValue("");
	}, []);
	return (
		<>
			<textarea
				id="txtAreaRTE"
				className="txtAreaRTE"
				placeholder="Compose an epic..."
				cols="30"
				rows="6"
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
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
			/>
			<div className="previewRTE">
				{value ? <h4>Preview</h4> : <></>}
				<MDEditor.Markdown
					source={value}
					style={{ whiteSpace: "pre-wrap", background: "#fff", color: "#000" }}
				/>
			</div>
		</>
	);
};

export default TextAreaRTE;
