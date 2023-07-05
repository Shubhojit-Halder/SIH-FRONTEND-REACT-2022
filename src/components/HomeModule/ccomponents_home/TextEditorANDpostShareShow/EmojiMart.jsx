import React, { useEffect } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useDispatch, useSelector } from "react-redux";
import { Change, myEmoji } from "../../home/slices/EmojimartSlice";
const EmojiMart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.emojimartslice.value);
  const chngstate = useSelector((state) => state.emojimartslice.change);
  useEffect(() => {
    console.log(state, chngstate);
  }, [chngstate]);
  return (
    <>
      <Picker
        data={data}
        onEmojiSelect={(object) => {
          dispatch(myEmoji(object.native));
          dispatch(Change(!chngstate));

          console.log(object.native);
        }}
      />
    </>
  );
};
export default EmojiMart;
