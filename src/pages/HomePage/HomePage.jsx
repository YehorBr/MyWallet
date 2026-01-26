import { useLocation } from "react-router-dom"
import { LoginForm } from "../../components/LoginForm/LoginForm"
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";

export const HomePage = () =>{
    const {pathname} = useLocation()

    const isRegister = pathname.endsWith("/register");

    return <>
        <h1>InvestIQ</h1>
        <h3>Smart Finance</h3>
        
        {isRegister ? <RegistrationForm /> : <LoginForm />}
    </>
}