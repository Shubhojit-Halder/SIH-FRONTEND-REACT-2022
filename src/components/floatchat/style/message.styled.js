import styled from "styled-components";
const MessageMain = styled.div`
	position: fixed;
	min-height: 50px;
	width: 370px;
	border-radius: 5px 5px 0 0;
	box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.479);
	bottom: 10px;
	right: 400px;
	z-index: 100;
	padding: 0;
	background: white;
	border-radius: 5px;
	border: 1px solid #aeaeae;
	.headerMFC {
		width: 100%;
		display: flex;
		align-items: center;
		border-bottom: 1px solid grey;
		background-color: white;
		border-radius: 5px 5px 0 0;
		contain: content;
		color: #1a1414;
	}
	.headerMFC:hover {
		background-color: #8080802e;
	}
	.sendBtnMFC {
		border-radius: 20px;
	}
`;
const ChatBody = styled.div`
	height: 320px;
	width: 100%;
	position: absolute;
	overflow-y: scroll;
	padding-top: 50px;
`;
const RightChat = styled.div`
	min-height: 50px;
	width: 80%;
	margin-top: 10px;
	margin-bottom: 10px;
	margin-left: 25px;

	border-radius: 0 7px 7px 7px;

	position: relative;
	word-wrap: break-word;
	white-space: pre-wrap;
	word-break: break-word;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	z-index: 10;
	background: #e9e9e9;
	padding: 6px;

	.skewFloatChat {
		height: 30px;
		width: 90%;
		top: 0;

		background-color: #eaeaea;
		position: absolute;
		transform: skewX(30deg);
		-webkit-transform: skewX(30deg);
		-moz-transform: skewX(30deg);
		-ms-transform: skewX(30deg);
		-o-transform: skewX(30deg);
		z-index: 0;
		left: -4px;
		word-wrap: break-word;
		white-space: pre-wrap;
		word-break: break-word;
	}
	.textFloatChat {
		position: relative;
		color: black;
		z-index: 11;
		width: 100%;
		.parentmessageFloatChat {
			background: rgba(128, 128, 128, 0.202);
			height: 50px;
			border-radius: 5px;
			padding: 5px;
		}
		.showmorebtnFloatChat {
			font-size: 13px;
			color: black;
			cursor: pointer;
		}
	}
	.downFloatChat {
		width: 100%;
		/* background-color: green; */
		font-size: 10px;
		color: grey;
		display: flex;
		justify-content: flex-end;
		span {
			padding-right: 10px;
			cursor: pointer;
		}
	}
`;
const LeftChat = styled.div`
	min-height: 50px;
	width: 80%;
	margin-top: 10px;
	margin-bottom: 10px;
	margin-left: 50px;

	border-radius: 7px;

	position: relative;
	word-wrap: break-word;
	white-space: pre-wrap;
	word-break: break-word;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	z-index: 10;
	background: #7474fc;
	padding: 6px;
	color: white;
	.skewFloatChat {
		height: 30px;
		width: 90%;
		top: 0;

		background-color: #7474fc;
		position: absolute;
		transform: skewX(-30deg);
		-webkit-transform: skewX(-30deg);
		-moz-transform: skewX(-30deg);
		-ms-transform: skewX(-30deg);
		-o-transform: skewX(-30deg);
		z-index: 0;
		right: -4px;
		word-wrap: break-word;
		white-space: pre-wrap;
		word-break: break-word;
	}
	.textFloatChat {
		position: relative;
		/* color: black; */
		z-index: 11;
		width: 100%;
		.showmorebtnFloatChat {
			font-size: 13px;
			color: white;
			cursor: pointer;
		}
		.parentmessageFloatChat {
			background: #5858fc;
			height: 50px;
			border-radius: 5px;
			padding: 5px;
		}
	}
	.downFloatChat {
		width: 100%;
		/* background-color: green; */
		font-size: 10px;
		/* color: grey; */
		display: flex;
		justify-content: flex-end;
		span {
			padding-right: 10px;
			cursor: pointer;
		}
	}
`;
export { MessageMain, RightChat, LeftChat };
