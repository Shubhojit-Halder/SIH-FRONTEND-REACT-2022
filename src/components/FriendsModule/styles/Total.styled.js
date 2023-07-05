import styled from "styled-components";
export const TotalFriends = styled.div`
  .FMGrid,
  .FMGridRight {
    margin-top: 70px;
  }
  .NavFM {
    padding: 5px 0px;

  }
  .FullGridFM::-webkit-scrollbar{
    width: 2px;
}
.FullGridFM::-webkit-scrollbar-thumb {
  background: darkgray;
}
  @media (max-width: 600px) {
    .FMGridRight {
      margin-top: 2px;
    }
  }
`;
