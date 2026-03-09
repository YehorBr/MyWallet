import styled from "styled-components";

export const RegForm = styled.form`
  display: flex;
  flex-direction: column;

  background-color: #fff;
  padding: 50px 95px;
  border-radius: 30px;

    @media screen and (max-width: 767px){
    padding: 40px 17px 50px;
  }

  & label {
    font-weight: 400;
    font-size: 12px;

    margin-bottom: 10px;

    @media screen and (max-width: 767px){
      font-size: 10px;
    }
  }

  & input {
    font-weight: 400;
    font-size: 14px;

    background-color: #f6f7fb;

    border: none;
    border-radius: 20px;

    padding: 15px 0 15px 30px;
    margin-bottom: 20px;

    &::placeholder {
      color: #a6abb9;
      font-weight: 400;
      font-size: 14px;
    }
  }

  & button {
    color: #ffffff;
    background-color: #ff751d;

    font-weight: 700;
    font-size: 12px;

    border-radius: 16px;
    border: none;

    padding: 12px 34px;
    margin-right: 15px;

    text-transform: uppercase;
    transition: all 0.3s ease;

    &:hover,
    &:focus {
      box-shadow: 0px 4px 15px rgba(255, 117, 29, 0.4);
    }
  }
`;
