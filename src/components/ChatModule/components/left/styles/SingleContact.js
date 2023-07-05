import styled from "styled-components";

const Contact = styled.div`
		.contact-list-item:hover {
			background-color: #dcdcdc;
		}
		.img {
			border-radius: 50%;
		}
		.contact-list-item {
			height: 70px;
			background: white;
			padding-left: 10px;
			border-bottom: 1px solid #bcbcbc;
			display: flex;
			align-items: center;
			contain: content;
			.timeoflastchat {
				position: absolute;
				right: 0;
				top: 50%;
				margin-right: 10px;
				transform: translate(0, -60%);
				font-size: 10px;
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				div {
					height: 20px;
					width: 20px;
					border-radius: 50%;
					background: rgb(88, 88, 252);
					/* text-align: center; */
					display: flex;
					align-items: center;
					justify-content: center;
					color: white;
					font-size: 9px;
					margin-top: 5px;
				}
			}
			.name-and-last-message {
				display: flex;
				flex-direction: column;
				justify-content: center;
				padding-left: 10px;
				.name {
					font-size: 17px;
					font-weight: 500;
				}
				.last-message {
					font-size: 12px;
				}
			}
		}
	`;
    export default Contact