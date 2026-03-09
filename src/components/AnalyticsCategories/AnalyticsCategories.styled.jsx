import styled from "styled-components";

export const CategoriesList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-wrap: wrap;

    gap: 10px;

    font-weight: 400;
    font-size: 12px;
    text-align: center;
    text-transform: uppercase;
    color: #52555F;

    margin-top: 20px;
    

     & li {
    display: grid;
    grid-template-rows: 24px 60px 40px; 
    align-items: center;
    justify-items: center;

    width: 90px;
    text-align: center;
  }

  & li p {
    margin: 0;
  }
`