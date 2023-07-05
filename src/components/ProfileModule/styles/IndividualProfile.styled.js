import styled from "styled-components";
const Wrapper = styled.section`
	@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Poppins&family=Secular+One&display=swap");

	.wholePageIndPage {
		height: 100vh;
		overflow-y: scroll;
		overflow-x: hidden;
	}
	.wholePageIndPage::-webkit-scrollbar {
		margin-top: 20px;
		width: 3px;
		border-radius: 10px;
	}
	.wholePageIndPage::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: rgb(194, 193, 193);
	}
	.mainIndPage {
		position: relative;
		width: 100%;
		box-sizing: border-box;
	}
	.imageDivIndpage {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-right: -20px;
	}
	.coverImgDivIndpage {
		width: 95%;
		height: 100%;
	}
	.CoverImgIndpage {
		height: 300px;
		width: 90%;
		border-radius: 20px 20px 0px 0px;
	}
	/* .profileImageIndpage{
    height: 180px;
    width: 180px;
    position: absolute;
    top: 200px;
    border-radius: 50%;
    border: 2px solid black;
    outline: 2px solid white;
  } */
	.mainIndpage {
		position: relative;
		width: 100%;
		box-sizing: border-box;
		/* background: #000; */
	}
	.profileImgDivIndpage {
		position: absolute;
		top: 200px;
	}
	.profileImageIndpage {
		height: 180px;
		width: 180px;
		/* background-color: black; */
		z-index: 10;
		/* left: 35%; */
		/* transform: translate(-70%, 0); */
		border-radius: 50%;
		border: 2px solid black;
		outline: 2px solid white;
	}

	/* .imageDivIndpage{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

  }
  .CoverImgIndpage{
    height: 300px;
    width: 90%;
    border-radius: 20px 20px 0px 0px;
  }
  .profileImageIndpage {
    height: 180px;
    width: 180px;
    position: absolute;
    top: 200px;
    border-radius: 50%;
    border: 2px solid black;
    outline: 2px solid white;
  } */
	.imageIndPage {
		border-radius: 50%;
	}
	.profileNameIndPage {
		width: 100%;
		margin-top: 100px;
		top: 50px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		border-radius: 0 0 5px 5px;
		height: 220px;
	}
	.identityIndPage {
		overflow-wrap: break-word;
		position: relative;
		word-wrap: break-word;
		white-space: pre-wrap;
		word-break: break-word;
		padding-left: 10px;
	}
	.bioDataIndPage {
		text-align: center;
		padding-bottom: 20px;
		position: relative;
		left: 50%;
		transform: translate(-50%, 0);
		flex-wrap: wrap;
		display: flex;
		width: 40%;
		text-align: justify;
	}
	.nameIndPage {
		color: black;
		font-size: 20px;
		font-family: "Poppins", sans-serif;
		text-transform: uppercase;
		padding: 20px 20px 10px 0px;
		overflow-wrap: break-word;
		position: relative;
		word-wrap: break-word;
		white-space: pre-wrap;
		word-break: break-word;
		font-weight: bolder;
	}
	.editBtnIndPage,
	.followerBtnIndPage {
		padding: 8px;
		margin: 10px 10px 0px 0px;
	}
	.editBtnIndPage:hover,
	.followerBtnIndPage:hover {
		color: rgb(126, 0, 164);
		background-color: rgba(255, 0, 242, 0.057);
		border: 1px solid rgb(126, 0, 164);
	}
	.backBtnIndPage {
		color: black;
		padding: 15px 15px;
		margin-top: 5px;
	}
	.nameContainerIndPage {
		display: flex;
		flex-direction: column;
		line-height: 17px;
		margin-top: -210px;
		padding: 20px;
		float: right;
	}
	.identityIndPage {
		font-family: "Poppins", sans-serif;
		padding: 0px 10px 10px 0px;
		font-size: 14px;
	}
	.editingButtonsIndPage {
		margin-bottom: 15px;
		margin-top: -5px;
	}

	.PhotosGridIndPage::-webkit-scrollbar {
		margin-top: 0px;
		width: 1px;
		border-radius: 10px;
		background: #000;
	}
	.PhotosGridIndPage::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: rgb(61, 61, 61);
	}

	@media (max-width: 900px) {
		.PhotosGridIndPage {
			display: none;
		}
	}

	@media (max-width: 700px) {
		.profileImageIndPage {
			height: 150px;
			width: 150px;
			/* left: 30%; */
			/* top: 220px; */
		}
	}
	@media (max-width: 600px) {
		.leftDivIndPage {
			display: none;
		}
		.imageDivIndPage {
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.profileImageIndPage {
			left: 0%;
			transform: translate(0, 0);
			top: 200px;
		}
	}
`;

export default Wrapper;
