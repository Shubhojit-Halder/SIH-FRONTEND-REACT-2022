import styled from "styled-components";
const Wrapper = styled.div`
	.main {
		height: 75px;
		padding: 0px 30px;
		display: flex;
		/* position: relative; */
		/* grid-template-columns: auto auto; */
		align-items: center;

		/* top:50px; */
		/* width: 100%; */
	}
	.full {
		overflow-y: scroll;
		/* background-color: red; */
		/* padding-right: 10px; */
	}
	.full::-webkit-scrollbar {
		width: 8px;
		border-radius: 10px;
	}
	.full::-webkit-scrollbar-thumb {
		border: 2px solid transparent;
		border-radius: 10px;
		background-color: rgba(0, 0, 0, 0.502);
		background-clip: content-box;
	}
`;
export default Wrapper;
