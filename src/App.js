import React from "react";

import Grouppage from "./components/GroupModule/Group/Grouppage";
import IndvidualProfile from "./components/ProfileModule/Main/IndvidualProfile";
import Groupcontentcontainer from "./components/GroupModule/Group/Groupcontentcontainer";

import Otherprofile from "./components/ProfileModule/Main/Otherprofile";
import ContentOnClick from "./components/HomeModule/ccomponents_home/ContentOnclick/ContentOnClick";
// import ContentContainer from "./components/HomeModule/ccomponents_home/contentContainer";
import GroupsettingsWrapper from "./components/GroupModule/settings/GroupsettingsWrapper";
import HomeMain from "./components/HomeModule/home/main/HomeMain";
import Navbar from "./components/nav_and_fc/navbar_component/Navbar";
import Settings from "./components/Settings Module/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditGroupinfo from "./components/ProfileModule/Profile/AllEdits/EditOwninfo";
import EditDp from "./components/ProfileModule/Profile/AllEdits/EditDp";
import FloatChatWrapper from "./components/floatchat/FloatChatWrapper";
import Chat from "./components/ChatModule/components/Chat";
import Auth from "./components/AuthModule/AuthRouter";
import LandingMain from "./components/LandingModule/LandingMain";

import FriendsMain from "./components/FriendsModule/FriendsMain";
import PersonalInfoContainer from "./components/ProfileModule/Profile/AllPersonal/PersonalInfoContainer";
import LikerList from "./components/HomeModule/ccomponents_home/TextEditorANDpostShareShow/LikerList";
import Gamingpagemain from "./components/GamingModule/Gamingpagemain";
import DropZonemain from "./components/ChatModule/Dropzone/DropZonemain";
import DropzoneWrapper from "./components/ChatModule/Dropzone/DropzoneWrapper";
import Allgames from "./components/GamingModule/Allgames";

import { io } from "socket.io-client";

import MessageOnWrapper from "./components/ProfileModule/Profile/Message/MessageOnWrapper";
import { createContext } from "react";
const SocketContext = createContext();
const WorkSocketContext = createContext();
function App() {
	const socket = io("http://localhost:8085/chat", {
		autoConnect: false,
		auth: {
			id: localStorage.getItem("user_id"),
		},
	});
	const workSocket = io("http://localhost:8085/work", {
		autoConnect: false,
		auth: {
			id: localStorage.getItem("user_id"),
		},
	});
	return (
		<>
			<WorkSocketContext.Provider value={workSocket}>
				<SocketContext.Provider value={socket}>
					<BrowserRouter>
						<Routes>
							<Route exact path="/" element={<HomeMain />} />

							<Route exact path="/settings" element={<Settings />} />
							<Route exact path="/profile" element={<IndvidualProfile />} />
							<Route
								exact
								path="/profile/:id"
								element={<Otherprofile socket={socket} />}
							/>
							<Route exact path="/groups/:id" element={<Grouppage />} />
							<Route
								exact
								path="/groups/settings"
								element={<GroupsettingsWrapper />}
							/>
							<Route exact path="/groups/edit" element={<EditGroupinfo />} />
							<Route exact path="/edit" element={<EditDp />} />
							<Route exact path="/chat" element={<Chat socket={socket} />} />
							<Route
								exact
								path="/auth/:loc"
								element={<Auth socket={socket} />}
							/>
							<Route exact path="/profile" element={<IndvidualProfile />} />
							<Route exact path="/profile/:id" element={<Otherprofile />} />
							<Route exact path="/groups/:id" element={<Grouppage />} />
							<Route exact path="name/post/:id" element={<ContentOnClick />} />

							<Route exact path="/welcome" element={<LandingMain />} />
							<Route exact path="/followers" element={<FriendsMain />} />
							<Route exact path="/pi" element={<PersonalInfoContainer />} />
							<Route exact path="/games" element={<Gamingpagemain />} />
							<Route exact path="/gamingzone/allgames" element={<Allgames />} />
							<Route exact path="/dropzone" element={<DropzoneWrapper />} />
							<Route exact path="/fc" element={<FloatChatWrapper />} />
							<Route exact path="/m" element={<MessageOnWrapper />} />
							<Route exact path="/*" element={<h1>Not Found</h1>} />
						</Routes>
					</BrowserRouter>
				</SocketContext.Provider>
			</WorkSocketContext.Provider>
		</>
	);
}
export default App;
export { SocketContext, WorkSocketContext };
