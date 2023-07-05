import styled from "styled-components";
const WrapGeneral = styled.div`
	.main {
		height: 100vh;
		width: 100%;
		background-color: white;
		padding: 20px;
	}
	.heading {
		height: 50px;
		border-bottom: 2px solid grey;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 10px;
	}
	.headingtext {
		font-size: 30px;
		font-family: Arial, Helvetica, sans-serif;
	}
	@media screen and (max-width: 900px) {
		.main {
			width: 100%;
		}
	}
	/* @media screen and (max-width:713px){
    .main{
        width:90%;
    }
} */
`;
export default WrapGeneral;
