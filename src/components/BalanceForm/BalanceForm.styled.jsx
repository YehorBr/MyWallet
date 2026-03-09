import styled from "styled-components";

export const BalanceFormStyled = styled.form`
  display: flex;

  justify-content: center;

  margin-bottom: 59px;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    flex-direction: column;
  }
`;

export const InputDate = styled.input`
  color: #52555f;
  background-color: transparent;
  border: none;
  outline: none;

  font-weight: 700;

  &:focus {
    outline: none;
  }
`;

export const InputDescription = styled.input`
  width: 268px;
  color: #52555f;
  background-color: transparent;
  border: 2px solid #f5f6fb;
  outline: none;

  height: 40px;

  margin-left: 23px;

  border-radius: 16px 0 0 0;

  padding-left: 21px;

  &:focus,
  &:hover {
    outline: none;
    border: 2px solid #ff751d;
  }

  &::placeholder {
    color: #c7ccdc;
  }
  &:focus::placeholder,
  &:hover::placeholder {
    color: #ff751d;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
`;

export const ButtonSelect = styled.button`
  height: 40px;
  width: 188px;

  display: flex;
  align-items: center;

  color: #c7ccdc;
  background-color: transparent;

  border: 2px solid #f5f6fb;
  outline: none;

  padding: 0 10px 0 20px;
  cursor: pointer;

  &:hover {
    color: #ff751d;
    border-color: #ff751d;

    .chevron {
      color: #ff751d;
    }
  }

  .btn-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .chevron {
    font-size: 12px;
    color: #c7ccdc;
  }
`;

export const CategoriesList = styled.ul`
  position: absolute;
  top: 40;
  left: 0;

  list-style: none;

  background-color: #fff;
  border: ${({ $open }) => ($open ? "2px solid #F5F6FB" : "none")};

  & button {
    width: 188px;
    padding: 10px 0;
    size: 12px;
    font-weight: 400;

    color: #c7ccdc;
    background-color: transparent;
    border: none;

    &:hover,
    &:focus {
      outline: none;

      color: #52555f;
      background-color: #f5f6fb;
    }
  }
`;

export const InputSum = styled.input`
  width: 120px;
  height: 40px;

  color: #52555f;
  background-color: transparent;
  border: 2px solid #f5f6fb;
  outline: none;
  padding: 0 0 0 20px;

  border-radius: 0 16px 16px 0;

  &:focus,
  &:hover {
    outline: none;
    border: 2px solid #ff751d;
  }

  &::placeholder {
    color: #c7ccdc;
  }
  &:focus::placeholder,
  &:hover::placeholder {
    color: #ff751d;
  }
`;

export const SubmitButton = styled.button`
  color: #fff;
  border: none;
  background-color: #ff751d;
  border-radius: 16px;
  padding: 12px 34px;
  font-weight: 700;
  width: 125px;
  text-align: center;

  &:focus,
  &:hover {
    color: #e1e5f0;
    background-color: #e4600e;
  }
`;

export const ResetButton = styled.button`
  text-align: center;

  color: #52555f;
  border: 2px solid #f5f6fb;
  background-color: #fff;
  border-radius: 16px;
  padding: 12px 25px;
  margin-left: 15px;
  font-weight: 700;
  width: 125px;

  &:hover,
  &:focus {
    color: #ff751d;
    border-color: #ff751d;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-left: 27px;

  @media screen and (min-width: 768px) and (max-width: 1199px){
   margin:30px 0 0 0 ;
   justify-content: center;
  }
`;

export const FormContentContainer = styled.div`
  display: flex;
`
