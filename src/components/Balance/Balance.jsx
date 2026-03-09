import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBalance } from "../../redux/selectors";
import { addBalance } from "../../redux/WalletSlice";
import { FormStyled } from "./Balance.styled";
import { useLocation } from "react-router-dom";
import { useWindowSize } from "react-use";

export const Balance = () => {
  const balance = useSelector(selectBalance);

  const [balanceInput, setBalanceInput] = useState(balance ?? "");
  const [isEditing, setIsEditing] = useState(false);
  const { pathname } = useLocation();
  const { width } = useWindowSize();

  useEffect(() => {
    if (!isEditing) {
      setBalanceInput(balance ?? "");
    }
  }, [balance]);

  const isAnalytics = pathname.endsWith("/analytics");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value.replace(/[^\d.]/g, "");
    setBalanceInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addBalance(Number(balanceInput)));
  };

  const formatBalance = (value) => {
    if (value === "" || value === null) return "";
    return (
      Number(value).toLocaleString("uk-UA", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) + " UAH"
    );
  };

  const handleFocus = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setIsEditing(false);
    }
  };

  return (
    <>
      <FormStyled $isAnalytics={isAnalytics} onSubmit={handleSubmit} action="">
        <label htmlFor="">Баланс:</label>
        {width < 768 ? (
          <div>
            <input
              onChange={handleChange}
              type="text"
              name="balanceInput"
              value={isEditing ? balanceInput : formatBalance(balanceInput)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
            />
            {isAnalytics && width < 1200 ? null : <button>Підтвердити</button>}
          </div>
        ) : (
          <>
            <input
              onChange={handleChange}
              type="text"
              name="balanceInput"
              value={isEditing ? balanceInput : formatBalance(balanceInput)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
            />
            {isAnalytics && width < 1200 ? null : <button>Підтвердити</button>}
          </>
        )}
      </FormStyled>
    </>
  );
};
