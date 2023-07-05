import React from "react";
import EmojiPicker from "emoji-picker-react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { change, setdata, openemoji } from "../slices/EmojiSlice";
import { motion } from "framer-motion";
const EmojiContainer = styled.div`
	position: fixed;
	z-index: 15000;
	background-color: rgba(255, 255, 255, 0.235);
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	align-items: center;
	justify-content: center;
	.emoji-picker {
		position: absolute;
		z-index: 15000;
		padding: 5px;
		border: 2px solid rgb(88, 88, 252);
		border-radius: 10px;
		background-color: rgb(255, 255, 255);
		box-shadow: 2px 2px 3px grey;
		transition: 0.15s padding ease-out;
	}
	aside.emoji-picker-react {
		background-color: rgba(231, 231, 231, 0.179);
		box-shadow: none;
		height: 360px;
		border: 1px solid grey;
		padding: 5px;
	}

	.emoji-picker-react .emoji-group:before {
		background: white;
		color: #0000ffc4;
	}
	.emoji-picker-react .emoji-scroll-wrapper::-webkit-scrollbar {
		width: 5px;
	}
	.emoji-picker-react .emoji-scroll-wrapper::-webkit-scrollbar-thumb {
		background-color: rgb(88, 88, 252);
		border-radius: 10px;
	}
	.emoji-picker-react .emoji-categories {
		background-color: rgba(255, 255, 255, 0.256);
	}
	.emoji-picker-react input.emoji-search {
		border: 2px solid rgb(88, 88, 252);
		border-radius: 20px;
		margin-top: 10px;
	}

	.emoji-picker-react input.emoji-search:focus {
		border-radius: 20px;
		border: 2px solid rgb(88, 88, 252);
	}
	.emoji-picker-react
		.active-category-indicator-wrapper
		.active-category-indicator {
		background-color: rgb(88, 88, 252);
	}
	.emoji-picker-react ul.skin-tones-list {
		margin-top: 10px;
	}
	.emoji-picker-react .emoji-categories button.icn-smileys_people {
		background-image: url("https://thumbs.dreamstime.com/b/cute-man-face-cartoon-cute-man-face-cartoon-vector-illustration-graphic-design-135024353.jpg");
	}
	.emoji-picker-react .emoji-categories button.icn-animals_nature {
		background-image: url("https://www.seekpng.com/png/detail/373-3738599_free-confused-cat-clip-art-clip-art-cartoon.png");
	}
	.emoji-picker-react .emoji-categories button.icn-food_drink {
		background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ5WmreC8E0EmCbsagH3rDB0S65LBAs5LwWw&usqp=CAU");
		/* background-size: 90%; */
	}
	.emoji-picker-react .emoji-categories button.icn-travel_places {
		background-image: url("https://iconarchive.com/download/i43605/treetog/junior/earth.ico");
		background-size: 90%;
	}
	.emoji-picker-react .emoji-categories button.icn-activities {
		background-image: url("https://img.freepik.com/premium-vector/football-icon-ball-sport-game-cartoon-style-isolated-white-background_543062-914.jpg?w=2000");
	}
	.emoji-picker-react .emoji-categories button.icn-objects {
		background-image: url("https://cdn-icons-png.flaticon.com/512/1179/1179267.png");
	}
	.emoji-picker-react .emoji-categories button.icn-symbols {
		background-image: url("data:image/png;base64,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");
	}
	.emoji-picker-react .emoji-categories button.icn-flags {
		background-image: url("https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/red_webpict50_1484337222-1.png");
	}
`;
const EmojiComponent = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.emojibar.change);
	return (
		<>
			<EmojiContainer>
				<motion.div
					animate={{ y: 0 }}
					initial={{ y: 50 }}
					transition={{ duration: 0.5 }}
					className="emoji-picker"
				>
					<EmojiPicker
						styles={{
							tabsFontColor: "rgb(88, 88, 252)",
							searchFontColor: "lightgrey",
							skinTonePickerBackgroundColor: "#284155",
						}}
						onEmojiClick={(emoji, data) => {
							dispatch(change(!state));
							dispatch(setdata(data.emoji));
						}}
					/>
				</motion.div>
			</EmojiContainer>
		</>
	);
};
export default EmojiComponent;
