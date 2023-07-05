import styled from "styled-components";
export const CPEWrapper = styled.section`
  .wholeCPE {
    width: 100vw;
    display: flex;
    justify-content: center;
  }
  .CPEmain {
    background: #e6e6e6;
    height: 600px;
    /* margin-top: 50px; */
    position: fixed;
    z-index: 100000000;
    width: 400px;
  }
  .midCPE{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .dropzoneCPE {
    border: 2px dashed gray;
    background-color: white;
    height: 150px;
    margin: 16px 32px;
    text-align: center;
  }
  .imagesFromCPE {
    width: 350px;
    height: 200px;
  }
  .btnCPE {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
