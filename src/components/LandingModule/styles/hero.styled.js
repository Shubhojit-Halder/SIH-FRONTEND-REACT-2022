import styled from "styled-components";
export const Bubblespan = styled.div`
  /* position: absolute; */
  width: 100px;
  height: 100px;
  padding: 20px;
  background: rgb(88, 88, 252);
  border-radius: 50%;
  font-size: 20px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  /* color: red; */
  text-align: center;
  font-weight: 600;
  float: right;
  margin-top: -50px;
  cursor: pointer;
  z-index: 1;
  @media (max-width: 670px) {
    width: 80px;
    height: 80px;
    font-size: 15px;
    margin-top: -20px;
  }
  @media (max-width:450px) {
  position: absolute;
  margin-top: -460px;
  margin-left: 250px;
    
  }
`;
export const Bubblespan2 = styled.div`
  /* position: absolute; */
  width: 70px;
  height: 70px;
  padding: 20px;
  background: rgb(88, 88, 252);
  border-radius: 50%;
  font-size: 20px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  /* color: red; */
  text-align: center;
  font-weight: 600;
  float: right;
  margin-top: -60px;
  cursor: pointer;
  @media (max-width: 670px) {

    width: 60px;
    height: 60px;
    font-size: 15px;
    margin-top: -30px;
    margin-left: -10px;
  }
  @media (max-width:450px) {
  position: absolute;
  margin-top: -400px;
  margin-left: 200px;
    
  }
`;
export const Bubblespan3 = styled.div`
 width: 30px;
  height: 30px;
  /* padding: 20px; */
  background: rgb(88, 88, 252);
  border-radius: 50%;
  font-size: 20px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  float: right;
  cursor: pointer;
  display: none;
@media (max-width:450px) {
  position: absolute;
  margin-top: -330px;
  display: block;
  margin-left: 200px;
    
  }
`



export const HeroWrapper = styled.section`
  .HeroMid {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* width: 350px; */
  }
  .heroLogo {
    width: 150px;
  }
  .leftSide {
    /* margin: auto; */
  }
  .leftTexts {
    font-size: 50px;
    font-weight: 700;
  }
  /* .leftTexts h1 {
    color: #5858fc;
    font-size: 7rem;
    font-family: "El Messiri", sans-serif;
  } */
  .rightSideImg {
    width: 500px;
  }
  .TypedStyledHero {
    font-size: 30px;
  }
  @media (max-width: 1080px) {
    .leftTexts {
      font-size: 20px;
      font-weight: 700;
      padding: 0px 10px;
    }
    /* .leftTexts h1 {
      color: #5858fc;
      font-size: 4rem;
    } */
    /* .bubbleHero{
    position: absolute;
    width:100px;
    height: 100px;
    background: #5858FC;
    border-radius: 50%;
    color: red;
} */
    .rightSideImg {
      width: 400px;
    }
    .heroLogo {
      width: 120px;
    }
    .TypedStyledHero {
      font-size: 15px;
    }
  }
  @media (max-width: 650px) {
    .leftTexts {
      font-size: 25px;
      font-weight: 700;
      padding: 0px 10px;
      width: 400px;
    }
    /* .leftTexts h1 {
      color: #5858fc;
      font-size: 3.2rem;
    } */
    .HeroMid {
      flex-direction: column-reverse;
    }
    .rightSideImg {
      width: 250px;
      margin-bottom: 30px;
    }
    .heroLogo {
      width: 80px;
    }
    .TypedStyledHero {
      font-size: 17px;
    }
  }
  @media (max-width: 450px) {
    .leftTexts {
      width: 350px;
    }
    .TypedStyledHero {
      font-size: 15px;
    }
  }
`;

