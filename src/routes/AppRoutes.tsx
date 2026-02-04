
import { Routes, Route } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/home/Home";
import Booking from "../pages/booking/Booking";
import Service from "../pages/service/Service";
import ParisCityTour from "../pages/paris-city-tour/paris-city-tour";
import ContactPage from "../pages/contact/ContactPage";
import AboutPage from "../pages/about/AboutPage";
export default function AppRoutes() {
  return (
    <Routes>
      <Route  element={<MainLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/pariscity/tour" element={<ParisCityTour />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Route>
    </Routes>
  );
}
