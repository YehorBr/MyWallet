import { Outlet, useSearchParams } from "react-router-dom";
import { AnalyticsCategories } from "../../components/AnalyticsCategories/AnalyticsCategories";
import { Balance } from "../../components/Balance/Balance";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MonthsArr } from "../../categoriesArr";
import { ExpensesNIncomesInMonths } from "../../components/ExpensesNIncomesInMonths/ExpensesNIncomesInMonths";
import { MonthsChart } from "../../components/MonthsChart/MonthsChart";
import {
  AnalyticsLinkStl,
  BalanceContainer,
} from "../DashBoard/Dashboard.styled";
import { Container } from "../../components/Container/Container";
import { IoArrowBack } from "react-icons/io5";
import {
  CategoriesContainer,
  CurrPeriod,
  CurrPeriodSlider,
} from "./Analytics.styled";
import { useWindowSize } from "react-use";

export const Analytics = () => {
  // const [searchParams, setSearchparams] = useSearchParams();
  const [type, setType] = useState("expenses");
  const { width } = useWindowSize();
  const [month, setMonth] = useState(() => {
    const date = new Date();

    return date.getMonth();
  });
  const [year, setYear] = useState(() => {
    const date = new Date();

    return date.getFullYear();
  });

  // useEffect(() => {

  //   setType("expenses");
  //   setMonth(date.getMonth())
  // }, []);

  const handleMinus = () => {
    const currMonth = Number(month) - 1;

    setMonth(currMonth);
  };

  const handlePlus = () => {
    const currMonth = Number(month) + 1;

    setMonth(currMonth);
  };

  return (
    <>
      <Container>
        {width < 768 ? (
          <BalanceContainer $analyticsCont={true}>
            <AnalyticsLinkStl to={`/dashboard`} $analyticsLink={false}>
              <IoArrowBack
                className="analyticsIcon"
                size={24}
                color="#ff751d"
              />
            </AnalyticsLinkStl>
            <CurrPeriod>
              <p>Поточний період</p>
              <CurrPeriodSlider>
                <button onClick={handleMinus} disabled={month <= 0}>
                  <MdKeyboardArrowLeft
                    color={month <= 0 ? "#52555F" : "#FF751D"}
                    size={25}
                  />
                </button>
                <span>
                  {MonthsArr[month]?.label
                    ? `${MonthsArr[month].label} ${year}`
                    : `Недійсний місяць`}
                </span>
                <button onClick={handlePlus} disabled={month >= 11}>
                  <MdKeyboardArrowRight
                    color={month >= 11 ? "#52555F" : "#FF751D"}
                    size={25}
                  />
                </button>
              </CurrPeriodSlider>
            </CurrPeriod>
            <Balance />
          </BalanceContainer>
        ) : (
          <BalanceContainer $analyticsCont={true}>
            <AnalyticsLinkStl to={`/dashboard`} $analyticsLink={false}>
              <span>
                <IoArrowBack
                  style={{ marginRight: "15px" }}
                  className="analyticsIcon"
                  size={20}
                  color="#ff751d"
                />
                <p className="analyticsLinkText">Повернутись на головну</p>
              </span>
            </AnalyticsLinkStl>

            <Balance />
            <CurrPeriod>
              <p>Поточний період</p>
              <CurrPeriodSlider>
                <button onClick={handleMinus} disabled={month <= 0}>
                  <MdKeyboardArrowLeft
                    color={month <= 0 ? "#52555F" : "#FF751D"}
                    size={25}
                  />
                </button>
                <span>
                  {MonthsArr[month]?.label
                    ? `${MonthsArr[month].label} ${year}`
                    : `Недійсний місяць`}
                </span>
                <button onClick={handlePlus} disabled={month >= 11}>
                  <MdKeyboardArrowRight
                    color={month >= 11 ? "#52555F" : "#FF751D"}
                    size={25}
                  />
                </button>
              </CurrPeriodSlider>
            </CurrPeriod>
          </BalanceContainer>
        )}
        <ExpensesNIncomesInMonths month={month} />

        <CategoriesContainer>
          <div>
            <button
              onClick={() => {
                type === "expenses" ? setType("incomes") : setType("expenses");
              }}
            >
              <MdKeyboardArrowLeft color="#FF751D" size={25} />
            </button>
            <span>{type === "expenses" ? "Витрати" : "Доходи"}</span>
            <button
              onClick={() => {
                type === "expenses" ? setType("incomes") : setType("expenses");
              }}
            >
              <MdKeyboardArrowRight color="#FF751D" size={25} />
            </button>
          </div>

          <AnalyticsCategories type={type} month={month} />
        </CategoriesContainer>

        <MonthsChart type={type} month={month} />
      </Container>
    </>
  );
};
