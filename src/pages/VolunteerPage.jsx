import React, { useState } from 'react';
import { pgsmConfig } from '../config/pgsmConfig';
import { Users, Heart, CheckCircle2, Award, Send } from 'lucide-react';

export default function VolunteerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    interests: 'Education & Digital Literacy',
    experience: '',
    availability: 'Weekends'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '60px 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">

        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px auto' }}>
          <span className="pill-badge pill-orange" style={{ marginBottom: '14px' }}>
            🤝 Youth & Community Mobilization
          </span>
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: '900', color: 'var(--dark-charcoal)', marginBottom: '16px' }}>
            Volunteer with PGSM Welfare
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            "Young Hands Are Already Building Rural India. Help Them Reach Further." Join our NSS camps, rural health drives, and digital classrooms in Nowgong & Chhatarpur.
          </p>
        </div>

        {/* 2-Column Volunteer Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'flex-start' }}>

          {/* Left Column: Volunteer Opportunities & Image */}
          <div>
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              height: '240px',
              marginBottom: '24px',
              boxShadow: 'var(--shadow-md)'
            }}>
              <img
                src="/images/nss_camp.jpg"
                alt="NSS Volunteer Project"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <h2 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--dark-charcoal)', marginBottom: '16px' }}>
              Ways You Can Make an Impact:
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ backgroundColor: '#ffffff', padding: '18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <strong style={{ color: 'var(--saffron-orange)', fontSize: '15px' }}>💻 Digital Literacy & Teaching Fellow</strong>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
                  Teach basic computer skills, coding logic, and English to rural children in our Nowgong labs.
                </p>
              </div>

              <div style={{ backgroundColor: '#ffffff', padding: '18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <strong style={{ color: 'var(--saffron-orange)', fontSize: '15px' }}>🩺 Medical & Health Camp Assistant</strong>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
                  Assist doctors and specialists at our free health diagnosis, eye testing, and medicine distribution camps.
                </p>
              </div>

              <div style={{ backgroundColor: '#ffffff', padding: '18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <strong style={{ color: 'var(--saffron-orange)', fontSize: '15px' }}>🚩 NSS Youth Community Volunteer</strong>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
                  Participate in village school renovation, cleanliness drives, drug de-addiction awareness, and sapling plantation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            padding: '36px',
            border: '2px solid var(--saffron-orange)',
            boxShadow: 'var(--shadow-lg)'
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--saffron-orange-light)', color: 'var(--saffron-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '900', color: 'var(--dark-charcoal)', marginBottom: '8px' }}>
                  Application Received!
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>
                  Thank you, <strong>{formData.name}</strong>. Our volunteer coordinator in Nowgong will reach out to you via WhatsApp / email within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-orange"
                  style={{ padding: '12px 24px', fontSize: '14px' }}
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--dark-charcoal)', marginBottom: '6px' }}>
                  Volunteer Registration Form
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                  Fill out your details to join our active grassroots cohort in Chhatarpur.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '14px' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="rahul@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '14px' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 94067 62912"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '14px' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>Preferred Area of Contribution</label>
                    <select
                      value={formData.interests}
                      onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '14px', backgroundColor: '#ffffff' }}
                    >
                      <option>Education & Digital Literacy</option>
                      <option>Free Medical Camps & Eye Screening</option>
                      <option>Women Vocational Tailoring</option>
                      <option>NSS Youth Mobilization & Service Camps</option>
                      <option>Green Campus Tree Plantation Drives</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>Availability</label>
                    <select
                      value={formData.availability}
                      onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '14px', backgroundColor: '#ffffff' }}
                    >
                      <option>Weekends (Saturday & Sunday)</option>
                      <option>Full-time Fellowship (1 to 3 Months)</option>
                      <option>Weekly (Few hours on weekdays)</option>
                      <option>Remote / Digital Support</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn btn-orange pulse-orange" style={{ width: '100%', padding: '14px', fontSize: '15px' }}>
                  <Send size={16} /> Submit Volunteer Application
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
