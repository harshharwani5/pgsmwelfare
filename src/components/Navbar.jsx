import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { pgsmConfig } from '../config/pgsmConfig';
import { Phone, Mail, MapPin, Menu, X, Heart, LayoutDashboard } from 'lucide-react';

export default function Navbar({ onOpenDonate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Programs', path: '/causes' },
    { name: 'Volunteer', path: '/volunteer' },
    { name: 'CSR Hub', path: '/csr' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, width: '100%' }}>
      
      {/* 1. TOP UTILITY STRIP (Vibrant Saffron Orange & Dark Charcoal Text) */}
      <div style={{ backgroundColor: 'var(--saffron-orange)', color: '#ffffff', fontSize: '13px', padding: '8px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(255, 255, 255, 0.2)', padding: '3px 10px', borderRadius: '4px', fontWeight: '600' }}>
              <MapPin size={12} color="#ffffff" /> Nowgong, Chhatarpur (M.P.)
            </span>
            <span style={{ backgroundColor: 'var(--dark-charcoal)', color: '#ffffff', padding: '3px 10px', borderRadius: '20px', fontWeight: '800' }}>
              🌟 9+ Years Community Impact
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <a href={`tel:${pgsmConfig.contact.phone}`} style={{ color: '#ffffff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '700' }}>
              <Phone size={13} /> {pgsmConfig.contact.phone}
            </a>
            <a href={`mailto:${pgsmConfig.contact.email}`} style={{ color: '#ffffff', textDecoration: 'none', display: 'none', alignItems: 'center', gap: '4px', fontWeight: '600' }} className="desktop-contact">
              <Mail size={13} /> {pgsmConfig.contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION STICKY HEADER */}
      <nav style={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'var(--bg-surface)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-color)',
        padding: scrolled ? '12px 0' : '16px 0',
        transition: 'var(--transition)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo & Brand */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'var(--saffron-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontWeight: '900', fontSize: '22px', boxShadow: '0 4px 12px rgba(243, 111, 33, 0.4)' }}>
              🧡
            </div>
            <div>
              <div style={{ fontWeight: '900', fontSize: '20px', color: 'var(--dark-charcoal)', lineHeight: '1.1' }}>
                {pgsmConfig.shortName}
              </div>
              <div style={{ fontSize: '10px', color: 'var(--saffron-orange)', fontWeight: '800', letterSpacing: '0.4px' }}>
                EDUCATIONAL & SOCIAL WELFARE SOCIETY
              </div>
            </div>
          </Link>

          {/* Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: isActive(link.path) ? '800' : '600',
                  color: isActive(link.path) ? 'var(--saffron-orange)' : 'var(--dark-charcoal)',
                  borderBottom: isActive(link.path) ? '3px solid var(--saffron-orange)' : '3px solid transparent',
                  paddingBottom: '4px',
                  transition: 'var(--transition)'
                }}
              >
                {link.name}
              </Link>
            ))}

            <Link to="/admin" style={{ textDecoration: 'none', fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--bg-muted)', padding: '6px 12px', borderRadius: 'var(--radius-full)' }}>
              <LayoutDashboard size={14} /> Admin
            </Link>

            {/* Saffron Orange Action Button */}
            <button onClick={onOpenDonate} className="btn btn-orange pulse-orange" style={{ padding: '12px 24px', fontSize: '15px' }}>
              <Heart size={18} fill="#ffffff" /> Support Our Mission
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: 'none', border: 'none', color: 'var(--dark-charcoal)', cursor: 'pointer', display: 'none' }} className="mobile-toggle">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{ padding: '20px', backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', fontSize: '16px', fontWeight: '700', color: isActive(link.path) ? 'var(--saffron-orange)' : 'var(--dark-charcoal)' }}>
                {link.name}
              </Link>
            ))}
            <button onClick={() => { setMobileMenuOpen(false); onOpenDonate(); }} className="btn btn-orange" style={{ width: '100%', marginTop: '10px' }}>
              <Heart size={18} fill="#ffffff" /> Support Our Mission
            </button>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (min-width: 901px) {
          .desktop-contact { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
