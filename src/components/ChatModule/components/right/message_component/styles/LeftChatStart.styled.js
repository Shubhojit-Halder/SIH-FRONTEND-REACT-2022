import styled from "styled-components";
const LeftChatStartStyled = styled.div`
	/* background-color: red; */
	.left-chat-message-main {
		/* background-color: white; */
		width: 80%;
		min-height: 35px;
		margin-bottom: 5px;
		display: flex;
		align-items: center;
	}
	.chat-message-parent {
		background-color: #ffffff;
		display: inline-block;
		position: relative;
		max-width: 90%;
		min-width: 30%;
		min-height: 35px;
		padding: 5px;
		padding-right: 60px;
		padding-left: 10px;
		border-radius: 0 10px 10px 10px;
		word-wrap: break-word;
		white-space: pre-wrap;
		word-break: break-word;
	}
	.text {
		padding-right: 60px;
	}
	.message-time {
		font-size: 10px;
		position: absolute;
		width: 60px;
		border-radius: 10px;
		padding: 5px;
		display: flex;
		align-items: flex-end;
		bottom: 0;
		left: 100%;
		transform: translate(-60px, 0);
		justify-content: flex-end;
	}
	.reply-button {
		/* position: absolute; */
	}
`;
export default LeftChatStartStyled;
