import styled from "styled-components";
export const EditDpWrapper = styled.section`
	.containerEditDP {
		height: 85vh;
		width: 80vw;
	}
	.editdp-buttons {
		display: flex;
	}
	.container-cropperEditDP {
		height: 90%;
		background: #000;
		padding: 10px;
	}

	.cropperEditDP {
		height: 85%;
		position: relative;
	}

	.sliderEditDP {
		/* margin-top: px; */
		height: 10%;
		display: flex;
		align-items: center;
		margin: auto;
		width: 60%;
	}

	.container-buttonsEditDP {
		border: 1px solid #f5f5f5;
		height: 10%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	@media (max-width: 600px) {
		.containerEditDP {
			width: 80vw;
		}
	}
	@media (max-width: 530px) {
		.editdp-buttons {
			flex-direction: column;
			button {
				margin-top: 10px;
			}
			margin-top: 100px;
			padding: 30px;
			align-items: center;
			justify-content: center;
		}
	} ;
`;
