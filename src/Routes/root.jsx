import Navigation  from "../Components/navbar";
import Home from "./Pages/Home";
import { Outlet } from 'react-router-dom'

export default function Root() {
    return (
      <>
      <div id="detail">
      <Navigation/>
     {/* <Home/> */}
        <Outlet />
      </div>
   
      </>
    );
  }