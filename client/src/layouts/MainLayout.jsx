import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import Newsletter from "../Components/Newsletter.jsx";


const MainLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <Outlet />
      <Newsletter/>
      <Footer/>
     
    </>
  );
};

export default MainLayout;
