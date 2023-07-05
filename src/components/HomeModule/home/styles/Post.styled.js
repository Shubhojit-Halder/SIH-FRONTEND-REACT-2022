import styled from "styled-components";
const PostWrapper = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;

	.uppergrid {
		display: grid;
		grid-template-columns: 1fr 6fr;
		height: 60%;
		padding-left: 10px;
		align-items: center;
		/* justify-content: center; */

		position: relative;
	}
	.postButtonContainer {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-right: 20px;
	}
	.profilePic {
		/* margin-top: 30px; */
		position: relative;
		top: 50%;
		transform: translate(0, -50%);
	}
	.postButton {
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.114);
		height: 50px;
		width: 100%;
		border-radius: 100px;
		text-align: center;
		display: flex;
		align-items: center;
		/* justify-content: center; */
		padding-left: 30px;
		font-size: 15px;
		color: rgba(0, 0, 0, 0.626);
		/* box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5); */
	}
	.postButton:hover {
		background-color: rgba(128, 128, 128, 0.425);
	}

	.lowergrid {
		padding-top: 5px;
		display: grid;
		grid-template-columns: auto auto auto;
	}
	.loweritem {
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		margin: 0 10px 10px 10px;
		border-radius: 5px;
	}
	.loweritem:hover {
		background-color: rgba(128, 128, 128, 0.167);
	}
	@media screen and (max-width: 600px) {
		.uppergrid {
			grid-template-columns: 1fr 4fr;
		}
		.text {
			font-size: 13px;
		}
	}
`;
export default PostWrapper;
