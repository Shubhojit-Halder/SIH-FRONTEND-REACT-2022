import React from "react";
import Cropper from "react-easy-crop";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import { generateDownload } from "../utils/cropImage";
import { EditDpWrapper } from "../../styles/EditDp.styled";
import { IconButton } from "@mui/material";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { useDispatch } from "react-redux";
import { openCropper } from "../../slices/dpSlice";
import axios from "axios";
const EditDp = () => {
	const dispatch = useDispatch();
	const inputRef = React.useRef();

	const triggerFileSelectPopup = () => inputRef.current.click();

	const [image, setImage] = React.useState(null);
	const [croppedArea, setCroppedArea] = React.useState(null);
	const [crop, setCrop] = React.useState({ x: 0, y: 0 });
	const [zoom, setZoom] = React.useState(1);

	const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
		setCroppedArea(croppedAreaPixels);
	};

	const onSelectFile = (event) => {
		if (event.target.files && event.target.files.length > 0) {
			const reader = new FileReader();
			reader.readAsDataURL(event.target.files[0]);
			reader.addEventListener("load", () => {
				setImage(reader.result);
			});
		}
	};

	const onDownload = () => {
		generateDownload(image, croppedArea);
	};

	return (
		<EditDpWrapper>
			<div className="mainEDITDP">
				<div className="containerEditDP">
					<div className="container-cropperEditDP">
						<IconButton
							sx={{ color: "#fff" }}
							onClick={() => {
								dispatch(openCropper(false));
							}}
						>
							<HighlightOffOutlinedIcon />
						</IconButton>
						{image ? (
							<>
								<div className="cropperEditDP">
									<Cropper
										image={image}
										crop={crop}
										zoom={zoom}
										aspect={1}
										onCropChange={setCrop}
										onZoomChange={setZoom}
										onCropComplete={onCropComplete}
									/>
								</div>

								<div className="sliderEditDP">
									<Slider
										min={1}
										max={3}
										step={0.1}
										value={zoom}
										onChange={(e, zoom) => setZoom(zoom)}
									/>
								</div>
							</>
						) : null}
					</div>

					<div className="container-buttonsEditDP">
						<input
							type="file"
							accept="image/*"
							ref={inputRef}
							onChange={onSelectFile}
							style={{ display: "none" }}
						/>
						<div className="editdp-buttons">
							<Button
								variant="contained"
								sx={{ bgcolor: "#5858fc" }}
								onClick={triggerFileSelectPopup}
								style={{ marginRight: "10px" }}
							>
								Choose
							</Button>
							<Button
								variant="contained"
								onClick={() => {
									onDownload();
									dispatch(openCropper(false));
								}}
								style={{ marginRight: "10px" }}
							>
								Set Profile Picture
							</Button>
							<Button
								variant="contained"
								color="error"
								onClick={() => {
									dispatch(openCropper(false));
									axios.delete(
										"http://localhost:8080/remove/dp?user=" +
											localStorage.getItem("user_id")
									);
								}}
							>
								Remove Profile Picture
							</Button>
						</div>
					</div>
				</div>
			</div>
		</EditDpWrapper>
	);
};

export default EditDp;
