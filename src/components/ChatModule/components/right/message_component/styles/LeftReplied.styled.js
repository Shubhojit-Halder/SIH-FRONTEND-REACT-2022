import styled from "styled-components";
const LeftRepliedStyled = styled.div`
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
	.chat-message-parent {
		background-color: #ffffff;
		display: inline-block;
		position: relative;
		max-width: 90%;
		min-width: 30%;
		min-height: 35px;
		padding: 5px;
		/* padding-right: 60px; */
		border-radius: 10px;
		padding-left: 10px;
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
	.p-message {
		background-color: #ebebeb;
		position: relative;
		/* left: 20px; */
		width: 100%;
		border-radius: 5px;
		padding: 5px;
		margin-bottom: 5px;

		strong {
			color: rgb(88, 88, 252);
		}
	}
	.right-p-message {
		background-color: #ebebeb42;
		position: relative;
		width: 100%;
		border-radius: 5px;
		padding: 5px;
		margin-bottom: 5px;
		border-left: 2px solid rgb(88, 88, 252);
		cursor: pointer;
		strong {
			color: rgb(88, 227, 252);
		}
	}
	.reply-button {
		/* position: absolute; */
	}
`;
export default LeftRepliedStyled;
