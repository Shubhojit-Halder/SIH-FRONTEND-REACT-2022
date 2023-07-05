import styled from "styled-components";
export const LikerListWrapper = styled.section`
.wholePageLL {
  /* background: #00000074; */
  height: 100vh;
  margin-top: -80px;
  padding-top: 70px;
}
.subPaperLL {
  width: 500px;
  margin: 0 auto;
  height: 80vh;
  padding: 10px;
  padding-top:0px;
  overflow-y: scroll;
  border-radius: 5px;
  border-top: 2px solid #5858fc;
}
.subPaperLL::-webkit-scrollbar{
    margin-top: 50px;
    width:2px;
}
.subPaperLL::-webkit-scrollbar-thumb{
    background: #5858fc;
    border-radius: 5px;

}
.oneLiker {
  display: flex;
  align-items: center;
  margin: 10px;
}
.imgLL {
  border-radius: 50%;
  border: 2px solid white;
  outline: 1px solid black;
}
.headerLL{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
    position: fixed;
    background-color: #fff;
    width: 480px;
    color: #5858fc;
}
.allCompLL{
    padding-top:60px;
    /* margin-top: 70px; */
}
.nameLL{
    padding-left: 10px;
    font-size: 1.1rem;
}
@media (max-width: 600px) {
  .wholePageLL {
  padding-top: 50px;

  }
  .subPaperLL {
    height: 90vh;
    width: 420px;
    margin-top: 10px;
  }
  .headerLL{
    width: 400px;
    margin-top: -2px;
  }
}
@media (max-width:450px) {
    .subPaperLL {
    width: 350px;
    height: 88vh;

  }
  .headerLL{
    width: 330px;
  }
}
`;