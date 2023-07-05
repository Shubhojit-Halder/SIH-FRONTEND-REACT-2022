import styled from "styled-components";
export const EditPersonalDataWrapper = styled.section`
    .headerEGIP{
        font-size: 1.7rem;
        text-align: center;
        padding: 10px;
        font-weight: 700;
        color:#5858fc;
        border-bottom: 2px solid grey;

    }
    /* .allElementsEGIP{
        height: 90vh;
        overflow-y: scroll;
    } */
    .singleElementEGIP{
        display: flex;
        align-items: flex-start;
        padding: 10px;
        flex-direction: column;
    }
    .tagsEGIP{
        padding: 5px;
        font-size: 1.2rem;
        font-weight: 600;
    }
    .prevStoredValEGIP{
        width: 600px;
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
        color: #5858fc;

    }
    .editItemPaperEGIP{
        width:600px
    }
    .IpBaseEGIP{
        font-size: 1.1rem;
    }
    @media (max-width:600px) {
        .headerEGIP{
        font-size: 1.4rem;

        }
        .tagsEGIP{
        padding: 5px;
        font-size: 1rem;
        font-weight: 600;
    } 
    .editItemPaperEGIP{
        width:350px
    }
    .IpBaseEGIP{
        font-size: 1rem;
    }
    }
`