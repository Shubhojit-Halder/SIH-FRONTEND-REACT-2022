import styled from "styled-components";
export const DzWrapper = styled.section`
  background: linear-gradient(
      rgba(255, 255, 255, 0.96),
      rgba(232, 232, 232, 0.92)
    ),
    url(${(props) => props.bgImg});
  background-repeat: repeat;
  background-size: 45%;
  border-radius: 10px;
border-bottom: 3px solid #5858fc;
  .DZmain {
    /* display: flex; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 30px 15px 50px 15px;
    height: 100%;

  }
  .dropzoneDZ {
    border: 2px dashed gray;
    border-radius: 10px;
    background-color: white;
    height: 250px;
    margin: 16px 32px;
    text-align: center;
  }
  .imagesFromDZ {
    width: 200px;
    height: 200px;
  }
  .btnDZ {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
