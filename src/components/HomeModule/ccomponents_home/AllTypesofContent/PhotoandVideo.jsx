import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";
import image from "../../home/static/Dp.jpg";
const PhotoandVideo = () => {
  const CarouselWrapper = styled.section`
    .carousel {
      height: 110%;
    }
    .carousel-control-prev {
      top: 50%;
      background-color: black;
      height: 50px;
    }
    .carousel-control-next {
      top: 50%;
      background-color: black;
      height: 50px;
    }
  `;
  
  const PhotoProps = [
    {
      src: image,
    },
    {
      src: image,
    },
    {
      src: image,
    },
    {
      src: image,
    },
    
  ];
  const VideoProps= [
    {
      src: "https://www.youtube.com/watch?v=-pG7XQVRhbw",
    },
    {
      src: "https://www.youtube.com/watch?v=-pG7XQVRhbw",
    },
  ]

  return (
    <CarouselWrapper>
      <Carousel>
        {PhotoProps.map((data, index) => {
          return (
            <Carousel.Item key={index}>
              <img src={data.src} width="100%" />
            </Carousel.Item>
          );
        })}
        {VideoProps.map((data, index) => {
          return (
            <Carousel.Item key={index}>
              <ReactPlayer url={data.src} controls={true} width="100%" />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </CarouselWrapper>
  );
};

export default PhotoandVideo;
