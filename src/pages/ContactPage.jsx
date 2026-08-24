import React, { useState } from 'react';
import { pgsmConfig } from '../config/pgsmConfig';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [messageSent, setMessageSent] = useState(false);

  return (
    <div style={{ padding: '60px 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">

        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px auto' }}>
          <span className="pill-badge pill-orange" style={{ marginBottom: '14px' }}>
            📍 Nowgong HQ Office
          </span>
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: '900', color: 'var(--dark-charcoal)', marginBottom: '16px' }}>
            Get in Touch with Us
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            Have questions about our educational labs, health camps, or donation transparency? Visit our Nowgong office or drop us a message.
          </p>
        </div>

        {/* 2-Column Contact Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'flex-start' }}>

          {/* Left Column: Office Details */}
          <div>
            <div className="card-clean" style={{ backgroundColor: '#ffffff', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--dark-charcoal)', marginBottom: '20px' }}>
                Contact Information
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--saffron-orange-light)', color: 'var(--saffron-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-muted)' }}>Registered Office & Clinic:</div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--dark-charcoal)', marginTop: '2px', lineHeight: '1.5' }}>
                      {pgsmConfig.contact.address}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--saffron-orange-light)', color: 'var(--saffron-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-muted)' }}>Direct Phone:</div>
                    <a href={`tel:${pgsmConfig.contact.phone}`} style={{ fontSize: '15px', fontWeight: '800', color: 'var(--saffron-orange)', textDecoration: 'none' }}>
                      {pgsmConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--saffron-orange-light)', color: 'var(--saffron-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-muted)' }}>Official Email:</div>
                    <a href={`mailto:${pgsmConfig.contact.email}`} style={{ fontSize: '14px', fontWeight: '700', color: 'var(--dark-charcoal)', textDecoration: 'none' }}>
                      {pgsmConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--dark-charcoal-light)', color: 'var(--dark-charcoal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-muted)' }}>Office Hours:</div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--dark-charcoal)' }}>
                      {pgsmConfig.contact.officeHours}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action Box */}
            <div style={{
              backgroundColor: '#25d366',
              color: '#ffffff',
              borderRadius: 'var(--radius-md)',
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px'
            }}>
              <div>
                <strong style={{ fontSize: '16px', display: 'block' }}>Chat with Dr. Mishra on WhatsApp</strong>
                <span style={{ fontSize: '13px', opacity: 0.9 }}>Quick response for queries and medical camps</span>
              </div>
              <a
                href={`https://wa.me/919406762912?text=Hello%20PGSM%20Welfare%2C%20I%20am%20interested%20in%20supporting%20your%20community%20programs.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: '#ffffff', color: '#1f1f1f', padding: '10px 16px', borderRadius: 'var(--radius-full)', fontWeight: '800', fontSize: '13px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <MessageCircle size={16} color="#25d366" /> Open Chat
              </a>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            padding: '36px',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-md)'
          }}>
            {messageSent ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--saffron-orange-light)', color: 'var(--saffron-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--dark-charcoal)', marginBottom: '8px' }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                  Thank you for reaching out to PGSM Welfare. Our team in Nowgong will reply promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setMessageSent(true); }}>
                <h3 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--dark-charcoal)', marginBottom: '6px' }}>
                  Send an Inquiry
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                  We are here to answer any questions from donors, volunteers, and community members.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>Your Name *</label>
                    <input type="text" required placeholder="e.g. Amit Verma" style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '14px' }} />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>Email Address *</label>
                      <input type="email" required placeholder="amit@example.com" style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '14px' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>Phone Number *</label>
                      <input type="tel" required placeholder="+91 94067 62912" style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '14px' }} />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>Subject</label>
                    <select style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '14px', backgroundColor: '#ffffff' }}>
                      <option>General Inquiry</option>
                      <option>80G Tax Exemption Receipt</option>
                      <option>Organizing a Medical Camp in Village</option>
                      <option>CSR Partnership Proposal</option>
                      <option>Volunteer Opportunities</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>Message / Details</label>
                    <textarea rows="4" required placeholder="How can we assist you?" style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '14px', resize: 'vertical' }}></textarea>
                  </div>
                </div>

                <button type="submit" className="btn btn-orange pulse-orange" style={{ width: '100%', padding: '14px', fontSize: '15px' }}>
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
