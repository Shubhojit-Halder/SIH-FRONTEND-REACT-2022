import styled from "styled-components";
export const Head = styled.div`
	width: 100%;
	height: 65px;
	background-color: white;
	position: relative;
	top: -5px;
	.full {
		width: 100%;
		display: flex;
		height: 100%;
	}
	.imagediv {
		padding: 0 10px;
		display: flex;
		width: 80%;
		height: 100%;
		justify-content: flex-start;
		align-items: center;
		span {
			padding-left: 10px;
			font-size: 18px;
			font-weight: 600;
		}
	}
	.img {
		border-radius: 50%;
	}
	.buttons {
		display: flex;
		align-items: center;
		justify-content: flex-end;

		width: 20%;
	}
`;
