import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogForm = styled.form`
  display: flex;
  flex-direction: column;

  background-color: #fff;

  padding: 50px 85px;
  border-radius: 30px;

  @media screen and (max-width: 767px){
    padding: 40px 17px 50px;
  }

  & input {
    font-weight: 400;
    font-size: 14px;

    background-color: #f6f7fb;

    border: none;
    border-radius: 30px;

    padding: 17px 0 17px 20px;

    &::placeholder {
      color: #a6abb9;
      font-weight: 400;
      font-size: 14px;
    }
  }

  & label {
    margin-bottom: 10px;

    @media screen and (max-width: 767px){
      font-size: 10px;
    }
  }

  & div {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 40px;

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
  }
`;

export const RegLink = styled(Link)`
  color: #52555f;
  background-color: #f5f6fb;

  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;

  border-radius: 16px;

  padding: 12px 15px;

  transition: all 0.1s ease;

  &:hover,
  &:focus {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.107);
  }
`;
