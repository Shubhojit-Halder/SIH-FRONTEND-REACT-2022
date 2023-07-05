import React from "react";
import { useSelector } from "react-redux";
import EmojiComponent from "../EmojiComponent";
import { motion } from "framer-motion";

const EmojiAdd = () => {
	const state = useSelector((state) => state.emojibar.value);
	return <>{state ? <EmojiComponent /> : <></>}</>;
};

export default EmojiAdd;
