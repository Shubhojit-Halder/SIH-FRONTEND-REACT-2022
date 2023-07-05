import styled from "styled-components";
const RightWrapper = styled.div`
	padding-top: 50px;
	width: 100%;
	height: 100%;
	.redirect-login {
		font-size: 13px;
		position: absolute;
		text-align: center;
		bottom: 70px;
		width: 100%;
		transform: translate(-50%, 0);
		left: 50%;
		span {
			font-weight: 600;
			padding-left: 5px;
			color: rgb(88, 88, 252);
			cursor: pointer;
		}
	}
	.inputs {
		/* background: grey; */
		height: 90%;
		width: 100%;
		padding: 40px 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		/* height: "100%" */
	}
	.regButton {
		display: flex;
		width: 100%;
		justify-content: center;
	}
	@media screen and (max-width: 700px) {
		.regButton {
			position: absolute;
			left: 50%;
			transform: translate(-50%, 0);
			bottom: 10px;
		}
	}
	@media screen and (max-width: 600px) {
		.inputs2 {
			height: 100%;
			position: relative;
			bottom: 50%;
			transform: translate(0, 22%);
		}
		.redirect-login {
			bottom: -10px;
			/* top: 10px; */
		}
		.inputs {
			padding: 30px 10px 10px 10px;
		}
		.regButton {
			position: absolute;
			left: 50%;
			transform: translate(-50%, 0);
			bottom: 10px;
		}
	}
`;
export default RightWrapper;
