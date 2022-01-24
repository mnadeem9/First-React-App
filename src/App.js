import "./App.css";
import HomePage from "./Pages/HomePage";
import { Routes, Route, Outlet } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ServicePage from "./Pages/ServicePage";
import ContactUs from "./Pages/ContactUs";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route
        className="flex-grow-1 d-flex flex-column"
        path="/"
        element={<LoginPage />}
      />
      <Route
        path="/"
        element={
          <section className="flex-grow-1 d-flex flex-column">
            <NavBar />
            <Outlet className="d-flex flex-column flex-grow-1" />
            <Footer />
          </section>
        }
      >
        <Route path="home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

export default App;
