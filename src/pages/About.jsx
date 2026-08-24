import React from 'react';
import { pgsmConfig } from '../config/pgsmConfig';
import { Heart, Target, Compass, Award, ShieldCheck, Stethoscope, Users, Building, Quote } from 'lucide-react';

export default function About({ onOpenDonate }) {
  return (
    <div style={{ padding: '60px 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">

        {/* 1. Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 60px auto' }}>
          <span className="pill-badge pill-orange" style={{ marginBottom: '14px' }}>
            📜 Est. {pgsmConfig.establishedYear} ({pgsmConfig.yearsOfService} Years Legacy)
          </span>
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: '900', color: 'var(--dark-charcoal)', marginBottom: '16px' }}>
            About {pgsmConfig.shortName}
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: '1.7' }}>
            {pgsmConfig.fullName} is a registered non-profit educational and social welfare society headquartered at Nowgong, District Chhatarpur, Madhya Pradesh. Founded by medical professionals and community educators in 2016, we transform grassroots intent into tangible, generational change.
          </p>
        </div>

        {/* 2. Story & Origin Section (Mishra Clinic) */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '40px',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-md)',
          marginBottom: '60px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '36px',
          alignItems: 'center'
        }}>
          <div>
            <div className="pill-badge pill-charcoal" style={{ marginBottom: '12px', fontSize: '11px' }}>
              Our Origin Story
            </div>
            <h2 style={{ fontSize: '26px', fontWeight: '900', color: 'var(--dark-charcoal)', marginBottom: '14px' }}>
              Born at Mishra Clinic, Nowgong
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '14px' }}>
              In 2016, Dr. Ravi Kant Mishra recognized that health and education cannot be treated in isolation. Treating a rural child's illness was meaningless if the family could not afford school kits or digital skills to break the cycle of poverty.
            </p>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7' }}>
              Thus, PGSM Welfare was established as a registered society to operate free diagnostic health camps, provide digital classrooms for students, and train rural women in tailoring across Chhatarpur.
            </p>
          </div>

          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '280px', boxShadow: 'var(--shadow-md)' }}>
            <img
              src="/images/about/mishra_clinic_origin.jpg"
              alt="Mishra Clinic Nowgong Origin"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* 3. Full 9-Member Governing Body & Leadership Board */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px auto' }}>
            <div className="pill-badge pill-orange" style={{ marginBottom: '10px' }}>
              👥 Grassroots Governance
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: '900', color: 'var(--dark-charcoal)' }}>
              Governing Body & Leadership Board
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>
              Steering the organization with full transparent governance and direct ground presence in Chhatarpur district.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {pgsmConfig.leadership.map((leader, idx) => (
              <div
                key={idx}
                className="card-clean"
                style={{
                  backgroundColor: '#ffffff',
                  padding: '24px',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Photo / Avatar Container */}
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginBottom: '16px',
                  border: '3px solid var(--saffron-orange)',
                  boxShadow: 'var(--shadow-md)',
                  backgroundColor: 'var(--saffron-orange-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/ravi_kant_mishra.jpg';
                    }}
                  />
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: '900', color: 'var(--dark-charcoal)', marginBottom: '4px' }}>
                  {leader.name}
                </h3>

                <div style={{
                  backgroundColor: 'var(--saffron-orange-light)',
                  color: 'var(--saffron-orange)',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '800',
                  marginBottom: '8px'
                }}>
                  {leader.role}
                </div>

                <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600', marginBottom: '12px' }}>
                  {leader.designation}
                </div>

                <p style={{ fontSize: '12px', color: 'var(--dark-charcoal)', fontStyle: 'italic', lineHeight: '1.5', marginTop: 'auto' }}>
                  "{leader.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Trust, Affiliations & Legal Compliance Section */}
        <div style={{
          backgroundColor: 'var(--dark-charcoal)',
          color: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '40px',
          marginBottom: '60px'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 32px auto' }}>
            <span className="pill-badge pill-orange" style={{ marginBottom: '10px', fontSize: '11px' }}>
              🏆 Trust & Affiliations
            </span>
            <h2 style={{ fontSize: '26px', fontWeight: '900', color: '#ffffff' }}>
              Awards, Recognitions & Legal Compliance
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', textAlign: 'center' }}>
            {/* Society Registration */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', padding: '20px', borderRadius: 'var(--radius-md)' }}>
              <ShieldCheck size={28} color="var(--saffron-orange)" style={{ margin: '0 auto 10px auto' }} />
              <div style={{ fontSize: '12px', color: '#9ca3af' }}>Society Registration</div>
              <strong style={{ fontSize: '14px', color: '#ffffff' }}>{pgsmConfig.registrationNumber}</strong>
              <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '4px' }}>MP Society Reg. Act</div>
            </div>

            {/* Permanent PAN */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', padding: '20px', borderRadius: 'var(--radius-md)' }}>
              <Building size={28} color="var(--saffron-orange)" style={{ margin: '0 auto 10px auto' }} />
              <div style={{ fontSize: '12px', color: '#9ca3af' }}>Permanent PAN</div>
              <strong style={{ fontSize: '14px', color: '#ffffff' }}>{pgsmConfig.panNumber}</strong>
              <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '4px' }}>Income Tax Dept.</div>
            </div>

            {/* Section 80G Tax Exemption */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', padding: '20px', borderRadius: 'var(--radius-md)' }}>
              <Award size={28} color="var(--saffron-orange)" style={{ margin: '0 auto 10px auto' }} />
              <div style={{ fontSize: '12px', color: '#9ca3af' }}>Section 80G Approved</div>
              <strong style={{ fontSize: '14px', color: '#ffffff' }}>50% Tax Exemption</strong>
              <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '4px' }}>URN: {pgsmConfig.taxExemption80G}</div>
            </div>

            {/* NITI Aayog Darpan ID */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', padding: '20px', borderRadius: 'var(--radius-md)' }}>
              <Users size={28} color="var(--saffron-orange)" style={{ margin: '0 auto 10px auto' }} />
              <div style={{ fontSize: '12px', color: '#9ca3af' }}>NITI Aayog Darpan</div>
              <strong style={{ fontSize: '14px', color: '#ffffff' }}>{pgsmConfig.nitiAayogDarpanId}</strong>
              <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '4px' }}>Govt. of India Portal</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <button onClick={onOpenDonate} className="btn btn-orange pulse-orange" style={{ padding: '16px 36px', fontSize: '16px' }}>
            <Heart size={18} fill="#ffffff" /> Support PGSM Welfare
          </button>
        </div>

      </div>
    </div>
  );
}
