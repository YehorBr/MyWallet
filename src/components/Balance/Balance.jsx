import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBalance } from "../../redux/selectors";
import { addBalance } from "../../redux/WalletSlice";

export const Balance = () => {
  const balance = useSelector(selectBalance);

 const [balanceInput, setBalanceInput] = useState(balance ?? "")  

  useEffect(() => {
setBalanceInput(balance ?? "");
  }, [balance]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setBalanceInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addBalance(Number(balanceInput)));
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">Баланс:</label>
        <input
          onChange={handleChange}
          type="text"
          name="balanceInput"
          value={balanceInput}
        />
        <button>Підтвердити</button>
      </form>
    </>
  );
};
