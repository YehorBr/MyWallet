import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { logIn } from "../../redux/AuthSlice"
import { LogForm, RegLink } from "./LoginForm.styled"

export const LoginForm = () =>{
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const handleChange = (e) =>{
        switch(e.target.name){
            case "login":
                setLogin(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            default: 
                break;
        }
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const form = e.target;

        const user = {
            login: form.elements.login.value,
            password: form.elements.password.value
        }

        dispatch(logIn(user))

        form.reset();
    }

    return<>
         <LogForm onSubmit={handleSubmit} action="">
            <label htmlFor="">Логін:</label>
            <input onChange={handleChange} type="text" name="login" placeholder="Username" style={{marginBottom:"30px",}}/>
            <label htmlFor="">Пароль:</label>
            <input onChange={handleChange} type="password" name="password" placeholder="Пароль"/>
            <div>
                <button>Увійти</button>
                <RegLink to={`/register`}>Реєстрація</RegLink>
            </div>
         </LogForm>
    </>
}