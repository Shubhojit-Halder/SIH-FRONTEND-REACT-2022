import styled from "styled-components";
export const MidsecWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=El+Messiri&display=swap");

  .wholecardGridLand {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .wholeCardDivLand {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 60%; */
  }

  .imgLand {
    border-radius: 20px;
    /* box-shadow: 1px 1px 25px 5px #e6e6e6; */
    margin: 10px 30px;
  }
  .imagesLand {
  width:250px}
  .writeupLand h2 {
    color: #5858fc;
    font-weight: 700;
    font-size: 30px;
    padding: 10px;
  }
  .writeupLand span {
    font-size: 20px;
    padding: 10px;
  }
  @media (max-width: 600px) {
    .writeupLand h2 {
      font-size: 25px;
    }
    .writeupLand span {
      font-size: 15px;
    }
    .imagesLand{
        width: 180px;
    }
  }
  @media (max-width: 450px){
    .imagesLand{
        width: 150px;
    }
  }
`;
export const MyButton = styled.button`
  outline: none;
  border: none;
  width: 200px;
  margin-top: 20px;
  padding: 10px;
  border-radius: 30px;
  font-weight: 650;
  font-size: 18px;
  color: white;
  cursor: pointer;
  /* background-image: linear-gradient(to bottom right, rgba(255, 255, 0, 1), rgba(255, 255, 0, 1), rgba(255, 255, 255, 0.4)); */
  background-color: #5858fc;
  @media (max-width: 600px) {
    width: 150px;
    font-size: 15px;
  }
`;
