import styled from "styled-components";

export const GrSettingHeaderWrapper = styled.section`
  .imageDivGs {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mainGs {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: -50px;
  }
  .profileImageGs {
    margin-top: -80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 154px;
    height: 154px;
    z-index: 1;
    border: 2px solid black;
    outline: 2px solid white;
  }
  .profileNameGs {
    display: flex;
    justify-content: center;
  }
  .nameContainerGs {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .nameGs {
    font-size: 2.5rem;
    font-weight: 600;
  }
  .identityGs {
    font-size: 1.2rem;
    color: rgb(56, 56, 56);
  }
  .coverImgGs{
    border-radius: 20px 20px 0px 0px;
  }
  .imageGs {
    border-radius: 50%;
  }
  .backButtonGs {
    margin-left: 15%;
    margin-top: 20px;
    z-index: 1;
    color: black;
    border: none;
    background: transparent;
  }
  @media (max-width: 900px) {
    .backButtonGs{
      margin-left: 7%;
    }
  }
`;
