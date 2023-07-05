import styled from "styled-components";
const GroupPageWrapper = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Poppins&family=Secular+One&display=swap");
.wholePageGrouppage{
  height: 100vh; 
  overflow-y: scroll;
  overflow-x: hidden;
}
.wholePageGrouppage::-webkit-scrollbar {
  margin-top: 20px;
  width: 3px;
  border-radius: 10px;
}
.wholePageGrouppage::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgb(194, 193, 193);
}
.CoverImgGrouppage{
  height: 300px;
  width: 850px;
  border-radius: 20px 20px 0px 0px;
}
.imageDivGrouppage {
  display: flex;
  justify-content: center;
  border-radius: 5px 5px 0 0;
}

/* imageGridGrouppage{
  width: 100%;
} */
.mainGrouppage {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  /* padding: 0px 130px; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profileImageGrouppage {
  height: 150px;
  width: 150px;
  /* background-color: black; */
  position: absolute;
  z-index: 10;
  left: 53%;
  top: 220px;
  transform: translate(-55%, 0);
  border-radius: 50%;
  border: 2px solid black;
  /* outline: 2px solid black; */
  outline: 2px solid white;

}
.imageGrouppage {
  border-radius: 50%;
  margin-top: -5px;
  margin-left: -5px;
}
.profileNameGrouppage {
  /* width: 100%; */
  top: 60px;
  /* display: flex; */
  /* flex-direction: column; */
  position: relative;
  border-radius: 0 0 5px 5px;
  margin-bottom: 70px;
}
.nameContainerGrouppage{
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
.identityGrouppage {
  overflow-wrap: break-word;
  position: relative;
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
  padding-left: 10px;
}
.bioDataGrouppage {
  text-align: center;
  padding-bottom: 20px;
  margin: -60px 50px;
  flex-wrap: wrap;
  display: flex;
}
.rapGrouppage
{
    overflow-y: scroll;
}
.nameGrouppage {
  color: black;
  font-size: 35px;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  padding: 20px 20px 10px 0px;
  overflow-wrap: break-word;
  /* position: relative; */
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
  font-weight: bolder;
  
}
.aboutpaperDivGrouppage{
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  /* margin-left: 50px; */
}
.aboutheaderGrouppage{

}
.contentsGrouppage
{
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    align-items: center;
}
.editBtnGrouppage,
.followerBtnGrouppage {
  padding: 8px;
  margin: 10px 10px 0px 0px;
}
.editBtnGrouppage:hover,
.followerBtnGrouppage:hover {
  /* color: rgb(126, 0, 164);
  background-color: rgba(255, 0, 242, 0.057);
  border: 1px solid rgb(126, 0, 164); */
}
.backBtnGrouppage {
  color: black;
  padding: 15px 15px;
  margin-top: 5px;
}
.nameContainerGrouppage {
  display: flex;
  flex-direction: column;
  line-height: 17px;
  /* margin-top: -210px; */
  padding: 20px;
  float: right;
}
.identityGrouppage {
  font-family: "Poppins", sans-serif;
  padding: 10px 10px 10px 0px; 
  font-size: 20px;
}
.editingButtonsGrouppage {
  margin-bottom: 15px;
  margin-top: -5px;
}

.PhotosGridGrouppage::-webkit-scrollbar {
  margin-top: 0px;
  width: 1px;
  border-radius: 10px;
  background: #000;
}
.PhotosGridGrouppage::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgb(61, 61, 61);
}
.des1Grouppage
{
    font-size: 19px;
    padding: 10px 10px 10px 0px;
   
}
.des2Grouppage
{
    font-size: 19px;
    padding: 10px 10px 10px 10px;
}
.des2Grouppage div 
{
    font-size: 25px;
    padding-bottom: 5px;
    font-weight: 500;
    color:#5858fc;
}

  .editBtnsGrouppage{
    box-shadow: none;
  text-transform: none;
  font-size: 16;
  padding: 6px 15px;
  border: 1px solid;
  line-height: 1.5;
  width: 170px;
  background-color: #5858fc1a;
    border-color: rgb(125, 57, 250);
    color: rgb(125, 57, 250);

  }
  .editBtnsGrouppage:hover{
    /* background-color: rgb(125, 57, 250,0.15);
    border-color: rgb(125, 57, 250); */
    box-shadow: none;
    color: rgb(125, 57, 250);
  }
.aboutheaderGrouppage
{
    font-size: 25px;
    font-weight: 600;
    color:#5858fc;
}
.holdGrouppage {
    position: fixed;
    height: 250px;
    width: 270px;
    top: 100px;
}

@media (max-width: 900px) {
  .nameGrouppage{
    font-size: 2rem;
  }
  
  .editBtnsGrouppage{
    width: 90px;
  }
}
@media (max-width:600px) {

.CoverImgGrouppage{
    width: 380px;
  }
  .nameContainerGrouppage{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .joinBtngrpPage{
    width: 140px;
  }

  
}
`;
export default GroupPageWrapper;
