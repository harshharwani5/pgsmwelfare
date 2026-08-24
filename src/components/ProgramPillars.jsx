import React from 'react';
import { Link } from 'react-router-dom';
import { pgsmConfig } from '../config/pgsmConfig';
import { ArrowRight, CheckCircle2, Award, Heart } from 'lucide-react';

export default function ProgramPillars({ onOpenDonate }) {
  return (
    <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <div className="pill-badge pill-orange" style={{ marginBottom: '14px' }}>
            <Award size={14} /> Comprehensive Community Upliftment
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: '900', color: 'var(--dark-charcoal)', lineHeight: '1.2', marginBottom: '16px' }}>
            Our Core Program Pillars
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '17px' }}>
            Transforming rural lives in Nowgong & Chhatarpur across education, health, women empowerment, youth leadership, and environment.
          </p>
        </div>

        {/* 5-Card Responsive Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          {pgsmConfig.programs.map((prog) => (
            <div
              key={prog.id}
              className="card-clean"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '0',
                overflow: 'hidden',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              {/* Photo Header with Badge Overlay */}
              <div style={{ position: 'relative', height: '190px', width: '100%', overflow: 'hidden' }}>
                <img
                  src={prog.image}
                  alt={prog.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  backgroundColor: 'var(--dark-charcoal)',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: '800',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                }}>
                  {prog.badge}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '19px', fontWeight: '800', color: 'var(--dark-charcoal)', marginBottom: '8px' }}>
                    {prog.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '16px' }}>
                    {prog.desc}
                  </p>
                </div>

                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    fontWeight: '800',
                    color: 'var(--saffron-orange)',
                    backgroundColor: 'var(--saffron-orange-light)',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-sm)',
                    marginBottom: '16px'
                  }}>
                    <CheckCircle2 size={15} /> {prog.impact}
                  </div>

                  <Link
                    to="/causes"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '14px',
                      fontWeight: '800',
                      color: 'var(--saffron-orange)',
                      textDecoration: 'none'
                    }}
                  >
                    Explore Program <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Program Banner Call to Action */}
        <div style={{
          backgroundColor: 'var(--dark-charcoal)',
          color: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '36px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <h4 style={{ fontSize: '22px', fontWeight: '900', color: '#ffffff', marginBottom: '6px' }}>
              Want to Support a Specific Pillar in Chhatarpur?
            </h4>
            <p style={{ fontSize: '14px', color: '#9ca3af' }}>
              You can sponsor an entire computer lab, medical camp, or women's tailoring batch with 100% tax benefits.
            </p>
          </div>
          <button onClick={onOpenDonate} className="btn btn-orange pulse-orange" style={{ padding: '14px 28px', fontSize: '15px' }}>
            <Heart size={18} fill="#ffffff" /> Sponsor a Program
          </button>
        </div>

      </div>
    </section>
  );
}
