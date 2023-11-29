import {Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

function Landing() {
  return (
    <div>
        <Navbar />
        <Outlet></Outlet>
        <Footer />
    </div>
  )
}

export default Landing