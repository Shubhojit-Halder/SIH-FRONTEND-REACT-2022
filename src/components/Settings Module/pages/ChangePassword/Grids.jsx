import React from "react";
import { Box, Fab, Grid } from "@mui/material";
import { EditSharp } from "@mui/icons-material";
import GeneralTableWrapper from "./styles/ChangepasswordTable.styled";
const Grids = (props) => {
	return (
		<GeneralTableWrapper>
			<Grid
				key={props.index}
				container
				style={{
					alignItems: "center",
					padding: "5px 15px",
				}}
				className={props.value.value % 2 === 0 ? "grid2" : "grid3"}
			>
				<Grid item xs={3}>
					{props.value.name.toLocaleUpperCase()}
				</Grid>
				<Grid
					item
					xs={9}
					style={{
						justifyContent: "center",
						width: "100%",
					}}
				>
					<Box className="input">
						{props.children}

						<Fab
							disabled
							size="small"
							sx={{
								position: "absolute",
								color: "#ffffff",
								backgroundColor: "rgb(88,88,252)",
								"&:hover": { color: "rgb(88,88,252)" },
							}}
							onClick={
								// setState(true);
								// setHelperText("Password was Incorrect !");
								props.handler
							}
						>
							<EditSharp />
						</Fab>
						{/* </div> */}
					</Box>
				</Grid>
			</Grid>
		</GeneralTableWrapper>
	);
};

export default Grids;
