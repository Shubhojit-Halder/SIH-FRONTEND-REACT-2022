import styled from "styled-components";

const RightdivWrapper = styled.section`
.upper{
    padding: 10px 0px;
    margin-top: 18px;
    /* border: 1px solid; */
    /* border-radius: 5px ; */
}
.upper p{
    text-align: center;
    margin-top: -10px;
    padding: 10px 10px 10px 20px;
    /* border-bottom: 1px solid; */
    font-size: 1.2rem;
    font-weight: 500;
    color:  rgb(38, 38, 38);
    display: flex;
    align-items:center ;
    justify-content: space-between;
}
.upper ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin-left: -20px;
}
.upper ul li{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0px 10px 0px;
    cursor: pointer;
}
.upper ul li:hover{
    color:rgb(132, 0, 255)
}
.upper ul li span{
    padding: 0px 10px;
}

.lower{
    height: 220px;
}
.seeall{
    /* position:fixed; */
    padding: 15px 0px 15px 0px;
    /* display: grid; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 52px;
    width: 100%;
    border-bottom: 1px solid;
    margin-top: 10px;
    /* border-bottom: 1px solid; */
    /* justify-content:space-between; */
    grid-template-columns: 5fr 5fr;
    /* background: linear-gradient(298deg, rgb(247, 253, 255) 0%, rgb(92, 92, 92) 38%, rgb(78, 78, 78) 38%, rgb(20, 20, 20) 100%); */
    /* border-radius:10px 10px 10px 10px; */
}
.followerstitle{
    font-size: .85rem;
    color:  rgb(38, 38, 38);
    font-weight: 500;
}

.Req{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 5px;
    padding:5px 5px;
    border: 1px solid rgb(32, 32, 32);
    /* justify-content: space-around; */
}
.reqName{
    padding:0px 5px;
    font-size: 0.8rem;
}
.reqImg{
    border-radius: 50%;
}
`
export default RightdivWrapper;