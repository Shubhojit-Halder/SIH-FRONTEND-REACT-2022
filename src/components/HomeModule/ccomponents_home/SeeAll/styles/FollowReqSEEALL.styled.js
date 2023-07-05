import styled from "styled-components";
export const FOllowReqSEEALLWrapper = styled.div`
  .paperCompRd {
    background: #fff;
    height: 80vh;
    overflow-y: scroll;
    margin: 5px;
  }
  .paperCompRd::-webkit-scrollbar {
    width: 2px;
  }
  .paperCompRd::-webkit-scrollbar-thumb {
    background: darkgray;
  }
  .headerSEEALLFR{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #5858fc;
    padding: 10px;
  }
  .imgNamecompRd {
    display: flex;
    align-items: center;
  }
  .NameRD {
    font-size: 1.3rem;
    padding: 5px 10px;
    font-weight: 500;
  }
  .rowRD {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid grey;
  }
  .btnRDFR {
    margin: 3px;
    background: #5858fc;
    width: 90px;
    font-size: .8rem;
  }

  .btnRDFR:hover {
    background: #fff;
    color: #5858fc;
    border: 1px solid #5858fc;
  }
  .imgRD {
    width: 50px;
    border-radius: 50%;
    outline: 1px solid white;
  }
  /*  */
  @media (max-width: 700px) {
    .NameRD {
      font-size: 1rem;
    }
    .btnRDFR{
      width: 85px;
    }
  }
  @media (max-width: 600px) {
    .btnRDFR {
      width: 90px;
    }
  }
  @media (max-width: 450px) {
    .btnRDFR {
      width: 75px;
      padding: 5px;
      font-size: 0.8rem;
      margin: 2px;
    }
  }
`;
