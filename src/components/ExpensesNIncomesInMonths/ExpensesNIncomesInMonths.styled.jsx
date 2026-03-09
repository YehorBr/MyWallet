import styled from "styled-components";

export const ContainerInMonth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  border-radius: 30px;

  padding: 12px 0;

  margin-bottom: 30px;

  @media screen and (max-width: 767px) {
    padding: 20px 10px 25px;
  }

  & span {
    display: flex;

    color: #52555f;

    font-weight: 700;
    font-size: 14px;

    @media screen and (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
  }

  & span:nth-child(2) {
    height: 30px;

    border: 1px solid #e0e5eb;
    margin: 0 20px;
  }
`;

export const InMonthSum = styled.p`
  color: ${({ $isExpens }) => ($isExpens ? "#E53935" : "#407946")};
  margin-left: 15px;

   @media screen and (max-width: 767px) {
    margin: 0;
   }
`;
