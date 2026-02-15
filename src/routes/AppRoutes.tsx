
import { Routes, Route } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/home/Home";
import Booking from "../pages/booking/Booking";
import Service from "../pages/service/Service";
import ParisCityTour from "../pages/paris-city-tour/paris-city-tour";
import ContactPage from "../pages/contact/ContactPage";
import AboutPage from "../pages/about/AboutPage";
import DisneyLandTour from "../pages/disney-land-tour/disney-land-tour";
import LongDistanceTour from "../pages/long-distance/long-distance";
import ParisAirportTour from "../pages/airport-transfer-tour/airport-transfer-tour";
export default function AppRoutes() {
  return (
    <Routes>
      <Route  element={<MainLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/pariscity/tour" element={<ParisCityTour />}></Route>
        <Route path="/disney/tour" element={<DisneyLandTour />}></Route>
        <Route path="/airport/transfer" element={<ParisAirportTour />}></Route>
        <Route path="/long/distance/tour" element={<LongDistanceTour />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Route>
    </Routes>
  );
}
