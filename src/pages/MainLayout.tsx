import Navbar from "./navBar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";

const MainLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};


export default MainLayout; 