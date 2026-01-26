import { Outlet } from "react-router-dom"
import { BalanceForm } from "../../components/BalanceForm/BalanceForm"
import { Link } from "react-router-dom"
import { Balance } from "../../components/Balance/Balance"
import { DashboardTable } from "../../components/DashboardTable/DashboardTable"

export const Dashboard = () =>{
    return<>
       <Balance/>
       <DashboardTable/>
        <Link to={`incomes`}>Incomes</Link>
        <Link to={`expenses`}>Expenses</Link>
        <Outlet/>
    </>
}