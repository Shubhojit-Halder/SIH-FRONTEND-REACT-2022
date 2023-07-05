import styled from "styled-components";
export const GamingMainWrapper = styled.section`
   background: linear-gradient(
      rgba(255, 255, 255, 0.97),
      rgba(232, 232, 232, 0.90)
    ),
    url(${(props) => props.bgImg});
  background-repeat: repeat;
  background-size: 15%;
  .mainGPM {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* overflow-y: scroll; */
  }
  .GridContainerGPM {
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* flex-wrap: wrap-reverse; */
    /* position: fixed; */
  }
  .photoGridGPM {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .AllWrittenPartGPM {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 10;
    padding: 10px;
  }
  .btnGPM {
    margin-left: 80%;
    cursor: pointer;
    width: 100px;
    height: 100px;
    padding: 10px;
    font-size: 1.8rem;
    border-radius: 50%;
    text-align: center;
    box-sizing: border-box;
    background-color: #5858fc;
    color: #fff;
    font-weight: 600;
  }
  .dotsGPM {
    width: 30px;
    height: 30px;
    margin-left: 60%;
    background-color: #5858fc;
    border-radius: 50%;
  }
  .dotsGPM2 {
    width: 20px;
    height: 20px;
    margin-left: 57%;
    background-color: #5858fc;
    border-radius: 50%;
  }
  .gameImg {
    width: 80%;
    z-index: 10;
  }

  .welcomeGPM {
    font-size: 3.5rem;
    font-size: 72px;
    z-index: 10;
    /* color: white; */
  }
  .brandnameGPM {
    margin-left: 60px;
    font-size: 6.5rem;
    color: #5858fc;
    color: #5858fc;

    font-family: "El Messiri";
  }
  .gameWordGPM {
    margin-left: 200px;
    color: #fff;
    font-size: 5rem;
    margin-top: -30px;
  }
  .svgWaveGPM {
    width: 100%;
    position: fixed;
    top: 20%;
  }

  @media (max-width: 900px) {
    .gameImg {
      width: 70%;
    }
    .gameWordGPM {
      color: #000;
    }
    .svgWaveGPM {
      /* display: none; */
      position: fixed;
      top: 70%;
    }
    .brandnameGPM {
      font-size: 4rem;
    }
    .welcomeGPM,
    .gameWordGPM {
      font-size: 3rem;
    }
    .btnGPM {
      margin-left: 72%;
      width: 80px;
      height: 80px;
      font-size: 1.2rem;
      display: flex;
      justify-content: center;
    }
    .GridContainerGPM {
    }
  }
  @media (max-width: 600px) {
    .svgWaveGPM {
      top: 80%;
    }
    .brandnameGPM {
      font-size: 4rem;
    }
    .welcomeGPM {
      font-size: 3rem;
    }
    .gameWordGPM {
      font-size: 3rem;
      /* margin-left: 100px; */
    }
  }
`;
