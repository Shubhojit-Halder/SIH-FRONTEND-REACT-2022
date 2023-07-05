import styled from "styled-components";
const GeneralTableWrapper = styled.div`
	.grid2 {
		background-color: #e3e2e2;
		border-radius: 5px;
		margin-top: 5px;
		box-shadow: 1px 1px 2px grey;
	}
	.grid3 {
		box-shadow: 1px 1px 2px grey;
		margin-top: 5px;
		background-color: #f4f2f2;
		border-radius: 5px;
	}

	.input {
		background-color: #ffffff;
		border-radius: 30px;
		border: 1px solid #cbc7c7;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding: 6px 0;
		width: 70%;
		position: relative;
		left: 50%;
		transform: translate(-50%, 0);
		/* box-shadow: 1px 1px 1px grey; */
	}
	.password_entry {
		height: 200px;
		width: 100%;
		margin-top: 10px;
		/* background-color: grey; */
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		span {
			text-align: justify;
			padding: 20px;
			color: #615f5f;
		}
	}
	.password_input {
		height: 120px;
		width: 100%;
		/* background: grey; */
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		span {
			font-size: 12px;
		}
	}
	.access {
		border-radius: 30px;
	}
	@media screen and (max-width: 385px) {
		.input {
			width: 100%;
		}
	}
`;
export default GeneralTableWrapper;
