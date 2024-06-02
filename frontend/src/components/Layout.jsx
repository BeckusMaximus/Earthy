import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import "./Layout.css";
const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
