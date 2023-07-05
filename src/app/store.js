import { configureStore } from "@reduxjs/toolkit";
import Sidebarslice from "../components/nav_and_fc/slices/Sidebarslice";
import homeSlice from "../components/HomeModule/home/slices/homeSlice";
import SettingListSlice from "../components/Settings Module/slices/SettingListSlice";
import dpSlice from "../components/ProfileModule/slices/dpSlice";
import SettingRouting from "../components/Settings Module/slices/SettingRouting";
import EmojiSlice from "../components/ChatModule/slices/EmojiSlice";
import ChatOpen from "../components/ChatModule/slices/ChatOpen";
import postWriteSlice from "../components/HomeModule/home/slices/postWriteSlice";
import EmojimartSlice from "../components/HomeModule/home/slices/EmojimartSlice";
import PiSlice from "../components/ProfileModule/slices/PiSlice";
import LikerOpenSlice from "../components/HomeModule/home/slices/LikerOpenSlice";
import SeeALLSlice from "../components/HomeModule/home/slices/OpenSEEALL";
import BgImageChng from "../components/ChatModule/slices/BgImageChng";
import FloatChatSlice from "../components/floatchat/slices/FloatChatSlice";
import CoverselectSlice from "../components/ProfileModule/slices/CoverselectSlice";
import openFollowerList from "../components/FriendsModule/slices/FollowerListSlice";
import openMsgReq from "../components/ProfileModule/slices/MessageReqSlice";
import ChatReply from "../components/ChatModule/slices/ReplyMessage";
import MessageSendSlice from "../components/ChatModule/slices/MessageSendSlice";
import ErrorMessageSlice  from "../components/AuthModule/slices/ErrorMessages";
import CommentSlice from "../components/HomeModule/home/slices/CommentSlice";
import SpeakModuleSlice from "../components/HomeModule/home/slices/SpeakModuleSlice";
import ShowSingleContent from "../components/HomeModule/home/slices/ShowSingleContent";
export const store = configureStore({
	reducer: {
		navbar: Sidebarslice,
		home: homeSlice,
		settinglist: SettingListSlice,
		dp: dpSlice,
		postWrite: postWriteSlice,
		settingrouting: SettingRouting,
		emojibar: EmojiSlice,
		chatopen: ChatOpen,
		emojimartslice: EmojimartSlice,
		PiSlicing: PiSlice,
		LikernamesOpener: LikerOpenSlice,
		seeall: SeeALLSlice,
		ChangeBgImg: BgImageChng,
		floatChatOpener: FloatChatSlice,
		CoverChngSlice: CoverselectSlice,
		followerList: openFollowerList,
		ChatReply: ChatReply,
		MessageSend: MessageSendSlice,
		msgreq:openMsgReq,
		commentslice:CommentSlice,
		speakmodule:SpeakModuleSlice,
		showsinglecontent:ShowSingleContent,
		errormessageslice:ErrorMessageSlice,
	},
});
