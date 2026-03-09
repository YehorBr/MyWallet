import { useLocation } from "react-router-dom"
import { LoginForm } from "../../components/LoginForm/LoginForm"
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";
import { Container } from "../../components/Container/Container";
import { AuthFormContainer } from "./HomePage.styled";

export const HomePage = () =>{
    const {pathname} = useLocation()

    const isRegister = pathname.endsWith("/register");

    return <>
    <Container>
        <AuthFormContainer>
        <div>
        <h1>InvestIQ</h1>
        <h3>Smart Finance</h3>
        </div>
        
        {isRegister ? <RegistrationForm /> : <LoginForm />}
        </AuthFormContainer>
    </Container>
    </>
}