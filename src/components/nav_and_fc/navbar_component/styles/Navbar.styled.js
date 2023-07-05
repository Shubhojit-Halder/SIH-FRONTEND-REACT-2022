import styled from "styled-components";
const Wrapper = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Acme&family=Bree+Serif&family=El+Messiri&family=Josefin+Sans:wght@100&family=Quicksand:wght@300&display=swap");
	.logo_daakticket {
		height: 30px;
		width: auto;
	}

	.main {
		display: flex;
		align-items: center;
		margin-top: -5px;
		height: 80px;
		background: white;
		position: fixed;
		width: 100vw;
		padding-left: 5px;
		z-index: 1000;
	}
	.main h2 {
		padding: 0px 20px;
		letter-spacing: 1px;
		font-family: "El Messiri", sans-serif;
	}
	.nav_icons {
		display: flex;
		list-style: none;
		align-items: center;
		justify-content: center;
		position: relative;
		right: 20px;
		margin: -8px 0;
	}
	.iconContainer {
		position: relative;
		right: 0px;
		align-items: center;
		justify-content: flex-end;
		display: flex;
		height: 100%;
		width: 100%;
	}
	.nav_icons li {
		padding: 0px 5px 0px 60px;
		cursor: pointer;
	}
	.nav_icons li:hover {
	}
	.searchBar {
		width: 280px;
		align-items: center;
		border-radius: 22px;
		padding-left: 17px;
		position: absolute;
		left: 150px;
	}
	.searchBar input {
		height: 40px;
		/* border: 1.5px solid grey; */
		border-radius: 10px;
		padding: 5px 20px;
		transition: all 0.2s;
		font-size: 15px;
		position: relative;

		width: 90%;
		background-color: #f0f0f0;
	}
	.searchBtn {
		/* left: 5px; */
		/* right: 100px; */
		left: 280px;
		display: flex;
		align-items: center;
		z-index: 100;
	}
	.searchinput {
		outline: none;
		border: none;
	}
	.searchinput22 {
		width: 100%;
	}
	.searchBtn:hover {
		background-color: #ffffff;
		color: #000;
	}

	.allNotification {
		width: 350px;
		height: 80%;
		overflow-y: scroll;
		position: fixed;
		margin-left: 60%;
		z-index: 10;
		background: rgb(45, 45, 45);
		color: #ffffff;
	}
	.followDropdown {
		width: 350px;
		height: 80%;
		overflow-y: scroll;
		position: fixed;
		margin-left: 60%;
		z-index: 10;
		background: rgb(45, 45, 45);
		color: #ffffff;
	}
	.allNotification::-webkit-scrollbar,
	.followDropdown::-webkit-scrollbar {
		display: none;
	}
	@media (max-width: 966px) {
		.nav_icons li {
			padding: 0px 0px 0px 50px;
		}
		.gameicon,
		.homeicon {
			display: none;
		}
	}
	@media (max-width: 691px) {
		.nav_icons li {
			padding: 0px 0px 0px 30px;
		}
		.allNotification {
			margin-left: 62%;
		}
	}
	@media (max-width: 620px) {
		.nav_icons li {
			padding: 0px 0px 0px 30px;
		}
		.peopleicon {
			display: none;
		}
		.nav_icons {
			margin: -8px 0px;
			justify-content: center;
		}
	}
	@media screen and (max-width: 541px) {
		.notificationicon {
			display: none;
		}
		.searchBar {
			width: 240px;
			left: 50px;
		}
		.searchBtn {
			right: 30px;
		}
		.searchbtncontainer {
			right: 20px;
			position: relative;
		}
	}
	@media screen and (max-width: 530px) {
		.searchBar {
			left: 50px;
			width: 320px;
		}
	}
	@media (max-width: 480px) {
		.main {
			/* justify-content: fl; */
			padding-right: 10px;
		}
		.main h2 {
			padding-right: 0px;
			padding-left: 10px;
		}
		.nav_icons li {
			padding: 0px 0px 0px 5px;
		}
		.searchbtncontainer {
			/* right: 150px; */
			position: relative;
			left: 0;
		}
		.searchBar {
			width: 270px;
		}
	}
	@media (max-width: 400px) {
		.branding {
			font-size: 1.3rem;
		}
		.nav_icons li {
			padding: 0px 0px 0px 3px;
			size: 0.8rem;
		}
		.searchBar {
			width: 240px;
			left: 30px;
		}
	}
	@media (max-width: 380px) {
		.nav_icons li {
			padding: 0px 0px 0px 1px;
		}
		.searchBar {
			width: 200px;
			left: 30px;
		}
	}
`;
export default Wrapper;
