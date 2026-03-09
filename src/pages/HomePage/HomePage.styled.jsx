import styled from "styled-components";

export const AuthFormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    

    margin-top: 100px;

    & h1{
        font-weight: 900;
        font-size: 102px;
    }

    & h3{
        color: #52555F;

        font-weight: 700;
        font-size: 16px;

        text-transform: uppercase;
        text-align: start;
    }

    & div:first-child{
        margin-right: 119px;
    }
    
    @media screen and (min-width: 768px) and (max-width: 1199px){
        flex-direction: column;

        & div:first-child{
            margin-bottom: 50px;
            margin-right: 0px;
        }
        
        
        
    }

    @media screen and (max-width: 767px){
        flex-direction: column;

        & div:first-child{
            margin-bottom: 50px;
            margin-right: 0px;

            & h1{
                font-size: 64px;
            }

            & h3 {
                font-size: 13px;

            }
        }
        
        
        
    }
    
`