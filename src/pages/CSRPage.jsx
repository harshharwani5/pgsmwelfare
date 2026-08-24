import React, { useState } from 'react';
import { pgsmConfig } from '../config/pgsmConfig';
import { ShieldCheck, FileText, Download, CheckCircle2, Building2, Send } from 'lucide-react';

export default function CSRPage() {
  const [inquirySent, setInquirySent] = useState(false);

  return (
    <div style={{ padding: '60px 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 60px auto' }}>
          <span className="pill-badge pill-charcoal" style={{ marginBottom: '14px' }}>
            💼 Section 135 & Schedule VII Aligned
          </span>
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: '900', color: 'var(--dark-charcoal)', marginBottom: '16px' }}>
            Corporate CSR Partnerships
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            Deploy corporate social responsibility capital into high-impact, transparent, and audit-ready programs in rural Madhya Pradesh.
          </p>
        </div>

        {/* 3 Value Pillars for CSR */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '50px' }}>
          <div className="card-clean" style={{ backgroundColor: '#ffffff' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--saffron-orange-light)', color: 'var(--saffron-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
              <ShieldCheck size={26} />
            </div>
            <h3 style={{ fontSize: '19px', fontWeight: '900', color: 'var(--dark-charcoal)', marginBottom: '8px' }}>
              Statutory 80G Compliance
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              All grants are eligible for 50% tax deduction under Section 80G. Complete legal registration, PAN, and audited statements available for review.
            </p>
          </div>

          <div className="card-clean" style={{ backgroundColor: '#ffffff' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--dark-charcoal)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
              <Building2 size={26} color="var(--saffron-orange)" />
            </div>
            <h3 style={{ fontSize: '19px', fontWeight: '900', color: 'var(--dark-charcoal)', marginBottom: '8px' }}>
              Custom Lab / Camp Naming
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Corporate sponsors can brand digital classrooms, school renovation wings, or mobile medical vans with their official company name and CSR logo.
            </p>
          </div>

          <div className="card-clean" style={{ backgroundColor: '#ffffff' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--saffron-orange-light)', color: 'var(--saffron-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
              <FileText size={26} />
            </div>
            <h3 style={{ fontSize: '19px', fontWeight: '900', color: 'var(--dark-charcoal)', marginBottom: '8px' }}>
              Quarterly Impact Audits
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Receive detailed quarterly milestone reports, student attendance logs, beneficiary photo documentation, and third-party fund utilization certificates.
            </p>
          </div>
        </div>

        {/* CSR Proposal Download Banner */}
        <div style={{
          backgroundColor: 'var(--saffron-orange)',
          color: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '60px',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#ffffff', marginBottom: '8px' }}>
              Download Our 2026-27 CSR Project Pitch Deck
            </h3>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.95)' }}>
              Contains detailed unit-economics, village demographic data for Chhatarpur, and project budgets.
            </p>
          </div>

          <button
            onClick={() => alert('PGSM Welfare 2026-27 CSR Comprehensive Pitch Deck downloaded successfully!')}
            className="btn"
            style={{ backgroundColor: 'var(--dark-charcoal)', color: '#ffffff', padding: '14px 28px', fontSize: '15px', fontWeight: '800' }}
          >
            <Download size={18} /> Download CSR Deck (PDF)
          </button>
        </div>

        {/* Corporate Inquiry Form */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '40px',
          maxWidth: '700px',
          margin: '0 auto',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-md)'
        }}>
          {inquirySent ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--saffron-orange-light)', color: 'var(--saffron-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                <CheckCircle2 size={32} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--dark-charcoal)', marginBottom: '8px' }}>
                CSR Proposal Inquiry Received
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                Our CSR Director will contact your company's foundation desk within 1 business day.
              </p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setInquirySent(true); }}>
              <h3 style={{ fontSize: '22px', fontWeight: '900', color: 'var(--dark-charcoal)', marginBottom: '6px' }}>
                Request a Custom CSR Proposal
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>
                Directly connect with Dr. Ravi Kant Mishra and the PGSM executive board.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>Company Name *</label>
                    <input type="text" required placeholder="e.g. Tata Consultancy Services" style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '14px' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>CSR Representative Name *</label>
                    <input type="text" required placeholder="e.g. Ananya Roy" style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '14px' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>Work Email *</label>
                    <input type="email" required placeholder="ananya@company.com" style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '14px' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>Target Budget (₹ INR)</label>
                    <select style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '14px', backgroundColor: '#ffffff' }}>
                      <option>₹1 Lakh - ₹5 Lakhs</option>
                      <option>₹5 Lakhs - ₹20 Lakhs</option>
                      <option>₹20 Lakhs - ₹50 Lakhs</option>
                      <option>₹50 Lakhs+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>Focus Pillar</label>
                  <select style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '14px', backgroundColor: '#ffffff' }}>
                    <option>Digital Classrooms & School Infrastructure</option>
                    <option>Mobile Medical Van & Rural Health Diagnosis</option>
                    <option>Women Vocational Tailoring & Micro-Enterprise</option>
                    <option>Youth NSS Leadership & Clean Energy</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-orange pulse-orange" style={{ width: '100%', padding: '14px', fontSize: '15px' }}>
                <Send size={16} /> Submit CSR Request
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
