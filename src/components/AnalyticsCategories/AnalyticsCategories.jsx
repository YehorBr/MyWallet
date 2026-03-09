import { data, useLocation, useSearchParams } from "react-router-dom";
import {
  categoriesExpensesArr,
  categoriesIncomesArr,
  categoryIcons,
} from "../../categoriesArr";
import { useSelector } from "react-redux";
import { selectExpens, selectIncomes } from "../../redux/selectors";
import { useEffect } from "react";
import { CategoriesList } from "./AnalyticsCategories.styled";


export const AnalyticsCategories = ({type, month}) => {
  const expenses = useSelector(selectExpens) || [];
  const incomes = useSelector(selectIncomes) || [];
  
  const data = type === "incomes" ? incomes : expenses

  const arrCategor = data.reduce((acc, item)=>{
    const itemMonth = new Date(item.date).getMonth()
    const isCurrMonth = itemMonth === month
    if (!isCurrMonth) return acc;

    const key = item.category.value

    if(!acc[key]){
      acc[key] = {
        value: key,
        label: item.category.label,
        sum: 0,
      }
    }
    
    acc[key].sum += Number(item.sum)

    return acc
  }, {})
  
  const result = Object.values(arrCategor)

  

  return <>
  <CategoriesList>
     {result.map((item)=>{
      const Icon = categoryIcons[item.value]


      return <li key={item.value}>
        <p>{`${item.sum}.00`}</p>
        {Icon && <Icon color="#071F41" size={50} />}
        <p>{item.label}</p>
      </li>
    })
    } 
  </CategoriesList>
  </>;
};
