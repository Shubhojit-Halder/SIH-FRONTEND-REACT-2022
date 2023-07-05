import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import CakeRoundedIcon from "@mui/icons-material/CakeRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { PersonOutlineRounded } from "@mui/icons-material";
export const PersonalInfoData = [
  {
    head: "Work",
    startLogo: <AddCircleOutlineOutlinedIcon />,
    add: "Add Work Experience",
  },
  {
    head: "Education",
    startLogo: <AddCircleOutlineOutlinedIcon />,
    add: "Add Current Place of Education",
  },
  {
    head: "Places lived",
    startLogo: <HomeRoundedIcon />,
    add: "Add Town/City",
  },
  {
    head: "Contact info",
    startLogo: <AddCircleOutlineOutlinedIcon />,
    add: "Add Contact Info",
  },
  {
    head: "Basic info",
    startLogo: <PersonOutlineRounded />,
    add: "Add Basic Info",
  },
];
export const Workplace = [
  {
    place: "Swiggy",
    position: "SDE1",
    icon: <BusinessCenterOutlinedIcon />,
  },
  { place: "Amazon", position: "SDE4", icon: <BusinessCenterOutlinedIcon /> },
  {
    place: "Meta",
    position: "Machile Learning Engineer",
    icon: <BusinessCenterOutlinedIcon />,
  },
];
export const Education = [
  {
    Institution: "Meghnad Saha Institute of Tecnology",
    course: "Electronics and Communication Engineering",
    icon: <SchoolOutlinedIcon />,
  },
  {
    Institution: "Behala High School",
    course: "",
    icon: <SchoolOutlinedIcon />,
  },
];

export const PlacesLived = [
  { place: "Behala,Kolkata", icon: <LocationOnRoundedIcon /> },
];

export const Contacts = [
  { Data: "9903247560", type: "Mobile No.", icon: <CallRoundedIcon /> },
  {
    Data: "shubhojit357@gmail.com",
    type: "Email",
    icon: <MailOutlineRoundedIcon />,
  },
];

export const Basics = [
  { Data: "28/02/2003", type: "Date of Birth", icon: <CakeRoundedIcon /> },
  { Data: "Single", type: "Relationship", icon: <FavoriteBorderRoundedIcon /> },
];
