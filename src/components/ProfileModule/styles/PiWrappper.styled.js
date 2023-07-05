import styled from "styled-components";
export const PiWrapper = styled.section`
  .containerPI {
    width: 600px;
    border-radius: 10px;
    background-color: white;
    padding: 10px;
  }
  .GridMainPI {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    overflow-y: scroll;
  }
  .GridMainPI::-webkit-scrollbar {
    width: 3px;
  }
  .GridMainPI::-webkit-scrollbar-thumb {
    background: #888;
  }
  .headerPI {
    text-align: center;
    font-size: 1.9rem;
    font-weight: 700;
    color: #5858fc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    position: fixed;
    background-color: #fff;
    width: 590px;
    z-index: 100;
  }
  .headerPI span {
    font-family: "El messiri";
  }
  .allitemsPI {
    padding-top: 55px;
  }
  .headerSIPI {
    font-size: 1.3rem;
  }
  .bodySIPI {
    padding: 10px 0px;
    color: #5858fc;
  }
  .adderPI {
    display: flex;
    align-items: center;
  }
  .singleItemPI {
    padding: 10px;
  }
  .addPI {
    padding: 0px 10px;
  }
  .avatarPI {
    padding: 15px 7px 7px 0px;
    margin: 10px 0px;
  }
  .itematLevelsPI {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* justify-content: space-evenly; */
  }
  .itematLevelsPIDIV {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
  }
  .editBtnsPI {
    display: flex;
  }
  .EditbtnPI {
    background-color: #5858fc;
    color: white;
    margin-left: 10px;
  }
  .EditbtnPI:hover {
    background-color: #fff;
    color: #5858fc;
  }
  .textfieldPI {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4px 10px;
  }
  .textAreaPI {
    width: 100%;
    border: none;
    border-bottom: 1px solid #5858fc;
    outline: none;
    font-size: 1.2rem;
    padding: 4px;
  }
  @media (max-width: 600px) {
    .headerPI {
      width: 440px;
    }
    .containerPI {
      width: 450px;
    }
    .GridMainPI {
      height: 70vh;
    }
  }
  @media (max-width:470px) {
    .GridMainPI{
      height: 90vh;
    }
  }
`;
