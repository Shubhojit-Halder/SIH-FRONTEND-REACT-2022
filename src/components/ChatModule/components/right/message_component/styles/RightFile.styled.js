import styled from "styled-components";
const RightFileStyled = styled.div`
	/* background-color: red; */
	.left-chat-message-main {
		/* background-color: white; */
		width: 80%;
		min-height: 35px;
		margin-bottom: 5px;
		display: flex;
		align-items: center;
	}
	.right-container {
		display: flex;
		width: 100%;
		justify-content: flex-end;
	}
	.right-chat-message-main {
		width: 80%;
		min-height: 35px;
		transform-origin: center right;
		margin-bottom: 5px;
		display: flex;
		align-items: center;
		flex-direction: row-reverse;
	}
	.right-chat-message-parent {
		background-color: rgb(88, 88, 252);
		display: inline-block;
		position: relative;
		max-width: 90%;
		min-width: 30%;
		min-height: 35px;
		padding: 5px;
		color: white;
		border-radius: 10px;
		/* padding-left: 10px; */
		word-wrap: break-word;
		white-space: pre-wrap;
		word-break: break-word;
	}
	.file_message {
		margin-top: 2px;
		border-radius: 5px;
	}
	.file {
		background-color: #e9e5e54b;
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
		align-items: center;
		bottom: 5px;

		left: 100%;

		transform: translate(-60px, 0);
		justify-content: center;
	}
	.reply-button {
		/* position: absolute; */
	}
`;
export default RightFileStyled;
