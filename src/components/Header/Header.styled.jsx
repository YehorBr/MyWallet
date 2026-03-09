import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 12px 0;
`

export const NavLinkSpanStl = styled.span`
    position: relative;
    
    & p{
        position: relative;
         z-index: 2;

        font-weight: 800;
        font-size: 16px;

        text-transform: uppercase;
    }

    & span:first-child{
        position: absolute;

        z-index: 0;

        bottom: 5px;
        left: -21px;

        padding:  12px 16px;

        background-color: #FB7C2F33;

        border-radius: 8px;
    }

    & span:nth-child(2){
        position: absolute;
        top: -1px;
        left: -15px;

        z-index: 1;

        padding:  12px 16px;

        background-color: #FB7C2F;

        border-radius: 8px;
    }
`

export const UserMenuContainer = styled.div`
    display: flex;
    
    align-items: center;

    color: #52555F;
    font-weight: 400;
    font-size: 14px;

    & p:first-child{
        background-color: #F5F6FA;

        font-weight: 700;

        border-radius: 50%;

        padding: 7px 12px;
        margin-right: 10px;

        @media screen and (max-width: 767px){
            margin-right: 15px;
        }
    }

    & span{
        height: 36px;

        border: 1px solid #E0E5EB;

        margin: 0 20px;
    }

    & button{
        color: #52555F;
        background-color: transparent;
        font-size: 14px;
        
        border: none;
        border-bottom: 1px solid #52555F;

        @media screen and (max-width: 767px){
            border: none;
            padding: 5px 5px 2px 5px;
        }

        &:hover,
        &:focus{
            color: #FB7C2F;
            border-bottom: 1px solid #FB7C2F;

            @media screen and (max-width: 767px){
            border: none;
        }
        }
    }
`