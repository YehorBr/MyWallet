import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  addExpens,
  addIncome,
  minusBalance,
  plusBalance,
} from "../../redux/WalletSlice";
import { useDispatch } from "react-redux";
import { categoriesExpensesArr, categoriesIncomesArr } from "../../categoriesArr";


export const BalanceForm = () => {
  const [category, setCategory] = useState(null);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const isIncomes = pathname.endsWith("/incomes");



  const handleReset = (e) => {
    const form = e.target.form;
    form.reset();
    setCategory(null);
  };

  const categoryBtnContent = (category, isIncomes) => {
    if (category) {
      return `${category.label}`;
    } else if (isIncomes) {
      return "Категорія прибутку";
    } else {
      return "Категорія товару";
    }
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
      <form onSubmit={handleSubmit} action="">
        <input type="date" name="date" min="2026-01-01" />
        <input
          type="text"
          name="description"
          placeholder={isIncomes ? "Опис прибутку" : "Опис товару"}
        />
        <div
          onMouseLeave={() => {
            setOpen(false);
          }}
        >
          <button
            onMouseOver={() => {
              setOpen(true);
            }}
            type="button"
          >
            {categoryBtnContent(category, isIncomes)}
          </button>
          <ul>
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
          </ul>
        </div>
        <input type="number" name="sum" />
        <button>Ввести</button>
        <button onClick={handleReset} type="button">
          Очистити
        </button>
      </form>
    </>
  );
};
