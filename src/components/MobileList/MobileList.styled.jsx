import styled from "styled-components";

export const MobileWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MobileItem = styled.li`
  border-bottom: 2px solid #f5f6fb;
  padding-bottom: 10px;
`;

export const MobileTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 700;
`;

export const MobileBottom = styled.div`
  display: flex;
  gap: 20px;

  font-size: 12px;
  color: #52555f;
`;

export const Sum = styled.span`
  color: ${({ $isIncomes }) => ($isIncomes ? "#407946" : "#E7192E")};
`;