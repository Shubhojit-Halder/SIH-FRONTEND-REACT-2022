import styled from 'styled-components';
export const FriendnavWrapper=styled.div`
.heading{
    display: flex;
    justify-content: space-between;
    padding: 10px;
}
.searchInput{
    width: 85%;
    border: none;
    outline: none;
    border-bottom: 1px solid grey;
}
.navCompFR{
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    font-size: 1.2rem;
    margin: 5px 0px;

}
.navCompFR:hover{
    color:#5858fc;
}
.itemFR{
    padding: 0px 7px;
    font-weight: 500;
}
@media (max-width:600px) {
    .navCompFR{
    margin: 0px 0px;

    }
    .allfriendsFR{
        display: flex;
        font-size: .8rem;
        justify-content: space-around;
    }
    .iconsFR{
        display: none;
    }
    .itemFR{
    padding: 0px 0px;
        font-size: .8rem;
    }
}
`