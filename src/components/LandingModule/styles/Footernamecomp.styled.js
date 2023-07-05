import styled from 'styled-components';
const FTNCwrapper = styled.div`
.mainFTNC {
  display: flex;
  justify-content: space-evenly
}
.imgFTNP {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin: 0px 5px;
  border: 1px solid black;
}
.totalFTNC {
  padding: 5px 10px;
  display: flex;
  align-items: center;
}
.totalFTNC span {
  font-weight: 500;
}
.totalFTNC h4 {
  font-family: "El Messiri";
  color: #5858fc;
  padding: 5px 10px 0px 10px;
}
.contactsFCC h4{
  font-family: "El Messiri";
  color: #5858fc;
  padding: 5px 10px 0px 20px;
}
.contactsFCC p{
  padding: 5px 10px 0px 20px;
  font-size:.9rem;
}
`
export default FTNCwrapper;