
import { RouterProvider } from "react-router-dom";
import { routing } from './routes/router';
import { GlobalStyle } from "./GlobalStyle";

export const App = () =>{
  return <>
  <RouterProvider router={routing}/>
  <GlobalStyle/>
  </>
}
