import React from 'react';
import { pgsmConfig } from '../config/pgsmConfig';
import { Quote, Stethoscope, Heart, ShieldCheck } from 'lucide-react';

export default function PresidentMessage({ onOpenDonate }) {
  const { presidentStatement } = pgsmConfig;

  return (
    <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">

        <div className="card-clean" style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '40px',
          backgroundColor: 'var(--dark-charcoal)',
          color: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative',
          overflow: 'hidden'
        }}>

          {/* Saffron Accent Top Border */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', backgroundColor: 'var(--saffron-orange)' }}></div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center' }}>

            {/* Left Column: Doctor Profile Card */}
            <div style={{ textAlign: 'center', borderRight: '1px solid rgba(255, 255, 255, 0.1)', paddingRight: '20px' }}>
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: 'var(--saffron-orange)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto',
                boxShadow: '0 4px 16px rgba(243, 111, 33, 0.4)'
              }}>
                <Stethoscope size={48} />
              </div>

              <h3 style={{ fontSize: '22px', fontWeight: '900', color: '#ffffff', marginBottom: '4px' }}>
                {presidentStatement.name}
              </h3>

              <div style={{ fontSize: '13px', fontWeight: '800', color: 'var(--saffron-orange)', marginBottom: '8px' }}>
                {presidentStatement.role}
              </div>

              <div style={{ fontSize: '12px', color: '#9ca3af', lineHeight: '1.4' }}>
                {presidentStatement.credentials}
              </div>
            </div>

            {/* Right Column: Statement Copy */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <Quote size={24} color="var(--saffron-orange)" />
                <h4 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--saffron-orange)' }}>
                  "{presidentStatement.title}"
                </h4>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: '#d1d5db', lineHeight: '1.7', marginBottom: '24px' }}>
                {presidentStatement.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                <button onClick={onOpenDonate} className="btn btn-orange pulse-orange" style={{ padding: '12px 24px', fontSize: '14px' }}>
                  <Heart size={16} fill="#ffffff" /> Join Our Mission
                </button>
                <div style={{ fontSize: '12px', color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ShieldCheck size={14} color="var(--saffron-orange)" /> Verified 501(c)(3) / 80G Society
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
