import styled from "styled-components";
const LeftFileStyled = styled.div`
	/* background-color: red; */
	.left-chat-message-main {
		/* background-color: white; */
		width: 80%;
		min-height: 35px;
		margin-bottom: 5px;
		display: flex;
		align-items: center;
	}
	.file_message {
		margin-top: 2px;
		border-radius: 5px;
	}
	.file {
		background-color: #e9e5e5;
		border-radius: 5px;
		padding: 5px;
	}
	.chat-message-parent {
		display: inline-block;
		background-color: #fff;
		position: relative;
		max-width: 90%;
		min-width: 30%;
		min-height: 35px;
		padding: 5px;
		border: 5px solid #fff;
		/* padding-right: 60px; */
		border-radius: 10px;
		/* padding-left: 10px; */
		word-wrap: break-word;
		white-space: pre-wrap;
		word-break: break-word;
	}
	.textt {
		margin-right: 60px;
	}
	.message-time {
		font-size: 10px;
		position: absolute;
		width: 60px;
		border-radius: 10px;
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
export default LeftFileStyled;
