import styled from "styled-components";

const LeftdivWrapper = styled.section`
	.list {
		padding: 10px 5px;
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		border: grey;
	}
	.list ul {
		list-style: none;
		display: flex;
		align-items: center;
		/* flex-wrap: wrap; */
		flex-direction: column;
		justify-content: flex-start;
	}
	.list ul li {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px 20px 10px 20px;
		cursor: pointer;
	}
	.list ul li:hover {
		color: rgb(132, 0, 255);
	}
	.list ul li span {
		padding: 0px 10px;
	}
	.shareBtn {
		width: 120px;
		border-radius: 20px;
	}
	@media (max-width: 880px) {
		.list {
			display: none;
		}
	}
`;

export default LeftdivWrapper;
