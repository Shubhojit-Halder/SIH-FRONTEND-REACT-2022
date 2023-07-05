import React from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
const VideoCarousel = () => {
  const VideoProps = [
    {
      src: "https://www.youtube.com/watch?v=-pG7XQVRhbw",
    },
    // {
    //   src: "https://www.youtube.com/watch?v=-pG7XQVRhbw",
    // },
    // {
    //   src: "https://www.youtube.com/watch?v=-pG7XQVRhbw",
    // },
    // {
    //   src: "https://www.youtube.com/watch?v=-pG7XQVRhbw",
    // },
  ];
  const CarouselWrapper = styled.section`
    .carousel {
      height: 110%;
    }
    .carousel-control-prev {
      top: 50%;
      background-color: black;
      height: 50px;
      width: 50px;
      border-radius: 50%;
    }
    .carousel-control-next {
      top: 50%;
      background-color: black;
      height: 50px;
      width: 50px;
      border-radius: 50%;
    }
  `;
  return (
    <>
      <CarouselWrapper>
        <Carousel>
          {VideoProps.map((data, index) => {
            return (
              <Carousel.Item key={index}>
                <ReactPlayer url={data.src} controls={true} width="100%" />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </CarouselWrapper>
    </>
  );
};

export default VideoCarousel;
