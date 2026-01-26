import { Outlet } from "react-router-dom"

export const AnalyticsIncomes = () =>{
    return<>
        <AnalyticsCategories/>
        <Outlet/>
    </>
}