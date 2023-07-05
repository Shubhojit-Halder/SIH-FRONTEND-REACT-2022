import styled from "styled-components";
const SettingWrapper = styled.div`
	height: 100%;
	box-sizing: border-box;
	overflow: hidden;
	width: 100vw;
	padding-top: 75px;
	background-color: #ecece9a9;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;

	.settingoptions {
		position: relative;
		height: 100vh;
		width: 100%;
		overflow: scroll;
		padding-bottom: 70px;
	}
	.settingoptions::-webkit-scrollbar {
		width: 8px;
	}
	.settingoptions::-webkit-scrollbar-thumb {
		background-color: rgba(128, 128, 128, 0.447);
		border-radius: 10px;
	}
	.griderbap {
		position: absolute;

		position: relative;
		height: 100%;
		width: 100%;

		padding-bottom: 100px;
		top: 50%;
		transform: translate(0, -50%);
		display: grid;
		align-items: center;

		/* justify-content:center; */
	}
	.listheader {
		display: grid;
		grid-template-columns: auto auto;
		align-items: center;
	}
	.menubtn {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.grid {
		display: grid;
		grid-template-columns: 3fr 9fr;
	}
	@media screen and (max-width: 900px) {
		.settingoptions {
			position: absolute;
			z-index: 10;
			width: 250px;
			left: 0;
		}
		.grid {
			display: flex;
			justify-content: center;
		}
	}
	@media screen and (max-width: 713px) {
		.main {
			width: 800px;
		}
	}
	@media screen and (max-width: 683px) {
		.main {
			width: 500px;
			overflow: scroll;
			position: absolute;
			left: 50%;
			transform: translate(-50%, 0);
		}
		.griderbap {
			top: 40px;
		}
	}
	@media screen and (max-width: 480px) {
		.main {
			width: 430px;
		}
	}
	@media screen and (max-width: 423px) {
		.main {
			width: 410px;
		}
	}
`;
export default SettingWrapper;
