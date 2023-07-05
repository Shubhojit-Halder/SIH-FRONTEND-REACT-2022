import React from "react";
import Chathead from "./Chathead";
import Chatlist from "./Chatlist";
import styled from "styled-components";
const Leftsection = (props) => {
	const Main = styled.div`
		width: 100%;
		height: 100%;
	`;
	return (
		<Main>
			<Chathead />
			<Chatlist socket={props.socket} />
		</Main>
	);
};

export default Leftsection;
