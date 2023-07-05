import styled from "styled-components";
export const ChatFloatChat = styled.section`
  .mainFloatChat{
    height: 300px;
    width: 100%;
    position: absolute;
    overflow-y: scroll;
    padding-top: 50px;
    padding-bottom: 80px;
  }
  .mainFloatChat::-webkit-scrollbar {
    width: 8px;
  }
  .mainFloatChat::-webkit-scrollbar-thumb {
    border: 3px solid transparent;
    background: rgb(152, 151, 151);
    border-radius: 10px;
    background-clip: content-box;
  }
  .parentmessageFloatChat{
    background: rgba(128, 128, 128, 0.202);
    height: 50px;
    border-radius: 5px;
    padding: 5px;
  }
  .rightchatFloatChat{
    min-height: 20px;
    width: 60%;

    background: linear-gradient(
      298deg,
      rgb(168, 235, 246) 38%,
      rgb(255, 255, 255) 100%
    );
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    padding: 6px;
    border-radius: 0 7px 7px 7px;
    border: 1px solid grey;

    position: relative;
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: break-word;
  }
  .leftchatFloatChat{
    min-height: 20px;
    width: 60%;
    position: relative;
    left: 100px;
    /* background: red; */
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 6px;
    border-radius: 7px 7px 0 7px;
    border: 1px solid grey;
    /* box-shadow:2px 2px 2px grey; */
    background: linear-gradient(
      298deg,
      rgb(162, 231, 196) 38%,
      rgb(255, 255, 255) 100%
    );
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: break-word;
  }
  .showmorebtnFloatChat {
    font-size: 13px;
    cursor: pointer;
    color: darkblue;
  }
  .replyFloatChat {
    font-size: 12px;
    color: grey;
    text-align: center;
    /* width: 100%; */
    cursor: pointer;
  }
`;
