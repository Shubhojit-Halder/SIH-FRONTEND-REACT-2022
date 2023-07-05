import styled from "styled-components";
export const SuggesSEEALLWRAPPER = styled.div`
  .paperCompSEEALL {
    background: #fff;
    height: 80vh;
    overflow-y: scroll;
    margin: 5px;
  }
  .paperCompSEEALL::-webkit-scrollbar {
    width: 2px;
  }
  .paperCompSEEALL::-webkit-scrollbar-thumb {
    background: darkgray;
  }
  .headerSEEALL {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #5858fc;
    padding: 10px;
  }
  .headerSEEALL h2{
    font-family: "El messiri";

  }
  .imgNamecompSEEALL {
    display: flex;
    align-items: center;
  }
  .NameSEEALL {
    font-size: 1.3rem;
    padding: 5px 10px;
    font-weight: 500;
  }
  .rowSEEALL {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid grey;
  }
  .btnSEEALL,
  .btnSEEALLFR {
    margin: 5px;
    background: #5858fc;
    width: 150px;
  }

  .btnSEEALL:hover,
  .btnSEEALLFR:hover {
    background: #fff;
    color: #5858fc;
    border: 1px solid #5858fc;
  }
  .imgSEEALL {
    width: 50px;
    border-radius: 50%;
    outline: 1px solid white;
  }
  @media (max-width: 850px) {
    .btnSEEALL {
      width: 110px;
      padding: 7px;
    }
  }
  @media (max-width: 700px) {
    .NameSEEALL {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 450px) {
    .btnSEEALL {
      width: 100px;
      font-size: 0.8rem;
    }
  }
`;
