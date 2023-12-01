import {Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

function Landing({ user, onLogout}) {
  return (
    <div>
        <Navbar user={user} onLogout={onLogout} />
        <Outlet></Outlet>
        <Footer />
    </div>
  )
}

export default Landing