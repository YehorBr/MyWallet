import styled from "styled-components";

export const CurrPeriod = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  & p {
    color: #52555fb2;
    font-weight: 400;
    font-size: 12px;

    margin-bottom: 5px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

export const CurrPeriodSlider = styled.div`
  display: flex;
  align-items: center;

  & span {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    text-align: center;

    margin: 0 15px;
  }

  & button {
    background-color: transparent;
    border: none;
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: column;

  background-color: #fff;

  box-shadow: 0 4px 16px #aab2c533;
  border-radius: 16px;

  padding: 20px 220px 30px 220px;

  border-radius: 30px;

  @media (min-width: 768px) and (max-width: 1199px) {
    padding: 20px 25px 30px 25px;
  }

  & div:first-child {
    display: flex;

    align-items: center;
    justify-content: center;

    & button {
      background-color: transparent;
      border: none;
    }

    & span {
      font-weight: 700;
      font-size: 14px;

      text-transform: uppercase;

      margin: 0 20px;
    }
  }
`;
