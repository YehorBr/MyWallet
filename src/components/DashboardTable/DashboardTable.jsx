import { useDispatch, useSelector } from "react-redux";
import { selectExpens, selectIncomes } from "../../redux/selectors";
import { useLocation } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import { deleteExpens, deleteIncome, minusBalance, plusBalance } from "../../redux/WalletSlice";
import { TableBodyStl, TableHeadStl, TableStl, TableWrapper } from "./DasboardTable.styled";

export const DashboardTable = () => {
  const expenses = useSelector(selectExpens) || [];
  const incomes = useSelector(selectIncomes) || [];
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const isIncomes = pathname.endsWith("/incomes");

  return (
    <>  
      <TableWrapper>
      <TableStl>
        <TableHeadStl>
          <tr>
            <th>Дата</th>
            <th>Опис</th>
            <th>Категорія</th>
            <th>Сума</th>
            <th></th>
          </tr>
        </TableHeadStl>
        <TableBodyStl $isIncomes={isIncomes}>
          {(isIncomes ? incomes : expenses).map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.description}</td>
                <td>{item.category?.label ?? "Без категорії"}</td>
                <td>{isIncomes ? `${item.sum}.00 грн.` : `- ${item.sum}.00 грн.`}</td>
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
                    <IoTrashOutline color="#52555F" size={20}/>
                  </button>
                </td>
              </tr>
            );
          })}
        </TableBodyStl>
      </TableStl>
      </TableWrapper>
    </>
  );
};
