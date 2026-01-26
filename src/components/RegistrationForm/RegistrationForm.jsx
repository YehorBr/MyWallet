import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/AuthSlice";

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
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">Ім'я:</label>
        <input onChange={handleChange} type="text" name="login" />
        <label htmlFor="">Електронна пошта:</label>
        <input onChange={handleChange} type="email" name="email" />
        <label htmlFor="">Пароль:</label>
        <input onChange={handleChange} type="password" name="password" />
        <label htmlFor="">Підтвердіть пароль:</label>
        <input onChange={handleChange} type="password" name="confirmPass" />
        <button>Зареєструватися</button>
      </form>
    </>
  );
};
