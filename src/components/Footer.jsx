import React from 'react';
import { Link } from 'react-router-dom';
import { pgsmConfig } from '../config/pgsmConfig';
import { Phone, Mail, MapPin, ShieldCheck, Heart, MessageCircle } from 'lucide-react';

export default function Footer({ onOpenDonate }) {
  return (
    <>
      <footer style={{ backgroundColor: 'var(--dark-charcoal)', color: '#ffffff', paddingTop: '70px', paddingBottom: '30px', borderTop: '4px solid var(--saffron-orange)' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '40px', marginBottom: '50px' }}>
            
            {/* Column 1: Organization Identity & Trust */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--saffron-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: '#ffffff' }}>
                  🧡
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#ffffff', lineHeight: '1.2' }}>
                    {pgsmConfig.shortName}
                  </h3>
                  <p style={{ fontSize: '10px', color: 'var(--saffron-orange)', fontWeight: '800' }}>
                    EDUCATIONAL & SOCIAL WELFARE SOCIETY
                  </p>
                </div>
              </div>

              <p style={{ fontSize: '14px', color: '#9ca3af', lineHeight: '1.6', marginBottom: '20px' }}>
                Dedicated to rural education, healthcare camps, women empowerment, and youth mobilization across Nowgong and Chhatarpur district since 2016.
              </p>

              <div style={{ fontSize: '12px', color: '#d1d5db', display: 'flex', flexDirection: 'column', gap: '4px', backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                <span><strong>Reg. No:</strong> {pgsmConfig.registrationNumber}</span>
                <span><strong>PAN:</strong> {pgsmConfig.panNumber}</span>
                <span><strong>Tax Status:</strong> 80G Tax Exemption Available</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--saffron-orange)', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                Explore Links
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
                <li><Link to="/" style={{ color: '#d1d5db', textDecoration: 'none' }}>Home</Link></li>
                <li><Link to="/about" style={{ color: '#d1d5db', textDecoration: 'none' }}>About Us & History</Link></li>
                <li><Link to="/causes" style={{ color: '#d1d5db', textDecoration: 'none' }}>Our 5 Program Pillars</Link></li>
                <li><Link to="/volunteer" style={{ color: '#d1d5db', textDecoration: 'none' }}>Volunteer / Fellowship</Link></li>
                <li><Link to="/csr" style={{ color: '#d1d5db', textDecoration: 'none' }}>CSR Corporate Partnerships</Link></li>
                <li><Link to="/gallery" style={{ color: '#d1d5db', textDecoration: 'none' }}>Field Action Gallery</Link></li>
                <li><Link to="/contact" style={{ color: '#d1d5db', textDecoration: 'none' }}>Contact Nowgong Office</Link></li>
              </ul>
            </div>

            {/* Column 3: Leadership Board */}
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--saffron-orange)', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                Leadership Board
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#d1d5db' }}>
                <li><strong>Dr. Ravi Kant Mishra</strong> — President</li>
                <li><strong>Smt. Vidhya Devi Mishra</strong> — Vice President</li>
                <li><strong>Shri Bhartendu Mishra</strong> — Secretary</li>
                <li><strong>Pradeep Kumar Mishra</strong> — Treasurer</li>
              </ul>

              <div style={{ marginTop: '20px' }}>
                <button onClick={onOpenDonate} className="btn btn-orange pulse-orange" style={{ width: '100%', padding: '12px', fontSize: '14px' }}>
                  <Heart size={16} fill="#ffffff" /> Support Our Mission
                </button>
              </div>
            </div>

            {/* Column 4: Contact & Nowgong HQ */}
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--saffron-orange)', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                Nowgong HQ Office
              </h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13px', color: '#d1d5db' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <MapPin size={18} color="var(--saffron-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{pgsmConfig.contact.address}</span>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Phone size={18} color="var(--saffron-orange)" style={{ flexShrink: 0 }} />
                  <a href={`tel:${pgsmConfig.contact.phone}`} style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '700' }}>
                    {pgsmConfig.contact.phone}
                  </a>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Mail size={18} color="var(--saffron-orange)" style={{ flexShrink: 0 }} />
                  <a href={`mailto:${pgsmConfig.contact.email}`} style={{ color: '#ffffff', textDecoration: 'none' }}>
                    {pgsmConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Disclaimer */}
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '12px', color: '#9ca3af' }}>
            <div>
              © {new Date().getFullYear()} {pgsmConfig.fullName}. All Rights Reserved.
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <Link to="/about" style={{ color: '#9ca3af', textDecoration: 'none' }}>Transparency</Link>
              <Link to="/csr" style={{ color: '#9ca3af', textDecoration: 'none' }}>CSR Policy</Link>
              <Link to="/contact" style={{ color: '#9ca3af', textDecoration: 'none' }}>Privacy Policy</Link>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating WhatsApp Quick Action Button (User Specified #25D366) */}
      <a
        href={`https://wa.me/919406762912?text=Hello%20PGSM%20Welfare%2C%20I%20would%20like%20to%20know%20more%20about%20your%20community%20programs%20and%20donation%20options.`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        title="Chat on WhatsApp with PGSM Welfare"
        aria-label="Chat with PGSM Welfare on WhatsApp"
      >
        <MessageCircle size={30} fill="#ffffff" color="transparent" />
      </a>
    </>
  );
}
