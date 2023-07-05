import { Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { GamingMainWrapper } from "./styles/GamingMain.styled";
import Svg from "./static/Svg";
import CardImg from "./static/Card.png";
import bgImg from "./static/background.png";
import covidImg from "./static/covid.png";
import { useNavigate } from "react-router";

const Allgames = () => {
  const navigate = useNavigate();
  return (
    <>
      <GamingMainWrapper bgImg={bgImg}>
        <Grid container sx={{ height: "100vh" }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
              zIndex: 1000,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card sx={{ maxWidth: 345, margin: "0px 10px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={CardImg}
                  alt="Cards"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Flip n Win
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Flip the cards given and match the Avengers to finish it on
                    time...😎
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a
                  href="https://flipkards.netlify.app/"
                  target="#"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <Button
                    size="small"
                    variant="outlined"
                    sx={{
                      color: "#5858fc",
                      border: "1px solid #5858fc",
                      "&:hover": {
                        color: "#fff",
                        border: "1px solid #5858fc",
                        bgcolor: "#5858fc",
                      },
                    }}
                  >
                    Play
                  </Button>
                </a>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345, margin: "0px 10px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={covidImg}
                  alt="Cards"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Covid Dodge
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Dodge through the covid viruses coming towards you and stay
                    safe !!! 💉
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a
                  href="https://krishnendu52.itch.io/coviddodge"
                  target="#"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <Button
                    size="small"
                    variant="outlined"
                    sx={{
                      color: "#5858fc",
                      border: "1px solid #5858fc",
                      "&:hover": {
                        color: "#fff",
                        border: "1px solid #5858fc",
                        bgcolor: "#5858fc",
                      },
                    }}
                  >
                    Play
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </GamingMainWrapper>
    </>
  );
};

export default Allgames;
