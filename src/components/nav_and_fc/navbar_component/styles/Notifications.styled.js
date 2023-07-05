import styled from "styled-components";

export const Wrapper = styled.div`
	.allNotification::-webkit-scrollbar,
	.followDropdown::-webkit-scrollbar {
		display: none;
	}
	.allNotification {
		background: #ecebeb;
		box-sizing: border-box;
		border: 1px solid #a6a5a5;
		width: 349px;
		top: 80px;
		z-index: 100;
	}
	.subheader {
		font-size: 15px;
		font-weight: 600;
		color: black;
	}
`;
