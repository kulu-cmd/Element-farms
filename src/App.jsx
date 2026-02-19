import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FarmerEducation from './pages/FarmerEducation';
import Contact from './pages/Contact';
import LandRejuvenation from './pages/solutions/LandRejuvenation';
import AntiFlooding from './pages/solutions/AntiFlooding';
import NurserySupport from './pages/solutions/NurserySupport';
import PestSunburn from './pages/solutions/PestSunburn';
import Poultry from './pages/solutions/Poultry';
import DairyCattle from './pages/solutions/DairyCattle';
import WasteManagement from './pages/solutions/WasteManagement';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<FarmerEducation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/solutions/land-rejuvenation" element={<LandRejuvenation />} />
          <Route path="/solutions/anti-flooding" element={<AntiFlooding />} />
          <Route path="/solutions/nursery-support" element={<NurserySupport />} />
          <Route path="/solutions/pest-sunburn" element={<PestSunburn />} />
          <Route path="/solutions/poultry" element={<Poultry />} />
          <Route path="/solutions/dairy-cattle" element={<DairyCattle />} />
          <Route path="/solutions/waste-management" element={<WasteManagement />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
