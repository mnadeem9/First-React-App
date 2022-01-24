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
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route path="home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
