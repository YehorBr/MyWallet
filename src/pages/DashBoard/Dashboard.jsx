import { Outlet, useLocation } from "react-router-dom";
import { BalanceForm } from "../../components/BalanceForm/BalanceForm";
import { Link } from "react-router-dom";
import { Balance } from "../../components/Balance/Balance";
import { DashboardTable } from "../../components/DashboardTable/DashboardTable";
import { IoMdStats } from "react-icons/io";
import { Container } from "../../components/Container/Container";
import {
  AnalyticsLinkStl,
  BalanceContainer,
  BalanceLeft,
  ExpensesOrIncomesLink,
  LinksContainer,
  OutletContainer,
  TableStyled,
} from "./Dashboard.styled";
import { AnalyticsByMonths } from "../../components/AnalyticsByMonths/AnalyticsByMonths";
import { useWindowSize } from "react-use";

export const Dashboard = () => {
  const { pathname } = useLocation();
  const isIncomes = pathname.endsWith("/incomes");
  const { width } = useWindowSize();

  return (
    <>
      <Container>
        {width < 768 ? (
          <BalanceContainer>
           <AnalyticsLinkStl to={`/analytics`} $analyticsLink={true}>
              <span>
                <p className="analyticsLinkText">Перейти до розрахунків</p>
                <IoMdStats className="analyticsIcon" size={20} />
              </span>
            </AnalyticsLinkStl>
          <Balance />
          </BalanceContainer>
        ) : (
          <BalanceContainer>
            <BalanceLeft>
              <Balance />
            </BalanceLeft>
            <AnalyticsLinkStl to={`/analytics`} $analyticsLink={true}>
              <span>
                <p className="analyticsLinkText">Перейти до розрахунків</p>
                <IoMdStats className="analyticsIcon" size={20} />
              </span>
            </AnalyticsLinkStl>
          </BalanceContainer>
        )}
        <LinksContainer>
          <ExpensesOrIncomesLink
            $isIncomes={isIncomes}
            $incomesLink={false}
            to={`expenses`}
          >
            Витрати
          </ExpensesOrIncomesLink>
          <ExpensesOrIncomesLink
            $isIncomes={isIncomes}
            $incomesLink={true}
            to={`incomes`}
          >
            Дохід
          </ExpensesOrIncomesLink>
        </LinksContainer>
        <OutletContainer>
          <Outlet />

          <TableStyled>
            <DashboardTable />
            {width > 1200 && <AnalyticsByMonths />}
          </TableStyled>
        </OutletContainer>
        {width < 1200 && width > 768 && <AnalyticsByMonths />}
      </Container>
    </>
  );
};
