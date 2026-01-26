
import { RouterProvider } from "react-router-dom";
import { routing } from './routes/router';

export const App = () =>{
  return <>
  <RouterProvider router={routing}/>
  </>
}
