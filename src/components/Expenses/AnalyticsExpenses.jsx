import { Outlet } from "react-router-dom";

export const AnalyticsExpenses = () => {
  return (
    <>
      <AnalyticsCategories />
      <Outlet />
    </>
  );
};
