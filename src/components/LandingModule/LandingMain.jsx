import React,{useState,useEffect} from "react";
import Hero from "./Components/Hero";
import MidSection from "./Components/MidSection";
import { Grid } from "@mui/material";
import FooterWhole from "./Components/FooterWhole";
import Helmet from "react-helmet";
import Loader from "../HomeModule/ccomponents_home/Loader/Loader";
const LandingMain = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 4500);
  }, []);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <title>DaakTicket | Your Happy Space</title>
            <meta name="Landing" content="Landing page" />
          </Helmet>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: "colomn",
              justifyContent: "center",
              alignitems: "center",
              height: "103.1vh",
              overflowY: "scroll",
              overflowX: "hidden",
            }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <Hero />
            </Grid>
            <Grid item xs={12} sm={10} md={8}>
              <MidSection />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <FooterWhole />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default LandingMain;
