import { useDispatch, useSelector } from "react-redux";
import { selectExpens, selectIncomes } from "../../redux/selectors";
import { useLocation } from "react-router-dom";
import { AnalyticsByMonthContainer, AnalyticsByMonthList } from "./AnalyticsByMonths.styled";

export const AnalyticsByMonths = () => {
  const expenses = useSelector(selectExpens) || [];
  const incomes = useSelector(selectIncomes) || [];
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const isIncomes = pathname.endsWith("/incomes");
  const data = isIncomes ? incomes : expenses;

  const summary = data.reduce((acc, item) => {
    const month = new Date(item.date)
      .toLocaleString("uk-UA", { month: "long" })
      .toUpperCase();

    acc[month] = (acc[month] || 0) + Number(item.sum);
    return acc;
  }, {});

  return (
    <>
    <AnalyticsByMonthContainer >


      <AnalyticsByMonthList>
            <h4 style={{textAlign: "center", paddingTop: "10px", marginBottom: "10px", textTransform: "uppercase"}}>Зведення</h4>
        {Object.entries(summary).map(([month, sum]) => (
          <li key={month}>
            <p>{month}</p>
            <p>{sum.toLocaleString()}.00</p>
          </li>
        ))}
      </AnalyticsByMonthList>
    </AnalyticsByMonthContainer>
    </>
  );
};
