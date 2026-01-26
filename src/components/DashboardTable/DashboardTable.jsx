import { useDispatch, useSelector } from "react-redux";
import { selectExpens, selectIncomes } from "../../redux/selectors";
import { useLocation } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { deleteExpens, deleteIncome, minusBalance, plusBalance } from "../../redux/WalletSlice";

export const DashboardTable = () => {
  const expenses = useSelector(selectExpens) || [];
  const incomes = useSelector(selectIncomes) || [];
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const isIncomes = pathname.endsWith("/incomes");

  return (
    <>  
      <table>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Опис</th>
            <th>Категорія</th>
            <th>Сума</th>
          </tr>
        </thead>
        <tbody>
          {(isIncomes ? incomes : expenses).map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.description}</td>
                <td>{item.category?.label ?? "Без категорії"}</td>
                <td>{isIncomes ? `${item.sum} грн.` : `-${item.sum} грн.`}</td>
                <td>
                  <button
                    onClick={() => {
                      if (isIncomes) {
                        dispatch(deleteIncome(item.id));
                        dispatch(minusBalance(Number(item.sum)));
                      } else {
                        dispatch(deleteExpens(item.id));
                        dispatch(plusBalance(Number(item.sum)));
                      }
                    }}
                  >
                    <MdDeleteOutline />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
