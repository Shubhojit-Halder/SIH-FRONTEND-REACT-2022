import React from "react";
import styled from "styled-components";

const profilePicture = () => {
  const Wrapper = styled.section`
    .profileImage {
      height: 40px;
      width: 40px;
      background-color: black;
      position: relative;
      z-index: 10;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      border: 2px solid white;
      outline: 2px solid black;
    }
    .image {
      border-radius: 50%;
    }
  `;
  return (
    <Wrapper>
      <div className="profileImage">
        <img
          src={`https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_1280.jpg`}
          height="100%"
          width="100%"
          className="image"
        />
      </div>
    </Wrapper>
  );
};

export default profilePicture;
