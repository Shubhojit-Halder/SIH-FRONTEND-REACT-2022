import styled from "styled-components";
const SignupWrapper = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Acme&family=Bree+Serif&family=El+Messiri&family=Josefin+Sans:wght@100&family=Quicksand:wght@300&display=swap");
	@import url("https://fonts.googleapis.com/css2?family=Lato&family=Lobster&family=Poppins&family=Secular+One&display=swap");
	.main {
		height: 100vh;
		width: 100vw;
		/* background-color: rgba(88, 88, 252, 0.188); */
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px;
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
	.welcome-text {
		margin-top: 70px;
		position: absolute;
		margin-left: 20px;
		font-size: 20px;
		font-family: "Edu NSW ACT Foundation", cursive;
	}
	.signupmain {
		height: 500px;
		width: 800px;
		background: white;
		border-radius: 10px;
		display: flex;
		box-shadow: 2px 2px 2px grey;
		border: 1px solid #8e8b8b;
		padding: 10px;
	}
	.leftsection {
		width: 70%;
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
	.rightsection {
		width: 30%;
		height: 100%;
		background: #ebebeb;
		border-radius: 10px;
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: justify;
		color: #000000;
		.right-text {
			h1 {
				font-family: "Bree Serif", serif;
				color: rgb(88, 88, 252);
				margin: 10px;
				text-align: left;
			}
			p {
				color: #2e2e2e;
				margin: 10px;
				text-align: left;
				font-weight: 600;
				font-family: "Edu NSW ACT Foundation", cursive;
			}
		}
		.inputs {
			width: 100%;
			height: 100%;
			background-color: red;
		}
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
		.signupmain {
			height: 650px;
		}
	}
`;
export default SignupWrapper;
