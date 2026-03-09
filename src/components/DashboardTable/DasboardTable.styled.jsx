import styled from "styled-components";

export const TableWrapper = styled.div`
  width: fit-content;
  border: 2px solid #f5f6fb;
  border-radius: 16px 16px 0 0; 
  overflow: hidden; 
`;

export const TableStl = styled.table`
  max-width: 732px;
  font-size: 12px;

  background-color: transparent;
  border-collapse: separate; 
  border-spacing: 0;
  table-layout: fixed;

  @media screen and (min-width: 1200px) {
    width: 732px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 605px;
  }
`;

export const TableHeadStl = styled.thead`
  display: table;
  width: 100%;
  table-layout: fixed;

  background-color: #f5f6fb;
  font-weight: 700;

  & th {
    text-transform: uppercase;
    background-color: #f5f6fb; 
  }

  & th:first-child {
    padding: 5px 60px 5px 20px;
    border-radius: 16px 0 0 0; 
    @media screen and (min-width: 768px) and (max-width: 1199px) {
      padding: 5px 35px 5px 20px;
    }
  }

  & th:nth-child(2) {
    padding: 10px 80px 10px 0px;
    text-align: start;
    @media screen and (min-width: 768px) and (max-width: 1199px) {
      padding: 10px 70px 10px 0px;
    }
  }

  & th:nth-child(3) {
    text-align: start;
    padding: 10px 38px 10px 0;
    @media screen and (min-width: 768px) and (max-width: 1199px) {
      text-align: center;
      padding: 10px 0 10px 0;
    }
  }

  & th:nth-child(4) {
    text-align: end;
    padding: 10px 0 10px 60px;
    @media screen and (min-width: 768px) and (max-width: 1199px) {
      padding: 10px 0 10px 40px;
    }
  }

  & th:last-child {
    padding: 5px 60px 5px 60px;
    border-radius: 0 16px 0 0; 
    @media screen and (min-width: 768px) and (max-width: 1199px) {
      padding: 10px 30px 10px 30px;
    }
  }
`;

export const TableBodyStl = styled.tbody`
  display: block;
  max-height: 480px;
  overflow-y: auto;

  border: 2px solid #f5f6fb;
  border-top: none;

  @media screen and (min-width: 768px) and (max-width: 1199px){
    max-height: 350px;
  }

  & tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  & td {
    font-weight: 400;
    font-size: 12px;
    color: #52555f;
    border-bottom: 2px solid #f5f6fb;
  }

  & td:first-child {
    padding: 5px 20px 5px 20px;
  }

  & td:nth-child(2) {
    padding: 10px 44px 10px 0;
    overflow: hidden;
    @media screen and (min-width: 768px) and (max-width: 1199px) {
      padding: 10px 0;
    }
  }

  & td:nth-child(3) {
    padding: 10px 28px 10px 0;
    @media screen and (min-width: 768px) and (max-width: 1199px) {
      text-align: center;
      padding: 10px 0;
    }
  }

  & td:nth-child(4) {
    text-align: end;
    color: ${({ $isIncomes }) => ($isIncomes ? "#407946" : "#E7192E")};
    font-weight: 700;
    padding: 10px 0 10px 48px;
    white-space: nowrap;
    @media screen and (min-width: 768px) and (max-width: 1199px) {
      padding: 10px 0;
    }
  }

  & td:last-child {
    padding: 0 46px 0 52px;
    @media screen and (min-width: 768px) and (max-width: 1199px) {
      padding: 0 20px 0 40px;
    }
  }

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    padding: 5px;
    border-radius: 20px;
    &:hover,
    &:focus {
      background-color: #f5f6fb;
    }
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #F5F6FB;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff751d;
    border-radius: 10px;
  }
`;