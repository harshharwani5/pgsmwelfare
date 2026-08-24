import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProgramPillars from '../components/ProgramPillars';
import PresidentMessage from '../components/PresidentMessage';
import ImpactCalculator from '../components/ImpactCalculator';
import LeadershipSpotlight from '../components/LeadershipSpotlight';
import { pgsmConfig } from '../config/pgsmConfig';
import { Image, ArrowRight, Heart, FileText } from 'lucide-react';

export default function Home({ onOpenDonate }) {
  const previewGallery = [
    { title: 'Rural Health Camp', img: '/images/health_camp.jpg', category: 'Healthcare' },
    { title: 'Digital Literacy Lab', img: '/images/digital_classroom.jpg', category: 'Education' },
    { title: 'Women Tailoring Workshop', img: '/images/women_tailoring.jpg', category: 'Women Skills' },
    { title: 'Campus Tree Plantation', img: '/images/tree_plantation.jpg', category: 'Environment' }
  ];

  return (
    <div>
      {/* 1. Ultra-Minimal Hero Banner & Campaign Focus Selector */}
      <Hero onOpenDonate={onOpenDonate} />

      {/* 2. Core Program Pillars (5 Pillars with Real Photography) */}
      <ProgramPillars onOpenDonate={onOpenDonate} />

      {/* 3. President's Official Statement (Dr. Ravi Kant Mishra - Copywriting Kit) */}
      <PresidentMessage onOpenDonate={onOpenDonate} />

      {/* 4. Tangible Unit-Economics Impact Calculator */}
      <ImpactCalculator onOpenDonate={onOpenDonate} />

      {/* 5. Field Action Photo Gallery Preview */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
            <div>
              <div className="pill-badge pill-orange" style={{ marginBottom: '10px' }}>
                <Image size={14} /> Ground Proof & Action
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: '900', color: 'var(--dark-charcoal)' }}>
                Field Action in Chhatarpur
              </h2>
            </div>

            <Link to="/gallery" className="btn btn-outline-orange" style={{ padding: '10px 20px', fontSize: '14px' }}>
              View All 12+ Field Photos <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {previewGallery.map((item, idx) => (
              <div
                key={idx}
                style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  position: 'relative',
                  height: '240px',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(31, 31, 31, 0.85) 0%, transparent 60%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '16px',
                  color: '#ffffff'
                }}>
                  <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--saffron-orange)', textTransform: 'uppercase' }}>
                    {item.category}
                  </span>
                  <strong style={{ fontSize: '15px', fontWeight: '800' }}>
                    {item.title}
                  </strong>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Leadership Spotlight (Board Members & Governance) */}
      <LeadershipSpotlight />

      {/* 7. CSR & Corporate Partnership Full-Bleed Banner */}
      <section style={{ padding: '70px 0', backgroundColor: 'var(--dark-charcoal)', color: '#ffffff' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <div className="pill-badge pill-orange" style={{ marginBottom: '16px' }}>
            Corporate CSR Alignment
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: '900', color: '#ffffff', marginBottom: '16px' }}>
            Partner with PGSM Welfare for High-Impact CSR in MP
          </h2>
          <p style={{ fontSize: '16px', color: '#d1d5db', lineHeight: '1.6', marginBottom: '32px' }}>
            Aligned with Schedule VII, Companies Act Section 135. We deliver transparent, audit-ready CSR programs in rural healthcare, digital classrooms, and women vocational skilling.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/csr" className="btn btn-orange pulse-orange" style={{ padding: '16px 32px', fontSize: '16px' }}>
              <FileText size={18} /> View CSR Partnership Framework
            </Link>
            <button onClick={onOpenDonate} className="btn" style={{ backgroundColor: 'transparent', border: '2px solid #ffffff', color: '#ffffff', padding: '16px 28px', fontSize: '15px' }}>
              <Heart size={18} /> Direct Grant Contribution
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
