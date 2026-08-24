import React from 'react';
import { pgsmConfig } from '../config/pgsmConfig';
import { ShieldCheck, UserCheck, Award } from 'lucide-react';

export default function LeadershipSpotlight() {
  return (
    <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px auto' }}>
          <div className="pill-badge pill-charcoal" style={{ marginBottom: '14px' }}>
            <Award size={14} color="var(--saffron-orange)" /> Grassroots Governance
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: '900', color: 'var(--dark-charcoal)', lineHeight: '1.2', marginBottom: '12px' }}>
            Leadership Board & Visionaries
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '17px' }}>
            Led by medical professionals and grassroots social leaders dedicated to the long-term progress of Chhatarpur district.
          </p>
        </div>

        {/* 4-Card Board Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {pgsmConfig.leadership.map((member, idx) => (
            <div
              key={idx}
              className="card-clean"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-color)',
                padding: '28px',
                textAlign: 'center',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              {/* Avatar Container */}
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                backgroundColor: 'var(--saffron-orange-light)',
                border: '2px solid var(--saffron-orange)',
                color: 'var(--saffron-orange)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}>
                <UserCheck size={32} />
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--dark-charcoal)', marginBottom: '4px' }}>
                {member.name}
              </h3>

              <div style={{ fontSize: '13px', fontWeight: '800', color: 'var(--saffron-orange)', marginBottom: '12px' }}>
                {member.role}
              </div>

              <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: '1.5' }}>
                "{member.quote}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
