import { Outlet } from "react-router-dom";
import { BalanceForm } from "../BalanceForm/BalanceForm";
import { AnalyticsByMonths } from "../AnalyticsByMonths/AnalyticsByMonths";

export const Incomes = () => {
  return (
    <>
      <BalanceForm />
      <AnalyticsByMonths />
      <Outlet />
    </>
  );
};
