import { useSelector } from "react-redux"
import { selectIsLogged } from "./redux/selectors"
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({redirectTo, component:Component}) =>{
    const isLogged = useSelector(selectIsLogged)
    
    return<>
        {isLogged ? <Component/> : <Navigate to={redirectTo} />}
    </>
}