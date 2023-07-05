import styled from "styled-components";
export const ContentOnClickWrapper = styled.section`
    .maincontainerSmallScreen {
      background: linear-gradient(
          rgba(255, 255, 255, 0.96),
          rgba(132, 132, 132, 0.92)
        ),
        url(${(props) => props.bgImg});
      background-size: 22%;
      background-repeat: repeat;
      height: 100vh;
      width: 100vw;
      display: none;
      overflow-y: scroll;
    }
    .mainContainerBigScreen{
        display: flex;
        justify-content: center;
        height: 90vh;
        margin-top: 70px;
        overflow-y: scroll;
    }
    .mainContainerBigScreen::-webkit-scrollbar,.maincontainerSmallScreen::-webkit-scrollbar {
      width: 3px;
    }
    .mainContainerBigScreen::-webkit-scrollbar-thumb,.maincontainerSmallScreen::-webkit-scrollbar {
      background: #00000087;
    }
    .sidebar{
        height: 95vh;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width:0px;
    }
    .sidebar::-webkit-scrollbar-thumb{
        background: #0000005a;
    }
    @media (max-width: 600px) {
      .maincontainerSmallScreen {
        display: block;
      }
    }
  `;
  export const ContainerSectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    width: 100%;
    .section2 {
      /* height: 100vh; */
      width: 600px;
    }
    @media screen and (max-width: 600px) {
      .section2 {
        width: 400px;
      }
    }
    @media screen and (max-width: 400px) {
      .section2 {
        width: 350px;
      }
    }
  `;
export const ContentWrapperinCSW = styled.div`
      position: relative;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
  
      .main2 {
          position: relative;
          height: 100%;
          width: 100%;
          /* background-color:red; */
          display: flex;
          flex-direction: column;
      }
      .uppergrid {
          display: grid;
          grid-template-columns: 3fr 8fr 2fr 1fr;
          padding: 15px;
      }
      .uppergridd {
          display: grid;
          grid-template-columns: 2fr 7fr 4fr 1fr;
          padding: 15px;
      }
      .owner {
          justify-content: center;
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          /* background-color:red; */
      }
      .name {
          font-size: 16px;
          word-wrap: break-word;
          white-space: pre-wrap;
          word-break: break-word;
      }
      .time {
          font-size: 12px;
      }
      .imageDiv {
          /* background-color: red; */
          min-height: 250px;
      }
      .reactDiv {
          height: 50px;
          display: grid;
          grid-template-columns: auto auto auto;
          align-items: center;
          /* padding: 10px; */
          padding-bottom: 60px;
          /* justify-content: center;  */
      }
      .ownercontainer {
          padding: 5px;
          margin: 10px;
          border: 1px solid rgba(128, 128, 128, 0.557);
          background-color: rgba(193, 193, 193, 0.263);
      }
      .textCN {
          display: block;
          unicode-bidi: embed;
          white-space: pre;
          background-color: #fff;
      }
      .textContainer {
          padding: 10px;
          background-color: #fff;
          
      }
      .item {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
      }
      .commentsection {
          min-height: 100px;
          border-top: 1px solid rgba(0, 0, 0, 0.164);
          overflow: hidden;
      }
      .commentgrid {
          display: grid;
          align-items: center;
          justify-content: center;
          /* background-color:red; */
          grid-template-columns: 1fr 5fr;
          padding: 10px;
      }
      .commentgive {
          height: 100%;
          width: 100%;
          display: flex;
          /* align-items: center; */
          justify-content: center;
          /* background-color:red; */
      }
      .commentadd {
          width: 90%;
          resize: none;
          height: 25px;
          outline: none;
          font-size: 15px;
          border: none;
          font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
              "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      }
      .textarea {
          height: 50px;
  
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          padding: 18px;
          box-sizing: border-box;
          /* background-color: red; */
          border: 1px solid grey;
          /* box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5); */
      }
      .commentadd::-webkit-scrollbar {
          width: 0px;
      }
      .commentadd::-webkit-scrollbar-thumb {
          background-color: black;
      }
      .showpreviouscomments {
          padding-left: 20px;
          font-size: 16px;
          text-decoration: underline;
          cursor: pointer;
      }
      @media screen and (max-width: 800px) {
        .uppergrid {
          display: grid;
          grid-template-columns: 3fr 12fr 1fr 1fr;
          padding: 15px;
      }
      }
      @media screen and (max-width: 400px) {
          .commentgrid {
              grid-template-columns: 1fr 4fr;
          }
      }
      @media screen and (max-width: 600px) {
          .owner {
              padding: 10px;
          }
      }
  `;
  