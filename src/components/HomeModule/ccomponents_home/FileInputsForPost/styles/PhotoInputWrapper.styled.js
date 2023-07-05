import styled from "styled-components";
export const PhotoInputWrapper = styled.section`
  .mediaSelectBtnDivPhotoInput {
    padding: 10px;
  }
  .PImain {
    padding: 5px;
  }
  @media (max-width: 480px) {
    .mediaSelectBtnDivPhotoInput {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .btnSelectPhotoInput{
        padding: 5px 0px;
    }
  }
`;
