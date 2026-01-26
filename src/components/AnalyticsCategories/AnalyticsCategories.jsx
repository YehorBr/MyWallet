import { useLocation, useSearchParams } from "react-router-dom";
import {
  categoriesExpensesArr,
  categoriesIncomesArr,
} from "../../categoriesArr";
import { useSelector } from "react-redux";
import { selectExpens, selectIncomes } from "../../redux/selectors";

export const AnalyticsCategories = () => {
  const expenses = useSelector(selectExpens) || [];
  const incomes = useSelector(selectIncomes) || [];

  const expensCategor = expenses.reduce((acc, item)=>{
    const key = item.category.label
    const icon = item.category.icon

    const newObj = {
      [icon] : icon
    }

    acc.push(newObj)

    return acc
  }, [])
  console.log(expensCategor); 

  return <>
  <ul>
    {/* {expensCategor.map((item)=>{
      return <li key={key}>
        <p>{sum}</p>
        <p>{key}</p>
      </li>
    })
    } */}
  </ul>
  </>;
};
