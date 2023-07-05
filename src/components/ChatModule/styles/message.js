import styled from "styled-components";

const RightChat = styled.div`
	min-height: 50px;
	width: 400px;
	margin-top: 10px;
	margin-bottom: 10px;
	/* margin-left: 25px; */
	left: 10px;
	border-radius: 0 7px 7px 7px;
	position: relative;
	word-wrap: break-word;
	white-space: pre-wrap;
	word-break: break-word;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	z-index: 10;
	background: #ffffff;
	padding: 6px;
	box-shadow: 2px 2px 2px grey;
	.skew {
		height: 20px;
		width: 90%;
		top: 0px;

		background-color: #ffffff;
		position: absolute;
		transform: skewX(30deg);
		-webkit-transform: skewX(30deg);
		-moz-transform: skewX(30deg);
		-ms-transform: skewX(30deg);
		-o-transform: skewX(30deg);
		z-index: 0;
		left: -6px;
		word-wrap: break-word;
		white-space: pre-wrap;
		word-break: break-word;
	}
	.text {
		position: relative;
		color: black;
		z-index: 11;
		width: 100%;
		padding: 5px;
		.parentmessage {
			background: rgba(128, 128, 128, 0.202);
			height: 50px;
			border-radius: 5px;
			padding: 5px;
		}
		.showmorebtn {
			font-size: 13px;
			color: black;
			cursor: pointer;
		}
	}
	.down {
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
	width: 400px;
	margin-top: 10px;
	margin-bottom: 10px;
	/* margin-left: 70px; */
	right: 10px;
	border-radius: 7px;
	background: red;
	position: relative;
	word-wrap: break-word;
	white-space: pre-wrap;
	word-break: break-word;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	/* box-shadow: -2px 2px 2px #353535; */
	z-index: 10;
	background: rgb(88, 88, 252);
	padding: 6px;
	color: white;
	.skew {
		height: 20px;
		width: 90%;
		top: 0;

		background-color: rgb(88, 88, 252);
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
	.text {
		position: relative;
		/* color: black; */
		z-index: 11;
		width: 100%;
		padding: 5px;
		.showmorebtn {
			font-size: 13px;
			color: white;
			cursor: pointer;
		}
		.parentmessage {
			background: #ffffff40;
			height: 50px;
			border-radius: 5px;
			padding: 5px;
		}
	}
	.down {
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
export { RightChat, LeftChat };
