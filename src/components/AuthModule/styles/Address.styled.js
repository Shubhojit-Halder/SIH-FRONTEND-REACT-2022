import styled from "styled-components";
const AddressWrapper = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Acme&family=Bree+Serif&family=El+Messiri&family=Josefin+Sans:wght@100&family=Quicksand:wght@300&display=swap");
	@import url("https://fonts.googleapis.com/css2?family=Lato&family=Lobster&family=Poppins&family=Secular+One&display=swap");
	.main {
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px;
	}
	.welcome-text {
		margin-top: 70px;
		position: absolute;
		margin-left: 20px;
		font-size: 20px;
		font-family: "Edu NSW ACT Foundation", cursive;
		word-wrap: break-word;
		white-space: pre-wrap;
		word-break: break-word;
	}
	.signupmain {
		height: 440px;
		width: 430px;
		background: white;
		border-radius: 10px;
		display: flex;
		box-shadow: 2px 2px 2px grey;
		border: 1px solid #8e8b8b;
		padding: 10px;
	}
	.leftsection {
		width: 100%;
		height: 100%;
		background: #ffffff;
		border-radius: 10px 0 0 10px;
		.logo {
			background-image: url(${(props) => props.logo});
			height: 50px;
			width: 160px;
			margin-left: 20px;
			margin-top: 15px;
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;
			position: absolute;
		}
	}
	.forgotpassword {
		/* background: red; */
		/* align-items: flex-start; */
		justify-content: center;
		position: relative;
		bottom: 27px;
		font-size: 15px;
		display: flex;
		padding: 15px;
		padding-top: 10px;
	}
	.background {
		height: 130vh;
		width: 100vw;
		position: absolute;
		z-index: -1;
		background-position: center;
		filter: opacity(0.05);
		background-size: 20%;
		background-image: url(${(props) => props.back});
	}
	.form {
		height: 100%;
		width: 100%;
		display: flex;
	}
	@media screen and (max-width: 700px) {
		.rightsection {
			display: none;
		}
		.leftsection {
			width: 100%;
		}
	}
	@media screen and (max-width: 600px) {
		/* .signupmain {
			height: 450px;
		} */
		.welcome-text {
			font-size: 18px;
		}
		.forgotpassword {
			bottom: 29px;
			font-size: 13px;
		}
		.signupmain {
			height: 400px;
			width: 400px;
		}
	}
`;
export default AddressWrapper;
