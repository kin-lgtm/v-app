import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import ServiceCenters from './pages/ServiceCenters';
import Owners from './pages/Owners';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import DownloadApp from './pages/DownloadApp';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/service-centers" element={<ServiceCenters />} />
          <Route path="/owners" element={<Owners />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/download" element={<DownloadApp />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
