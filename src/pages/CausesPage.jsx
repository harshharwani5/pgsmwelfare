import React from 'react';
import { pgsmConfig } from '../config/pgsmConfig';
import { Heart, CheckCircle2, Award, ArrowRight } from 'lucide-react';

export default function CausesPage({ onOpenDonate }) {
  return (
    <div style={{ padding: '60px 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
          <span className="pill-badge pill-orange" style={{ marginBottom: '14px' }}>
            🌟 5 Core Operational Verticals
          </span>
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: '900', color: 'var(--dark-charcoal)', marginBottom: '16px' }}>
            Our Grassroots Programs
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            Targeted interventions addressing the most critical needs of rural communities across Nowgong and Chhatarpur district (M.P.).
          </p>
        </div>

        {/* 5 Program Deep Dives */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginBottom: '60px' }}>
          {pgsmConfig.programs.map((program, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={program.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  alignItems: 'center'
                }}
              >
                {/* Image (Order swapped on alternate cards) */}
                <div style={{
                  order: isEven ? 1 : 2,
                  height: '320px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img
                    src={program.image}
                    alt={program.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: 'var(--dark-charcoal)',
                    color: '#ffffff',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '800'
                  }}>
                    {program.badge}
                  </div>
                </div>

                {/* Content */}
                <div style={{
                  order: isEven ? 2 : 1,
                  padding: '40px'
                }}>
                  <h2 style={{ fontSize: '26px', fontWeight: '900', color: 'var(--dark-charcoal)', marginBottom: '12px' }}>
                    {program.title}
                  </h2>
                  <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '20px' }}>
                    {program.desc}
                  </p>

                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'var(--saffron-orange-light)',
                    color: 'var(--saffron-orange)',
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: '800',
                    fontSize: '14px',
                    marginBottom: '24px'
                  }}>
                    <CheckCircle2 size={16} /> {program.impact}
                  </div>

                  <div>
                    <button onClick={onOpenDonate} className="btn btn-orange" style={{ padding: '12px 24px', fontSize: '14px' }}>
                      <Heart size={16} fill="#ffffff" /> Sponsor This Program
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Impact Banner */}
        <div style={{
          backgroundColor: 'var(--dark-charcoal)',
          color: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '40px',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '12px' }}>
            Want to Launch a Tailored CSR Initiative with Us?
          </h3>
          <p style={{ color: '#9ca3af', fontSize: '15px', maxWidth: '650px', margin: '0 auto 24px auto' }}>
            We work directly with corporate partners and institutional funders to execute measurable, audit-ready programs under Schedule VII.
          </p>
          <a href="/csr" className="btn btn-orange pulse-orange" style={{ padding: '14px 28px', fontSize: '15px', textDecoration: 'none' }}>
            View CSR Framework & Guidelines
          </a>
        </div>

      </div>
    </div>
  );
}
