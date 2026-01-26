import { Outlet } from "react-router-dom"
import { BalanceForm } from "../BalanceForm/BalanceForm"
import { AnalyticsByMonths } from "../AnalyticsByMonths/AnalyticsByMonths"
import { AnalyticsCategories } from "../AnalyticsCategories/AnalyticsCategories"

export const Expenses = () =>{
    return<>
        <BalanceForm/>
        <AnalyticsByMonths/>

        <h2>asfsaf</h2>
        <AnalyticsCategories/>

        <Outlet/>
    </>
}