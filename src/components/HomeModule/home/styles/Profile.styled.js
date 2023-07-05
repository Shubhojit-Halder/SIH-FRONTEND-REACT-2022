import styled from "styled-components";
const Profile = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Poppins&family=Secular+One&display=swap");
	position: relative;
	min-height: 100%;
	width: 100%;
	box-sizing: border-box;

	.imageDiv {
		width: 100%;
		height: 80px;
		border-radius: 5px 5px 0 0;
		background: linear-gradient(
			298deg,
			rgb(247, 253, 255) 0%,
			rgb(201, 231, 250) 38%,
			rgb(117, 117, 248) 38%,
			rgb(88, 88, 252) 100%
		);
		position: relative;
	}

	.profileImage {
		height: 100px;
		width: 100px;
		background-color: black;
		position: absolute;
		z-index: 10;
		left: 50%;
		top: 30px;
		transform: translate(-50%, 0);
		border-radius: 50%;
		border: 5px solid white;
		outline: 2px solid black;
	}
	.image {
		border-radius: 50%;
	}
	.profileName {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		border-radius: 0 0 5px 5px;
	}
	.name {
		color: black;
		font-size: 20px;
		font-family: "Poppins", sans-serif;
		text-transform: uppercase;
		padding: 20px 20px 10px 20px;
		overflow-wrap: break-word;
		position: relative;
		word-wrap: break-word;
		white-space: pre-wrap;
		word-break: break-word;
		font-weight: bolder;
		cursor: pointer;
	}
	.name:hover {
		text-decoration: underline;
	}
	.nameContainer {
		display: flex;
		align-items: center;
		text-align: center;
		flex-direction: column;
		margin-top: 35px;
		padding: 10px;
		width: 100%;
	}
	.identity {
		font-family: "Poppins", sans-serif;
		padding: 0 20px;
		padding-bottom: 25px;
		font-size: 14px;
		white-space: pre-wrap;
		word-break: break-word;
		font-weight: bolder;
	}
`;
export default Profile;
