import styled from "styled-components";
const LoginRightWrapper = styled.div`
	padding-top: 50px;
	width: 100%;
	height: 100%;
	.singup-redirect {
		padding-left: 10px;
		font-weight: 600;
		cursor: pointer;
		color: rgb(88, 88, 252);
	}
	.inputs {
		/* background: grey; */
		height: 90%;
		width: 100%;
		padding: 20px 10px 0 10px;
		/* background: red; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* height: "100%" */
	}
	.regButton {
		display: flex;
		width: 100%;
		justify-content: center;
		position: relative;
		bottom: 23px;
	}
	.loginBTN {
		border-radius: 20px;
	}
	@media screen and (max-width: 600px) {
		.inputs2 {
			height: 100%;
			position: relative;
			bottom: 50%;
			transform: translate(0, 10%);
		}
		.regButton {
			bottom: 30px;
		}
		/* .regButton {
			position: absolute;
			left: 50%;
			transform: translate(-50%, 0);
			bottom: 10px;
		} */
	}
`;
export default LoginRightWrapper;
