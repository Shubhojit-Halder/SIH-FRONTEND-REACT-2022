import styled from 'styled-components'
export const RightdivFrWrapper= styled.div`
.paperCompRd{
    background: #e6e6e6;
    height: 80vh;
    overflow-y: scroll;
    margin: 5px;
}
.paperCompRd::-webkit-scrollbar{
    width: 2px;
}
.paperCompRd::-webkit-scrollbar-thumb {
  background: darkgray;
}
.imgNamecompRd{
    display: flex;
    align-items: center;
}
.NameRD{
    font-size: 1.3rem;
    padding: 5px 10px;
    font-weight: 500;
}
.rowRD{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid grey;
}
.btnRD,.btnRDFR{
    margin: 5px;
    background: #5858fc;
    width: 150px;
}

.btnRD:hover,.btnRDFR:hover{
    background: #fff;
    color: #5858fc;
    border: 1px solid #5858fc;


}
.imgRD{
    width:50px;
    border-radius: 50%;
    outline: 1px solid white;
}
@media (max-width: 850px) {
    .btnRD,.btnRDFR{
        width: 100px;
    }
    
}
@media (max-width: 700px) {
    .NameRD{
        font-size: 1rem;
    }
}
@media (max-width: 450px){
    .btnRD{
        width: 85px;
        padding: 5px;
        font-size: .8rem;
    }
    .btnRDFR{
        width: 70px;
        padding: 5px;
        font-size: .8rem;
    margin: 2px;

    }
}
`