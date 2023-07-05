import styled from "styled-components";
const FollowerStyledWrap = styled.div`
	.followerstitle {
		color: white;
		font-size: 14px;
	}
	.progressbar {
		position: relative;
		display: flex;
		justify-content: center;
		padding: 10px;
	}
	.seeall {
		padding-top: 10px;
		display: grid;
		align-items: center;
		height: 52px;
		width: 100%;
		grid-template-columns: 4fr 3fr;
		padding-right: 6px;
		padding-bottom: 10px;
		background: rgb(216, 216, 216);
		background: linear-gradient(
			298deg,
			rgb(247, 253, 255) 0%,
			rgb(201, 231, 250) 38%,
			rgb(117, 117, 248) 38%,
			rgb(88, 88, 252) 100%
		);
		border-radius: 5px 5px 0 0;
	}
	.title {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.followers {
		height: 295px;
		width: 100%;
		overflow-y: scroll;
		padding-bottom: 10px;
	}
	.followers::-webkit-scrollbar {
		display: none;
	}
	.morefollowers {
		height: 50px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-bottom: 20px;
		padding-top: 20px;
	}
	.seeall2 {
		position: static;
		padding-top: 10px;
		display: grid;
		align-items: center;
		height: 52px;
		width: 100%;
		grid-template-columns: 4fr 5fr;
		padding-right: 6px;
		padding-bottom: 10px;
		background: rgb(216, 216, 216);
		background: linear-gradient(
			298deg,
			rgb(247, 253, 255) 0%,
			rgb(201, 231, 250) 38%,
			rgb(117, 117, 248) 38%,
			rgb(88, 88, 252) 100%
		);
		border-radius: 5px 5px 0 0;
	}
	.followers2 {
		height: 140px;
		width: 100%;
		overflow-y: scroll;
		padding-bottom: 10px;
	}
	.followers2::-webkit-scrollbar {
		display: none;
	}
	@media screen and (max-width: 1218px) and (min-width: 1200px) {
		.followerstitle {
			font-size: 11px;
		}
		.seeall {
			grid-template-columns: 3fr 3fr;
		}
	}
`;
export default FollowerStyledWrap;
