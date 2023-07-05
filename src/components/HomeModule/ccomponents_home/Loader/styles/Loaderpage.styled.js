import styled from "styled-components";
export const LoaderWrapper = styled.section`
  .logoLoader {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loadingBarLoader::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }
  .loadingBarLoader::after {
    content: "";
    margin-top: 45px;
    position: absolute;
    display: block;
    top: 50%;
    left: 33.3%;
    width: 33.3%;
    height: 2.5px;
    background: rgb(125, 57, 250);
    z-index: 2;
    transform-origin: left;
    transform: scaleX(0);
    animation: animate 2.8s infinite alternate;
  }
  @keyframes animate {
    0% {
      transform: translateX(0) scaleX(1);
      transform-origin: left;
      left: 35.3%;
      right: auto;
      background: rgb(125, 57, 250);
    }
    45% {
      transform: translateX(0) scaleX(1);
      transform-origin: right;
      left: 35%;
      right: auto;
      background: rgb(106, 27, 255);
    }
    50% {
      transform: translateX(0) scaleX(1);
      transform-origin: right;
      left: auto;
      right: 33.3%;
      background: rgb(61, 0, 174);
    }
    100% {
      transform: translateX(0) scaleX(0);
      transform-origin: left;
      left: auto;
      right: 33.3%;
      background: rgb(35, 1, 99);
    }
  }
`;
