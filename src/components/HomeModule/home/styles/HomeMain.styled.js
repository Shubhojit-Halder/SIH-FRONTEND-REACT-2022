import styled from "styled-components";
const HomeWrapper = styled.div`
	.main-home {
		box-sizing: border-box;
		height: 100vh;
		width: 100vw;
		padding-bottom: 50px;
		padding-left: 30px;
		padding-top: 90px;
		padding-right: 30px;
		overflow: scroll;
		background: #ededed;
		overflow-x: hidden;
		&::-webkit-scrollbar {
			display: none;
		}
	}
	.section6 {
		min-height: 250px;
		width: 100%;
		border-radius: 5px;
	}
	.section1 {
		height: 200px;
		width: 100%;
		border-radius: 5px;
	}
	.section4 {
		margin-top: 10px;
		height: 250px;
		width: 100%;
		contain: content;
		overflow-y: scroll;
		border-radius: 5px;
	}
	.section2c {
		width: 600px;
	}
	.section5 {
		height: 350px;
		width: 90%;
		margin-top: 5px;
		border-radius: 5px;
	}
	.section3 {
		height: 350px;
		width: 90%;
		border-radius: 5px;
	}
	.section4::-webkit-scrollbar {
		display: none;
	}
	.postContainer {
		width: 100%;
		position: relative;
		left: 50%;
		transform: translate(-48%, 0%);
	}
	.containerSection2 {
		display: flex;
		justify-content: center;
		margin-top: 10px;
		width: 100%;
	}
	.containerSection34 {
		height: max-content;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	@media screen and (max-width: 1200px) {
		.section6,
		.section1,
		.section4 {
			display: none;
		}
	}
	@media screen and (max-width: 600px) {
		.section2c {
			width: 400px;
		}
		.postContainer {
			top: 0;
			transform: translate(-50%, 0%);
		}
		.section3,
		.section5 {
			display: none;
		}
	}
`;
export default HomeWrapper;
