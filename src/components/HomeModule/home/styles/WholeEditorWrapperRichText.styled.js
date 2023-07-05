import styled from "styled-components";
export const WholeEditorWrapperRichText = styled.section`
  .mainPaperRTE {
    width: 100vw;
    height: 100vh;
    margin-top: -80px;
    border-radius: 0px;
    padding: 50px 0px;
    background-color: #0000009b;
    overflow-y: scroll;
  }
  .mainPaperRTE::-webkit-scrollbar{
    background-color: transparent;
    width: 5px;
  }
  .mainPaperRTE::-webkit-scrollbar-thumb {
  background: #a5a5a5;
  border-radius: 5px;
}
  .subPaperRTE {
    background-color: #fff;
    width: 600px;
    border-radius: 5px;
    padding: 30px;
    margin: 0px auto;
  }
  .topDivRTE {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .containerEditorRTE {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .openedRTE {
    background-color: #fff;
    color: #5858fc;
    margin: 10px 0px;
    padding: 10px;
  }
  .txtAreaRTE {
    font-size: 1.2rem;
    outline: none;
    border: none;
    resize: none;
    padding: 5px;
    background-color: transparent;
  }
  .previewRTE {
    padding: 10px;
  }
  @media (max-width: 600px) {
    .subPaperRTE {
      width: 450px;
    }
  }
  @media (max-width: 470px) {
    .subPaperRTE {
      width: 350px;
    }
  }
`;
