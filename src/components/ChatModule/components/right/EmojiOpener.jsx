import { EmojiEmotions } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openemoji } from "../../slices/EmojiSlice";
const EmojiOpener = () => {
	const emojibar = useSelector((state) => state.emojibar.value);
	const dispatch = useDispatch();
	return (
		<IconButton
			onClick={() => {
				dispatch(openemoji(!emojibar));
			}}
		>
			<EmojiEmotions />
		</IconButton>
	);
};

export default EmojiOpener;
