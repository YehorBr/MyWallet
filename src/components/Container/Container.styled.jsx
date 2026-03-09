import styled from "styled-components";

export const ContainerStyled = styled.div`
  width: 100%;
  max-width: 1060px; 
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767px) {
    max-width: 300px;
    padding: 0 10px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    max-width: 666px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1060px;
  }
`;