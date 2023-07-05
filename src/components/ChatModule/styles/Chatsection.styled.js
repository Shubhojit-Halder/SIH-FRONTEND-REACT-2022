import styled from "styled-components";
const ChatsectionWrapper = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	/* background: #bfefff; */
	padding-left: 20px;
	padding-right: 20px;
	/* padding-bottom: 300px; */
	overflow: scroll;
	.gap_creator {
		height: 120px;
	}
	.fab_chatsection {
		position: fixed;
		right: 30px;
		bottom: 100px;
		z-index: 100;
	}
	.ChatholderLeft {
		width: 100%;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.ChatholderRight {
		width: 100%;
		/* background-color: red; */
		position: relative;

		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	&::-webkit-scrollbar {
		width: 5px;
	}
	&::-webkit-scrollbar-thumb {
		background: rgb(88, 88, 252);
		border-radius: 5px;
	}
`;
export default ChatsectionWrapper;
