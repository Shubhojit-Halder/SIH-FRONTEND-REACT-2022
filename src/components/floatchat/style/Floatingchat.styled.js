import styled from 'styled-components'
export const FloatingChatWrapper = styled.section`
.mainFloatingChat{
    position: fixed;
    min-height:50px;
    width: 270px;
    /* border: 1px inset rgba(24, 0, 60, 0.251); */
    /* border-radius: 5px 5px 0 0; */
    box-shadow:2px 1px 2px rgba(0, 0, 0, 0.479);
    bottom: 10px;
    right: 100px;
    z-index: 100;
    padding: 0;border-radius: 5px
}
.headerFloatingChat{
    /* border-radius: 5px 5px 0 0; */
    border-radius: 5px;
    /* background:linear-gradient(90deg,rgb(50, 59, 161),rgb(193, 211, 244)); */
    height:50px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    /* padding: 5px; */
    /* height: 100%; */
    background:linear-gradient(298deg, rgb(210, 216, 255) 0%, rgb(234, 252, 255) 100%);
}
.messagetxtFloatingChat{
    /* background-color:red; */
    align-items: center;
    justify-content: flex-start;
    display: flex;
    font-size:15px;
    height:100%;
    padding-left:30px;
}
.buttonupFloatingChat{
    display: flex;
    align-items: center;
    justify-content: center;
}
.searchbarFloatingChat{
    /* padding-left: 10px; */
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:0 10px
}
.searchinputFloatingChat{
    outline:none;
    border:1px solid grey;
    height:30px;
    font-size: 15px;
    padding-left:10px;
    width:80%;
    border-radius:30px;
    margin-right: 5px;
}
.friendslistFloatingChat{
    height:350px;
    width:100%;
    background-color:white;
    overflow-y: scroll;
    border-radius: 5px
}

.friendslist::-webkit-scrollbar{
    width:1px;
}
.friendslist::-webkit-scrollbar-thumb{
    border-radius:10px;
    background: grey;
}
@media screen and (max-width:750px) {
    .main{
        display: none;
    }
}`