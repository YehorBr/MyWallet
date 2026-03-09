import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/AuthSlice";
import { RegForm } from "./RegistrationForm.styled";

export const RegistrationForm = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    switch (e.target.name) {
      case "login":
        setLogin(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "confirmPass":
        setConfirmPass(e.target.value);
        break;
      default:
        break;
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      alert("Паролі не співпадають");
      return;
    }

    const form = e.target;

    const newUser = {
      login: form.elements.login.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(register(newUser))

    form.reset();
  };

  return (
    <>
      <RegForm onSubmit={handleSubmit} action="">
        <label htmlFor="">Ім'я:</label>
        <input onChange={handleChange} type="text" name="login" placeholder="Ім'я"/>
        <label htmlFor="">Електронна пошта:</label>
        <input onChange={handleChange} type="email" name="email" placeholder="your@email.com"/>
        <label htmlFor="">Пароль:</label>
        <input onChange={handleChange} type="password" name="password" placeholder="Пароль"/>
        <label htmlFor="">Підтвердіть пароль:</label>
        <input onChange={handleChange} type="password" name="confirmPass" placeholder="Підтвердіть пароль" style={{marginBottom: "40px"}}/>
        <button>Зареєструватися</button>
      </RegForm>
    </>
  );
};
