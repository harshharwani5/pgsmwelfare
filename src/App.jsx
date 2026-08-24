import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DonationModal from './components/DonationModal';

import Home from './pages/Home';
import About from './pages/About';
import CausesPage from './pages/CausesPage';
import VolunteerPage from './pages/VolunteerPage';
import CSRPage from './pages/CSRPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  const [donateOpen, setDonateOpen] = useState(false);

  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        {/* Navigation Sticky Header */}
        <Navbar onOpenDonate={() => setDonateOpen(true)} />

        {/* Page Content Viewport */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home onOpenDonate={() => setDonateOpen(true)} />} />
            <Route path="/about" element={<About onOpenDonate={() => setDonateOpen(true)} />} />
            <Route path="/causes" element={<CausesPage onOpenDonate={() => setDonateOpen(true)} />} />
            <Route path="/programs" element={<CausesPage onOpenDonate={() => setDonateOpen(true)} />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/csr" element={<CSRPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenDonate={() => setDonateOpen(true)} />

        {/* Donation Gateway Modal */}
        <DonationModal isOpen={donateOpen} onClose={() => setDonateOpen(false)} />

      </div>
    </Router>
  );
}
