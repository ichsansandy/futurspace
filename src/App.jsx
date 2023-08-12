import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import SpacesPage from './pages/SpacesPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
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
