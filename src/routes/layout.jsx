import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Container } from "../components/Container/Container";
import {
  HeaderContainer,
  NavLinkSpanStl,
  UserMenuContainer,
} from "../components/Header/Header.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLogged, selectLogin } from "../redux/selectors";
import { logOut } from "../redux/AuthSlice";
import { TbLogout } from "react-icons/tb";
import { useWindowSize } from "react-use";

export const Layout = () => {
  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch()
  const login = useSelector(selectLogin)
  const { width } = useWindowSize();

  return (
    <>
      <header style={{ backgroundColor: "#fff" }}>
        <Container>
          <HeaderContainer>
            <NavLink to={`/`}>
              <NavLinkSpanStl>
                <span></span> <span></span> <p>InvestIQ</p>
              </NavLinkSpanStl>
            </NavLink>

            {isLogged ? (
              <UserMenuContainer>
                <p>{login.slice(0, 1)}</p>
               { width < 768 ? <></> :  <p>{login}</p>}
                { width < 768 ? <></> : <span></span>}
                {width < 768 ? <button onClick={()=>{dispatch(logOut())}}><TbLogout size={22} color="#CBCCD0"/></button> : <button onClick={()=>{dispatch(logOut())}}>Вийти</button>}
              </UserMenuContainer>
            ) : (
              <></>
            )}
          </HeaderContainer>
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
