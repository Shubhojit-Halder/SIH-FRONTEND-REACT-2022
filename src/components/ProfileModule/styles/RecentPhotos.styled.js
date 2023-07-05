import styled from "styled-components";

const RecentPhotosWrapper = styled.section`
	box-shadow: 1px 1px 3px grey;
	border-radius: 5px;
	width: 250px;

	.seeall {
		/* position:fixed; */
		padding: 10px 6px 10px 10px;
		/* display: grid; */
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 52px;
		width: 100%;
		/* border: 1px solid grey; */
		border-radius: 5px 5px 0px 0px;
		/* border-bottom: 1px solid; */
		/* justify-content:space-between; */
		grid-template-columns: 5fr 5fr;
		/* background: linear-gradient(298deg, rgb(247, 253, 255) 0%, rgb(92, 92, 92) 38%, rgb(78, 78, 78) 38%, rgb(20, 20, 20) 100%); */
		/* border-radius:10px 10px 10px 10px; */
		background: linear-gradient(
			298deg,
			rgb(247, 253, 255) 0%,
			rgb(201, 231, 250) 38%,
			rgb(117, 117, 248) 38%,
			rgb(88, 88, 252) 100%
		);
	}
	.followerstitle {
		font-size: 0.85rem;

		font-weight: 500;
		color: white;
	}

	.allphotos {
		border: 1px solid #d2d2d2;
		border-top: none;
		display: grid;
		padding: 10px 5px;
		grid-template-columns: auto auto auto auto;
		grid-gap: 2px;
		justify-content: center;
		overflow-y: scroll;
		border-radius: 4px;
	}
	.allphotos::-webkit-scrollbar {
		margin-top: 10px;
		width: 2px;
		border-radius: 10px;
	}
	.allphotos::-webkit-scrollbar-thumb {
		border-radius: 20px;
		background-color: rgb(61, 61, 61);
	}
	.photos {
		width: 75px;
		height: 75px;
		border-radius: 4px;
		/* margin: 2px 3px 2px 0px; */
	}
	@media (max-width: 700px) {
		.followerstitle {
			font-size: 0.7rem;
		}
	}
	@media (max-width: 1024px) {
		display: none;
	}
`;
export default RecentPhotosWrapper;
