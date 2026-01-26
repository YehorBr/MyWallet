import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { Expenses } from "../components/Expenses/Expenses";
import { Incomes } from "../components/Incomes/Incomes";
import { HomePage } from "../pages/HomePage/HomePage";
import { Dashboard } from "../pages/DashBoard/Dashboard";
import { Analytics } from "../pages/Analytics/Analytics";
import { RestrictedRoute } from "../RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute";

export const routing = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <RestrictedRoute component={HomePage} redirectTo="/dashboard" />
          ),
        },
        {
          path: "dashboard",
          element: <PrivateRoute component={Dashboard} redirectTo="/" />,
          children: [
            {
              path: "expenses",
              element: <Expenses />,
            },
            {
              path: "incomes",
              element: <Incomes />,
            },
          ],
        },
        {
          path: "register",
          element: (
            <RestrictedRoute component={HomePage} redirectTo="/dashboard" />
          ),
        },
        {
          path: "analytics",
          element: <Analytics />,
        },
      ],
    },
  ],
  {
    basename: "/MyWallet",
  },
);
