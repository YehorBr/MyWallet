import { useSelector } from "react-redux";
import { selectExpens, selectIncomes } from "../../redux/selectors";
import { useEffect } from "react";
import { ContainerInMonth, InMonthSum } from "./ExpensesNIncomesInMonths.styled";


export const ExpensesNIncomesInMonths = ({month}) =>{
  const expenses = useSelector(selectExpens) || [];
  const incomes = useSelector(selectIncomes) || [];


    const totalExpenses = expenses.reduce((acc, item)=>{
      const itemMonth = new Date(item.date).getMonth()
      const isCurrMonth = itemMonth === month

      if (!isCurrMonth) return acc;

      acc += Number(item.sum)
      
      return acc
    }, 0)

    const totalIncomes = incomes.reduce((acc, item)=>{
      const itemMonth = new Date(item.date).getMonth()
      const isCurrMonth = itemMonth === month

      if (!isCurrMonth) return acc;

      acc += Number(item.sum)
      
      return acc
    }, 0)

    return<>
      <ContainerInMonth>
        <span>Витрати:<InMonthSum $isExpens={true}>{`- ${totalExpenses}.00 грн.`}</InMonthSum></span>
        <span></span>
        <span>Доходи: <InMonthSum>{`+ ${totalIncomes}.00 грн.`}</InMonthSum></span>
      </ContainerInMonth>
    </>
}
