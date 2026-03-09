import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
      justify-content: ${({ $isAnalytics }) => ($isAnalytics ? "center" : "space-between")};
  }

  @media screen and (max-width: 767px) {
      justify-content: center;
      flex-direction: column;
  }

  & label {
    color: #52555fb2;
    height: 20px;
    font-weight: 500;

    @media screen and (min-width: 768px) and (max-width: 1199px) {
      margin-right: 21px;
    }
  }

  & button {
    width: 125px;

    color: #52555fb2;
    background-color: transparent;
    padding: 12px 6px;
    border-radius: 16px;
    border: 2px solid #fff;
    text-transform: uppercase;

    &:hover,
    &:focus {
      color: #ff751d;
      border: 2px solid #ff751d;
      outline: none;
    }

     @media screen and (max-width: 767px){
      border-radius: 0 22px 22px 0;
    }
  }

  & input {
    text-align: center;
    font-weight: 700;

    color: #000;
    background-color: transparent;

    padding: 12px 0;

    border-radius: 16px;
    border: 2px solid #fff;

    &:focus {
      outline: none;
      border: 2px solid #ff751d;
    }

    @media screen and (max-width: 767px){
   border-radius: ${({ $isAnalytics }) => $isAnalytics ? "22px" : "22px 0 0 22px"};
    }
  }
`;
