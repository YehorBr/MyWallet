import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { logIn } from "../../redux/AuthSlice"

export const LoginForm = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const handleChange = (e) =>{
        switch(e.target.name){
            case "email":
                setEmail(e.target.value);
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
            email: form.elements.email.value,
            password: form.elements.password.value
        }

        dispatch(logIn(user))

        form.reset();
    }

    return<>
         <form onSubmit={handleSubmit} action="">
            <label htmlFor="">Електронна пошта:</label>
            <input onChange={handleChange} type="email" name="email" />
            <label htmlFor="">Пароль:</label>
            <input onChange={handleChange} type="password" name="password"/>
            <div>
                <button>Увійти</button>
                <Link to={`/register`}>Реєстрація</Link>
            </div>
         </form>
    </>
}