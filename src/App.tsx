import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import generated page components
import InicioPage from './pages/InicioPage';
import HotelesPage from './pages/HotelesPage';
import HotelDetailPage from './pages/HotelDetailPage';
import GuiasAventuraPage from './pages/GuiasAventuraPage';
import VuelosTransportePage from './pages/VuelosTransportePage';
import CatalogoToursPage from './pages/CatalogoToursPage';
import TourDetailPage from './pages/TourDetailPage';

// Import Layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import ScrollToTop from './components/ScrollToTop';
import ScrollObserver from './components/ScrollObserver';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollObserver />
      <div className="min-h-screen bg-[#F5F4EC] font-sans flex flex-col">
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<InicioPage />} />
            <Route path="/hoteles" element={<HotelesPage />} />
            <Route path="/hoteles/:id" element={<HotelDetailPage />} />
            <Route path="/guias" element={<GuiasAventuraPage />} />
            <Route path="/vuelos" element={<VuelosTransportePage />} />
            <Route path="/catalogotours" element={<CatalogoToursPage />} />
            <Route path="/tours/:id" element={<TourDetailPage />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppFloatingButton />
      </div>
    </Router>
  );
}

export default App;
