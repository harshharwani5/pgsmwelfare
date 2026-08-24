import React, { useState } from 'react';
import { pgsmConfig } from '../config/pgsmConfig';
import { Heart, Sparkles, ShieldCheck, GraduationCap, Stethoscope, Scissors, TreePine } from 'lucide-react';

export default function ImpactCalculator({ onOpenDonate }) {
  const [amount, setAmount] = useState(1200);

  // Dynamic Unit Economics Calculation based on amount
  const schoolKits = Math.max(1, Math.floor(amount / 500));
  const digitalLabMonths = (amount / 400).toFixed(1);
  const healthCheckups = Math.max(2, Math.floor((amount / 5000) * 25));
  const womenTailoringKits = Math.max(0, Math.floor(amount / 2500));

  // Determine matching story & photo dynamically
  let impactHeadline = `₹${amount.toLocaleString('en-IN')}: Provides ${schoolKits} Rural School Kit${schoolKits > 1 ? 's' : ''}`;
  let impactDesc = `Funds complete stationery, school bags, and textbooks so ${schoolKits} child${schoolKits > 1 ? 'ren' : ''} walk into class ready to learn with dignity.`;
  let impactImage = '/images/education_girl.jpg';

  if (amount >= 5000) {
    impactHeadline = `₹${amount.toLocaleString('en-IN')}: Free Rural Medical Camp for ${healthCheckups}+ Families`;
    impactDesc = `Covers mobile doctor visits, free diagnostic tests, and medicine distribution for ${healthCheckups}+ rural families in remote Nowgong villages.`;
    impactImage = '/images/health_camp.jpg';
  } else if (amount >= 2500) {
    impactHeadline = `₹${amount.toLocaleString('en-IN')}: Vocational Tailoring Kit for ${womenTailoringKits || 1} Rural Woman`;
    impactDesc = `Sponsors a certified sewing machine kit in Nowgong, turning a skill into steady household income.`;
    impactImage = '/images/women_tailoring.jpg';
  } else if (amount >= 1200) {
    impactHeadline = `₹${amount.toLocaleString('en-IN')}: ${digitalLabMonths} Months of Digital Lab Access`;
    impactDesc = `Covers computer lab access and basic digital literacy training for rural children to bridge the tech divide.`;
    impactImage = '/images/digital_classroom.jpg';
  }

  const presets = [500, 1200, 2500, 5000, 10000];

  return (
    <section id="impact-calculator" style={{ padding: '80px 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px auto' }}>
          <div className="pill-badge pill-orange" style={{ marginBottom: '14px' }}>
            <Sparkles size={14} /> Continuous Impact Calculator
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: '900', color: 'var(--dark-charcoal)', lineHeight: '1.2', marginBottom: '12px' }}>
            Where Does Your Contribution Go?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '17px' }}>
            Move the slider to see how every rupee translates into verifiable grassroots outcomes in Chhatarpur district.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          border: '2px solid var(--saffron-orange)',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
        }}>

          {/* Left Column: Interactive Slider & Controls */}
          <div style={{ padding: '40px', borderRight: '1px solid var(--border-color)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--dark-charcoal)', margin: 0 }}>
                Select Giving Amount
              </h3>
              <div style={{ fontSize: '24px', fontWeight: '900', color: 'var(--saffron-orange)' }}>
                ₹{amount.toLocaleString('en-IN')}
              </div>
            </div>

            {/* Quick Amount Presets */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
              {presets.map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setAmount(val)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-full)',
                    border: amount === val ? '2px solid var(--saffron-orange)' : '1px solid var(--border-color)',
                    backgroundColor: amount === val ? 'var(--saffron-orange)' : 'var(--bg-muted)',
                    color: amount === val ? '#ffffff' : 'var(--dark-charcoal)',
                    fontWeight: '800',
                    fontSize: '13px',
                    cursor: 'pointer',
                    transition: 'var(--transition)'
                  }}
                >
                  ₹{val.toLocaleString('en-IN')}
                </button>
              ))}
            </div>

            {/* Continuous Range Slider (Min: 500, Max: 10000, Step: 100) */}
            <div style={{ marginBottom: '24px' }}>
              <input
                type="range"
                min="500"
                max="10000"
                step="100"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: '5px',
                  background: `linear-gradient(to right, var(--saffron-orange) 0%, var(--saffron-orange) ${((amount - 500) / 9500) * 100}%, #e5e7eb ${((amount - 500) / 9500) * 100}%, #e5e7eb 100%)`,
                  outline: 'none',
                  cursor: 'pointer',
                  accentColor: 'var(--saffron-orange)'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-muted)', fontWeight: '700', marginTop: '6px' }}>
                <span>₹500</span>
                <span>₹2,500</span>
                <span>₹5,000</span>
                <span>₹10,000</span>
              </div>
            </div>

            {/* Custom Amount Input */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: 'var(--dark-charcoal)', marginBottom: '6px' }}>
                Or Enter Custom Amount (₹):
              </label>
              <input
                type="number"
                min="100"
                step="50"
                value={amount}
                onChange={(e) => setAmount(Math.max(100, Number(e.target.value)))}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-color)',
                  fontSize: '16px',
                  fontWeight: '800',
                  color: 'var(--dark-charcoal)'
                }}
              />
            </div>

            {/* 80G Tax Exemption Shield */}
            <div style={{
              backgroundColor: 'var(--dark-charcoal-light)',
              borderRadius: 'var(--radius-sm)',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '13px',
              color: 'var(--dark-charcoal)',
              fontWeight: '600'
            }}>
              <ShieldCheck size={18} color="var(--saffron-orange)" />
              <span>Instant Section 80G Tax Exemption Certificate issued.</span>
            </div>

          </div>

          {/* Right Column: Dynamic Real-time Impact Breakdown */}
          <div style={{ padding: '40px', backgroundColor: 'var(--saffron-orange-light)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            
            <div>
              {/* Photo Preview Container */}
              <div style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                height: '170px',
                marginBottom: '18px',
                boxShadow: 'var(--shadow-md)',
                border: '2px solid #ffffff'
              }}>
                <img
                  src={impactImage}
                  alt="Dynamic Beneficiary Impact"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <h4 style={{ fontSize: '18px', fontWeight: '900', color: 'var(--dark-charcoal)', marginBottom: '8px' }}>
                {impactHeadline}
              </h4>

              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '20px' }}>
                {impactDesc}
              </p>

              {/* Dynamic Metric Badges Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
                <div style={{ backgroundColor: '#ffffff', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '700' }}>School Kits</div>
                  <strong style={{ fontSize: '16px', color: 'var(--saffron-orange)' }}>{schoolKits} Kit{schoolKits > 1 ? 's' : ''}</strong>
                </div>
                <div style={{ backgroundColor: '#ffffff', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '700' }}>Health Screenings</div>
                  <strong style={{ fontSize: '16px', color: 'var(--saffron-orange)' }}>{healthCheckups}+ Patients</strong>
                </div>
              </div>
            </div>

            {/* Donate CTA */}
            <button
              onClick={onOpenDonate}
              className="btn btn-orange pulse-orange"
              style={{ width: '100%', padding: '16px', fontSize: '16px' }}
            >
              <Heart size={18} fill="#ffffff" /> Donate ₹{amount.toLocaleString('en-IN')}
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
