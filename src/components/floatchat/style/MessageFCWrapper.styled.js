import styled from "styled-components"
export const MessageFCWrapper = styled.section`
.mainMFC{
    position: fixed;
    min-height:50px;
    width: 270px;
    
    border-radius: 5px 5px 0 0;
    box-shadow:2px 1px 2px rgba(0, 0, 0, 0.479);
    bottom: 10px;
    right: 400px;
    z-index: 100;
    padding: 0;
    background: white;
    border-radius: 5px

}
.profileMFC{
    /* position: relative; */
    width: 68%;
    /* height:50px; */
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: break-word;
}
.headerMFC {
    width: 100%;
    display: flex;
    align-items: center;
 
    /* background: linear-gradient(298deg,  rgb(111, 142, 228) 38%, rgb(119, 103, 236) 100%); */
    background: #fff;
    border-radius:5px 5px 0 0;
    contain: content;
    color: #000;
    
}
.iconMFC{
    /* position: relative; */
    width: 20%;
    display: flex;
    justify-content: center;
    /* padding-right: 10px; */
}
.messagedivMFC{
    
    height: 370px;
    
    
}
.messageinputdivMFC{
    width:100%;
    background-color:rgb(255, 255, 255);
    position: absolute;
    bottom: 0;
    min-height: 100px;
    border-radius: 5px;
    
}
/* .messageinputdiv{

} */
.messagebarMFC{
    /* padding-left: 10px; */
    display:flex;
    align-items: center;
    position: relative;
    /* justify-content: space-between; */
    /* background-color:red */
    padding: 5px;
    border-radius: 5px;
    width: 100%;
    z-index: 100;
    background:white;
    flex-direction: column;
}
.messageinputMFC{
    outline:none;
    max-height:100px;
    /* overflow-y: scroll; */
    /* padding: 10px; */
    /* border: none; */
    /* width: 90%; */
    /* resize: none; */
}
.messageinputcontainerMFC{
    
    border:1px solid grey;
    min-height:45px;
    /* max-height: 100px; */
    font-size: 15px;
    /* padding-left:10px; */
    width:90%;
    border-radius:30px;
    margin-right: 5px;
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content:center;
    background-color: white;
}
.messageinputMFC::-webkit-scrollbar{
    width:4px;
}
.messageinputMFC::-webkit-scrollbar-thumb{
    background-color: grey;
}
.sendmessagebtngroupMFC{
    display: flex;
    /* flex-direction: row; */
    /* background-color:green */
    /* position: absolute; */
    bottom: 0;
    ;width:100%;
    height:50px;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
}
@media screen and (max-width:750px) {
    .mainMFC{
        display: none;
    }
}`