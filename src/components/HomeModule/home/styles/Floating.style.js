import styled from "styled-components";
const Wrap = styled.div`
	.fab {
		position: fixed;
		right: -170px;
		bottom: -170px;
		height: 250px;
		width: 250px;
	}
	.section5 {
		box-sizing: border-box;
		height: 350px;

		margin-top: 5px;
		border-radius: 5px;
		position: absolute;
		right: 50%;
		transform: translate(50%, 0);
	}
	.hold2 {
		position: fixed;
		height: 250px;
		width: 285px;
		top: 90px;
		right: 40px;
		/* transition: anim 0.5s; */
		animation-name: anim;
		animation-duration: 0.5s;
	}
	@keyframes anim {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@media screen and (max-width: 1200px) {
		.hold2 {
			right: 100px;
		}
	}
	@media screen and (max-width: 1100px) {
		.hold2 {
			right: 100px;
		}
	}
	@media screen and (max-width: 1000px) {
		.hold2 {
			right: 80px;
		}
	}
	@media screen and (max-width: 900px) {
		.hold2 {
			display: none;
		}
	}
	@media screen and (max-width: 600px) {
		.section2c {
			width: 400px;
		}
		.postContainer {
			top: 0;
			transform: translate(-50%, 0%);
		}
		.section3,
		.section5 {
			display: none;
		}
	}
`;
export default Wrap;
