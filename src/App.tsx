// Doctor appointment booking project.

// Hooks.
import { Routes, Route } from "react-router-dom";

// Pages.
import HomePage from "./pages/HomePage";
import DoctorsPage from "./pages/DoctorsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import MyProfilePage from "./pages/MyProfilePage";
import MyAppointmentsPage from "./pages/MyAppointmentsPage";
import AppointmentPage from "./pages/AppointmentPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

// Error page.
import ErrorPage from "./pages/ErrorPage";

// Components.
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/doctors/:speciality" element={<DoctorsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my-profile" element={<MyProfilePage />} />
        <Route path="/my-appointments" element={<MyAppointmentsPage />} />
        <Route path="/appointment/:docId" element={<AppointmentPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

