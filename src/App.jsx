import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import PricingPage from './pages/Pricing/PricingPage';
import ContactPage from './pages/Contact/ContactPage';
import SpacesPage from './pages/Spaces/SpacesPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="pt-[65px] pb-[100px] px-[7%] web:pt-[100px] web:pb-[140px] web:px-[8%]">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/about"
          element={<AboutPage />}
        />
        <Route
          path="/pricing"
          element={<PricingPage />}
        />
        <Route
          path="/contact"
          element={<ContactPage />}
        />
        <Route
          path="/spaces"
          element={<SpacesPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
