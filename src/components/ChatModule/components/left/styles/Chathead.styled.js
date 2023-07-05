import styled from "styled-components";
export const MainHead = styled.div`
	height: 60px;
	width: 100%;
	background: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 10px;
	position: relative;
	.img {
		border-radius: 50%;
		position: relative;
	}
	.name {
		position: relative;
		width: 75%;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-right: 0px;
		color: rgb(88, 88, 252);
		span {
			font-size: 18px;
			font-weight: 600;
		}
	}
	.inputfieldandbutton {
		margin-left: 5px;
		display: flex;
		width: 100%;
		background-color: #eeeeee;
		border-radius: 5px;
		align-items: center;
		padding: 5px 10px;
		input {
			/* width: 180px; */
			width: 100%;
			height: 30px;
			outline: none;
			border: none;
			background-color: transparent;
			font-size: 15px;
		}
	}
`;
