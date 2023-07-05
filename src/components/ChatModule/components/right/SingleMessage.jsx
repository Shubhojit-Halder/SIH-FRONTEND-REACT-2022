import React from "react";
import { useState } from "react";
import { RightChat, LeftChat } from "../../styles/message";
const SingleMessage = (props) => {
	console.log(props.message.length);
	const [state, setState] = useState(false);
	const d = new Date();
	const time = d.toLocaleTimeString();

	return (
		<>
			{!props.right ? (
				<RightChat>
					<div className="skew"></div>
					<div className="text">
						<span>{state ? props.message : props.message.slice(0, 30)}</span>
						<br />
						{props.message.length > 30 ? (
							<span
								className="showmorebtn"
								onClick={() => {
									setState((prev) => !prev);
								}}
							>
								{!state ? `Show More...` : `...Show Less`}
							</span>
						) : (
							<></>
						)}
						<div className="down">
							<span>{`Reply`}</span>
							<span>{time}</span>
						</div>
					</div>
				</RightChat>
			) : (
				<LeftChat>
					<div className="skew"></div>
					<div className="text">
						<span>{state ? props.message : props.message.slice(0, 30)}</span>
						<br />
						{props.message.length > 30 ? (
							<span
								className="showmorebtn"
								onClick={() => {
									setState((prev) => !prev);
								}}
							>
								{!state ? `Show More...` : `...Show Less`}
							</span>
						) : (
							<></>
						)}
						<div className="down">
							<span>{`Reply`}</span>
							<span>{time}</span>
						</div>
					</div>
				</LeftChat>
			)}
		</>
	);
};

export default SingleMessage;
