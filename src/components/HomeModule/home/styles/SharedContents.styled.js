import styled from "styled-components";
const SharedContentWrapper = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	/* background-color:red; */
	display: flex;
	flex-direction: column;

	.uppergrid {
		display: grid;
		grid-template-columns: 2fr 7fr 4fr 1fr;
		padding: 15px;
	}
	.uppergridd {
		display: grid;
		grid-template-columns: 2fr 7fr 4fr 1fr;
		padding: 15px;
	}
	.owner {
		justify-content: center;
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		/* background-color:red; */
	}
	.name {
		font-size: 16px;
		word-wrap: break-word;
		white-space: pre-wrap;
		word-break: break-word;
	}
	.time {
		font-size: 12px;
	}
	.imageDiv {
		/* background-color: red; */
		min-height: 250px;
	}
	.reactDiv {
		height: 50px;
		display: grid;
		grid-template-columns: auto auto auto;
		align-items: center;
		/* padding: 10px; */
		padding-bottom: 60px;
		/* justify-content: center;  */
	}
	.ownercontainer {
		padding: 5px;
		margin: 10px;
		border: 1px solid rgba(128, 128, 128, 0.557);
		background-color: rgba(193, 193, 193, 0.263);
	}
	.text {
		display: block;
		unicode-bidi: embed;

		white-space: pre;
	}
	.textContainer {
		padding: 10px;
	}
	.item {
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.commentsection {
		min-height: 100px;
		border-top: 1px solid rgba(0, 0, 0, 0.164);
		overflow: hidden;
	}
	.commentgrid {
		display: grid;
		align-items: center;
		justify-content: center;
		/* background-color:red; */
		grid-template-columns: 1fr 5fr;
		padding: 10px;
	}
	.commentgive {
		height: 100%;
		width: 100%;
		display: flex;
		/* align-items: center; */
		/* justify-content: center; */
		/* background-color:red; */
	}
	.commentadd {
		width: 90%;
		resize: none;
		height: 25px;
		outline: none;
		font-size: 15px;
		border: none;
		font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
			"Lucida Sans Unicode", Geneva, Verdana, sans-serif;
	}
	.textarea {
		height: 50px;

		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 15px;
		padding: 18px;
		box-sizing: border-box;
		/* background-color: red; */
		border: 1px solid grey;
		/* box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5); */
	}
	.commentadd::-webkit-scrollbar {
		width: 0px;
	}
	.commentadd::-webkit-scrollbar-thumb {
		background-color: black;
	}
	.showpreviouscomments {
		padding-left: 20px;
		font-size: 16px;
		text-decoration: underline;
		cursor: pointer;
	}
	@media screen and (max-width: 400px) {
		.commentgrid {
			grid-template-columns: 1fr 4fr;
		}
	}
	@media screen and (max-width: 600px) {
		.owner {
			padding: 10px;
		}
	}
`;
export default SharedContentWrapper;
