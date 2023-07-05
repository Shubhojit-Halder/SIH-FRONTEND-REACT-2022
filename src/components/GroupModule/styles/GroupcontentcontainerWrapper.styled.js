import styled from 'styled-components';
const GroupcontentcontainerWrapper= styled.div`

.section2{
    min-height:350px;width:600px;
    
}
.gusthirpindi
{
    height:100vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media screen and (min-width:1000px) {
    .gridMain{
        padding:20px 60px;
    }
}
@media screen and (max-width:1200px) {
    .section1,.section4,.section6,.section7{
        display: none;
    }
}
@media screen and (max-width:900px){
    .section5{
        display: none;
    }
}
@media screen and (max-width:600px) {
    .section2{
        width:400px;
    } 
}
@media screen and (max-width:400px) {
    .section2{
        width:350px;
    }
    
}`
export default GroupcontentcontainerWrapper;