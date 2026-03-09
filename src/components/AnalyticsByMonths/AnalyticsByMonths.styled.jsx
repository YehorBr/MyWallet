import styled from "styled-components";

export const AnalyticsByMonthList = styled.ul`
    max-width: 230px;

    background-color: #F5F6FB;

    border-radius: 16px 16px 16px 0;


    & li{
        width: 230px;
        display: flex;
        justify-content: space-between;

        padding: 10px 20px 10px 22px;

        border-top: 3px solid #fff;

        & p{
            
            color: #52555F;
            font-size: 13px;
        }
        
        & p:first-child{
            width: 84px;
        }
    }
`
export const AnalyticsByMonthContainer = styled.div`


    margin-left: auto;
    
    @media screen and (min-width: 768px) and (max-width: 1199px){
        margin: 40px auto 0 30px ;
    }
`
