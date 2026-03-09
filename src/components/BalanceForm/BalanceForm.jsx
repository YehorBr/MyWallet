import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  addExpens,
  addIncome,
  minusBalance,
  plusBalance,
} from "../../redux/WalletSlice";
import { useDispatch } from "react-redux";
import {
  categoriesExpensesArr,
  categoriesIncomesArr,
} from "../../categoriesArr";
import {
  BalanceFormStyled,
  ButtonsContainer,
  ButtonSelect,
  CategoriesList,
  DropdownContainer,
  FormContentContainer,
  InputDate,
  InputDescription,
  InputSum,
  ResetButton,
  SubmitButton,
} from "./BalanceForm.styled";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

export const BalanceForm = () => {
  const [category, setCategory] = useState(null);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const [year, setYear] = useState(() => {
    const date = new Date();

    return date.getFullYear();
  });

  const dispatch = useDispatch();

  const isIncomes = pathname.endsWith("/incomes");

  const minDate = () => {
    return `${year}-01-01`;
  };

  const maxDate = () => {
    return `${year + 1}-01-01`;
  };

  const handleReset = (e) => {
    const form = e.target.form;
    form.reset();
    setCategory(null);
  };

  const categoryBtnContent = (category, isIncomes) => {
    if (category) {
      return category.label;
    }

    if (isIncomes) {
      return "Категорія прибутку";
    }

    return "Категорія товару";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    let dateValue;

    if (form.elements.date.value === "") {
      dateValue = new Date().toISOString().split("T")[0];
    } else {
      dateValue = form.elements.date.value;
    }

    if (!category) {
      alert("Оберіть категорію");
      return;
    }

    const newItem = {
      id: Date.now(),
      date: dateValue,
      description: form.elements.description.value,
      category: category,
      sum: form.elements.sum.value,
    };

    if (isIncomes) {
      dispatch(addIncome(newItem));
      dispatch(plusBalance(Number(newItem.sum)));
    } else {
      dispatch(addExpens(newItem));
      dispatch(minusBalance(Number(newItem.sum)));
    }

    form.reset();
  };

  return (
    <>
      <BalanceFormStyled onSubmit={handleSubmit} action="">
        <FormContentContainer>
        <InputDate type="date" name="date" min={minDate()} max={maxDate()} />
        <InputDescription
          type="text"
          name="description"
          placeholder={isIncomes ? "Опис прибутку" : "Опис товару"}
        />
        <DropdownContainer
          onMouseLeave={() => {
            setOpen(false);
          }}
        >
          <ButtonSelect
            onMouseOver={() => {
              setOpen(true);
            }}
            type="button"
          >
            <span className="btn-content">
              <span className="btn-text">{categoryBtnContent(category, isIncomes)}</span>
              {open ? <FaChevronUp className="chevron"/>  : <FaChevronDown className="chevron" />}
            </span>
          </ButtonSelect>
          <CategoriesList $open={open}>
            {open &&
              (isIncomes ? categoriesIncomesArr : categoriesExpensesArr).map(
                (item) => {
                  return (
                    <li key={item.value}>
                      <button
                        onClick={() => {
                          setCategory(item);
                          console.log(item.icon);
                        }}
                        type="button"
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                },
              )}
          </CategoriesList>
        </DropdownContainer>
        <InputSum type="number" name="sum" placeholder="0,00" />
        </FormContentContainer>
        <ButtonsContainer>
        <SubmitButton>
          ВВЕСТИ
        </SubmitButton>
        <ResetButton
          onClick={handleReset}
          type="button"
        >ОЧИСТИТИ</ResetButton>
        </ButtonsContainer>
      </BalanceFormStyled>
    </>
  );
};
