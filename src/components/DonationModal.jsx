import React, { useState } from 'react';
import { pgsmConfig } from '../config/pgsmConfig';
import { X, Heart, ShieldCheck, QrCode, CheckCircle2, Copy, Download, Building2 } from 'lucide-react';

export default function DonationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [step, setStep] = useState(1); // 1: Select Tier/Amount, 2: Donor Info & Tax Exemption, 3: Payment/UPI, 4: Receipt
  const [selectedAmount, setSelectedAmount] = useState(1200);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorPan, setDonorPan] = useState('');
  const [copiedUPI, setCopiedUPI] = useState(false);

  const finalAmount = customAmount ? parseInt(customAmount, 10) || 0 : selectedAmount;

  const handleCopyUPI = () => {
    navigator.clipboard.writeText('pgsmwelfare@upi');
    setCopiedUPI(true);
    setTimeout(() => setCopiedUPI(false), 2000);
  };

  const handleConfirmPayment = () => {
    setStep(4);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(31, 31, 31, 0.85)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: 'var(--radius-lg)',
        maxWidth: '560px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
        border: '3px solid var(--saffron-orange)'
      }}>

        {/* Modal Header */}
        <div style={{
          backgroundColor: 'var(--saffron-orange)',
          color: '#ffffff',
          padding: '20px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: '900', color: '#ffffff' }}>
              Support PGSM Welfare
            </h3>
            <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.95)', marginTop: '2px' }}>
              50% Tax Exemption · 80G URN: <strong>{pgsmConfig.taxExemption80G}</strong> | CSR: <strong>{pgsmConfig.csrRegistrationNo}</strong>
            </p>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Progress Tracker */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-muted)' }}>
          {['1. Select Amount', '2. Donor & PAN', '3. Pay & Tax Exemption'].map((title, idx) => (
            <div
              key={idx}
              style={{
                flex: 1,
                padding: '10px 6px',
                textAlign: 'center',
                fontSize: '11px',
                fontWeight: '700',
                color: step === idx + 1 ? 'var(--saffron-orange)' : 'var(--text-muted)',
                borderBottom: step === idx + 1 ? '3px solid var(--saffron-orange)' : 'none'
              }}
            >
              {title}
            </div>
          ))}
        </div>

        {/* Modal Body */}
        <div style={{ padding: '28px' }}>

          {/* STEP 1: Select Tier */}
          {step === 1 && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h4 style={{ fontSize: '17px', fontWeight: '800', color: 'var(--dark-charcoal)' }}>
                  Choose Your Contribution Level:
                </h4>
                <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--saffron-orange)', backgroundColor: 'var(--saffron-orange-light)', padding: '2px 8px', borderRadius: '12px' }}>
                  80G Certified
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                {pgsmConfig.impactTiers.map((tier) => (
                  <button
                    key={tier.amount}
                    onClick={() => { setSelectedAmount(tier.amount); setCustomAmount(''); }}
                    style={{
                      padding: '14px',
                      borderRadius: 'var(--radius-md)',
                      border: (!customAmount && selectedAmount === tier.amount) ? '2px solid var(--saffron-orange)' : '1px solid var(--border-color)',
                      backgroundColor: (!customAmount && selectedAmount === tier.amount) ? 'var(--saffron-orange-light)' : '#ffffff',
                      color: (!customAmount && selectedAmount === tier.amount) ? 'var(--saffron-orange)' : 'var(--dark-charcoal)',
                      fontWeight: '800',
                      fontSize: '16px',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    {tier.label}
                    <div style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {tier.title}
                    </div>
                  </button>
                ))}
              </div>

              {/* Custom Amount Field */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: 'var(--dark-charcoal)', marginBottom: '6px' }}>
                  Or Enter Custom Amount (₹):
                </label>
                <input
                  type="number"
                  placeholder="e.g. 5000"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-color)',
                    fontSize: '16px',
                    outline: 'none',
                    fontWeight: '700'
                  }}
                />
              </div>

              <button
                onClick={() => setStep(2)}
                className="btn btn-orange"
                style={{ width: '100%', padding: '16px', fontSize: '16px' }}
              >
                Continue with ₹{finalAmount.toLocaleString('en-IN')}
              </button>
            </div>
          )}

          {/* STEP 2: Donor Info */}
          {step === 2 && (
            <div>
              <h4 style={{ fontSize: '17px', fontWeight: '800', color: 'var(--dark-charcoal)', marginBottom: '8px' }}>
                Donor Information & 80G Tax Exemption:
              </h4>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                URN: <strong>{pgsmConfig.taxExemption80G}</strong> | CSR: <strong>{pgsmConfig.csrRegistrationNo}</strong>
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>
                    Full Name (As per PAN) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name as per PAN"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>
                    Email Address * (For 80G Receipt & Certificate)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '14px' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>
                      WhatsApp / Mobile No. *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 94067 62912"
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '14px' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px', color: 'var(--saffron-orange)' }}>
                      PAN Number * (Required for 80G)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="ABCDE1234F"
                      maxLength={10}
                      value={donorPan}
                      onChange={(e) => setDonorPan(e.target.value.toUpperCase())}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '2px solid var(--saffron-orange)',
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        fontWeight: '700'
                      }}
                    />
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => setStep(1)}
                  className="btn btn-charcoal"
                  style={{ flex: 1, padding: '14px' }}
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!donorName || !donorEmail || !donorPan || !donorPhone}
                  className="btn btn-orange"
                  style={{
                    flex: 2,
                    padding: '14px',
                    opacity: (!donorName || !donorEmail || !donorPan || !donorPhone) ? 0.6 : 1,
                    cursor: (!donorName || !donorEmail || !donorPan || !donorPhone) ? 'not-allowed' : 'pointer'
                  }}
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Payment Gateway / UPI QR Code */}
          {step === 3 && (
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '900', color: 'var(--dark-charcoal)', marginBottom: '8px' }}>
                Scan to Donate via UPI
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '18px' }}>
                Contributing <strong>₹{finalAmount.toLocaleString('en-IN')}</strong> to PGSM Welfare
              </p>

              {/* Simulated QR Box */}
              <div style={{
                width: '200px',
                height: '200px',
                margin: '0 auto 16px auto',
                backgroundColor: 'var(--bg-muted)',
                border: '2px dashed var(--saffron-orange)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px'
              }}>
                <QrCode size={110} color="var(--dark-charcoal)" />
                <div style={{ fontSize: '11px', fontWeight: '800', color: 'var(--saffron-orange)', marginTop: '8px' }}>
                  GPay / PhonePe / Paytm / BHIM
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '24px' }}>
                <span style={{ fontSize: '13px', fontWeight: '700' }}>UPI ID: pgsmwelfare@upi</span>
                <button onClick={handleCopyUPI} style={{ background: 'none', border: 'none', color: 'var(--saffron-orange)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: '800' }}>
                  <Copy size={14} /> {copiedUPI ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => setStep(2)} className="btn btn-charcoal" style={{ flex: 1, padding: '14px' }}>
                  Back
                </button>
                <button onClick={handleConfirmPayment} className="btn btn-orange pulse-orange" style={{ flex: 2, padding: '14px' }}>
                  I Have Completed Payment
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Success & Official 80G Receipt */}
          {step === 4 && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--saffron-orange-light)', color: 'var(--saffron-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                <CheckCircle2 size={36} />
              </div>

              <h4 style={{ fontSize: '22px', fontWeight: '900', color: 'var(--dark-charcoal)', marginBottom: '6px' }}>
                Thank You for Your Generosity!
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                Your donation of <strong>₹{finalAmount.toLocaleString('en-IN')}</strong> will directly empower lives in Chhatarpur district.
              </p>

              {/* Receipt Summary Card */}
              <div style={{
                backgroundColor: 'var(--bg-muted)',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                textAlign: 'left',
                fontSize: '12px',
                color: 'var(--dark-charcoal)',
                marginBottom: '24px',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span>Donor:</span> <strong>{donorName || 'Generous Donor'}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span>PAN:</span> <strong>{donorPan || 'N/A'}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span>Email:</span> <strong>{donorEmail || 'N/A'}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span>Amount:</span> <strong>₹{finalAmount.toLocaleString('en-IN')}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span>80G URN:</span> <strong>{pgsmConfig.taxExemption80G}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span>CSR Reg:</span> <strong>{pgsmConfig.csrRegistrationNo}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span>Society Reg:</span> <strong>{pgsmConfig.registrationNumber}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Transaction ID:</span> <strong>PGSM-{Math.floor(100000 + Math.random() * 900000)}</strong>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => alert('Official 80G Tax Exemption Receipt downloaded to your device!')} className="btn btn-charcoal" style={{ flex: 1, padding: '14px', fontSize: '13px' }}>
                  <Download size={15} /> Download Receipt
                </button>
                <button onClick={onClose} className="btn btn-orange" style={{ flex: 1, padding: '14px', fontSize: '13px' }}>
                  Close
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
