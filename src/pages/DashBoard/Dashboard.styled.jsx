import { Link } from "react-router-dom";
import styled from "styled-components";

export const OutletContainer = styled.div`
  background-color: #fff;

    box-shadow: 0 4px 16px #aab2c533; 
  border-radius: 16px; 

  padding: 33px 20px 61px 20px;
  border-radius: 0 30px 30px 30px;
`;

export const BalanceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;



  /* margin-right: auto;
  margin-left: auto; */
  margin-top: 40px;
  margin-bottom: ${({$analyticsCont})=> $analyticsCont ? "25px" : "10px"};

  @media screen and (min-width: 768px) and (max-width: 1199px){
    margin-bottom: ${({$analyticsCont})=> $analyticsCont ? "25px" : "60px"};

  }

  @media screen and (max-width: 767px){
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: ${({$analyticsCont})=> $analyticsCont ? "15px" : "40px"};
  }
`;
export const AnalyticsLinkStl = styled(Link)`
  margin-left: ${({$analyticsLink})=> $analyticsLink ? "174px" : "0px"};

  padding: 7px;

   @media screen and (max-width: 767px){
    margin-left: 0;
    margin-bottom: ${({$analyticsLink})=> $analyticsLink ? "43px" : "10px"};
    padding: ${({$analyticsLink})=> $analyticsLink ? "0" : "7px 10px"};
   }

  &:hover {
    .analyticsLinkText,
    .analyticsIcon {
      color: #ff751d;
    }
  }

  & span {
    display: flex;
    align-items: center;
  }

  .analyticsLinkText {
    color: #52555fb2;
  }

  .analyticsIcon {
    color: #52555f;
    margin:0 15px;

    @media screen and (max-width: 767px){
      margin: 0;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1199px){
    margin-left: ${({$analyticsLink})=> $analyticsLink ? "80px" : "0px"};
  }
`;

export const BalanceLeft = styled.div`
  margin-left: auto;
`;

export const ExpensesOrIncomesLink = styled(Link)`
  display: block;
  width: 128px;

  text-transform: uppercase;
  text-align: center;

  color: ${({ $isIncomes, $incomesLink }) =>
    ($isIncomes && $incomesLink) || (!$isIncomes && !$incomesLink)
      ? "#FF751D"
      : "#000000"};
  background-color: ${({ $isIncomes, $incomesLink }) =>
    ($isIncomes && $incomesLink) || (!$isIncomes && !$incomesLink)
      ? "#FEFEFE"
      : "#FAFBFD"};
  font-size: 12px;
  font-weight: 700;

  padding: 12px 23px;

  border-radius: 16px 16px 0 0;

  &:hover,
  &:focus {
    color: #ff751d;
    background-color: #fefefe;

    outline: none;
  }
`;

export const LinksContainer = styled.div`
  display: flex;

  justify-content: start;
  align-items: center;
`;

export const TableStyled = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) and (max-width: 1199px){
      flex-direction: column;
      justify-content: start;
  }
`