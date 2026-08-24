import React, { useState } from 'react';
import { pgsmConfig } from '../config/pgsmConfig';
import { LayoutDashboard, Users, Heart, Download, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('donations');

  const simulatedDonations = [
    { id: 'TXN-9841', name: 'Vikram Seth', amount: '₹5,000', program: 'Free Healthcare Camp', date: '21 Aug 2026', status: 'Verified (80G Issued)' },
    { id: 'TXN-9840', name: 'Sunita Mehra', amount: '₹2,500', program: 'Women Vocational Tailoring', date: '21 Aug 2026', status: 'Verified (80G Issued)' },
    { id: 'TXN-9839', name: 'Amitabh Sharma', amount: '₹1,200', program: 'Digital Literacy Lab', date: '20 Aug 2026', status: 'Verified (80G Issued)' },
    { id: 'TXN-9838', name: 'Priya Agarwal', amount: '₹500', program: 'School Bag & Stationery', date: '19 Aug 2026', status: 'Verified (80G Issued)' },
    { id: 'TXN-9837', name: 'Rohan Gupta', amount: '₹10,000', program: 'Campus Tree Plantation Drive', date: '18 Aug 2026', status: 'Verified (80G Issued)' }
  ];

  const simulatedVolunteers = [
    { name: 'Kavita Yadav', phone: '+91 98261 44521', interest: 'Digital Literacy Teaching', date: '21 Aug 2026', status: 'New Application' },
    { name: 'Dr. Alok Verma', phone: '+91 94251 88392', interest: 'Medical Health Camp', date: '20 Aug 2026', status: 'Approved' },
    { name: 'Neeraj Patel', phone: '+91 91114 93847', interest: 'NSS Youth Mobilization', date: '19 Aug 2026', status: 'In Review' }
  ];

  const handleExportCSV = () => {
    alert('Exporting verified donor database (CSV) with 80G tax serial identifiers...');
  };

  return (
    <div style={{ padding: '40px 0', backgroundColor: 'var(--bg-primary)', minHeight: '80vh' }}>
      <div className="container">

        {/* Dashboard Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
          <div>
            <div className="pill-badge pill-charcoal" style={{ fontSize: '11px', marginBottom: '8px' }}>
              Internal Management Portal
            </div>
            <h1 style={{ fontSize: '28px', fontWeight: '900', color: 'var(--dark-charcoal)' }}>
              PGSM Welfare Governance Console
            </h1>
          </div>

          <button onClick={handleExportCSV} className="btn btn-orange" style={{ padding: '10px 20px', fontSize: '13px' }}>
            <Download size={15} /> Export 80G Reports (CSV)
          </button>
        </div>

        {/* 4 Metric Counter Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '32px' }}>
          <div className="card-clean" style={{ backgroundColor: '#ffffff', padding: '20px' }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)' }}>Total Beneficiaries</div>
            <div style={{ fontSize: '28px', fontWeight: '900', color: 'var(--saffron-orange)' }}>{pgsmConfig.metrics.beneficiariesServed}</div>
          </div>
          <div className="card-clean" style={{ backgroundColor: '#ffffff', padding: '20px' }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)' }}>Students Trained</div>
            <div style={{ fontSize: '28px', fontWeight: '900', color: 'var(--dark-charcoal)' }}>{pgsmConfig.metrics.studentsTrained}</div>
          </div>
          <div className="card-clean" style={{ backgroundColor: '#ffffff', padding: '20px' }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)' }}>NSS Camps Held</div>
            <div style={{ fontSize: '28px', fontWeight: '900', color: 'var(--saffron-orange)' }}>{pgsmConfig.metrics.nssCampsHeld}</div>
          </div>
          <div className="card-clean" style={{ backgroundColor: '#ffffff', padding: '20px' }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)' }}>Trees Planted</div>
            <div style={{ fontSize: '28px', fontWeight: '900', color: 'var(--dark-charcoal)' }}>{pgsmConfig.metrics.treesPlanted}</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '12px', borderBottom: '1px solid var(--border-color)', marginBottom: '24px' }}>
          <button
            onClick={() => setActiveTab('donations')}
            style={{
              padding: '10px 20px',
              fontWeight: '800',
              fontSize: '14px',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'donations' ? '3px solid var(--saffron-orange)' : '3px solid transparent',
              color: activeTab === 'donations' ? 'var(--saffron-orange)' : 'var(--text-muted)',
              cursor: 'pointer'
            }}
          >
            Recent 80G Donations ({simulatedDonations.length})
          </button>
          <button
            onClick={() => setActiveTab('volunteers')}
            style={{
              padding: '10px 20px',
              fontWeight: '800',
              fontSize: '14px',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'volunteers' ? '3px solid var(--saffron-orange)' : '3px solid transparent',
              color: activeTab === 'volunteers' ? 'var(--saffron-orange)' : 'var(--text-muted)',
              cursor: 'pointer'
            }}
          >
            Volunteer Applications ({simulatedVolunteers.length})
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'donations' && (
          <div className="card-clean" style={{ backgroundColor: '#ffffff', padding: '0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-muted)', borderBottom: '1px solid var(--border-color)' }}>
                  <th style={{ padding: '14px 20px' }}>Receipt ID</th>
                  <th style={{ padding: '14px 20px' }}>Donor Name</th>
                  <th style={{ padding: '14px 20px' }}>Amount</th>
                  <th style={{ padding: '14px 20px' }}>Program Sponsored</th>
                  <th style={{ padding: '14px 20px' }}>Date</th>
                  <th style={{ padding: '14px 20px' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {simulatedDonations.map((item, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '14px 20px', fontWeight: '700' }}>{item.id}</td>
                    <td style={{ padding: '14px 20px', fontWeight: '800' }}>{item.name}</td>
                    <td style={{ padding: '14px 20px', fontWeight: '900', color: 'var(--saffron-orange)' }}>{item.amount}</td>
                    <td style={{ padding: '14px 20px', color: 'var(--text-muted)' }}>{item.program}</td>
                    <td style={{ padding: '14px 20px', color: 'var(--text-muted)' }}>{item.date}</td>
                    <td style={{ padding: '14px 20px' }}>
                      <span style={{ fontSize: '12px', fontWeight: '700', color: '#166534', backgroundColor: '#dcfce7', padding: '4px 10px', borderRadius: '12px' }}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'volunteers' && (
          <div className="card-clean" style={{ backgroundColor: '#ffffff', padding: '0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-muted)', borderBottom: '1px solid var(--border-color)' }}>
                  <th style={{ padding: '14px 20px' }}>Candidate Name</th>
                  <th style={{ padding: '14px 20px' }}>Contact Phone</th>
                  <th style={{ padding: '14px 20px' }}>Preferred Track</th>
                  <th style={{ padding: '14px 20px' }}>Applied Date</th>
                  <th style={{ padding: '14px 20px' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {simulatedVolunteers.map((item, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '14px 20px', fontWeight: '800' }}>{item.name}</td>
                    <td style={{ padding: '14px 20px', color: 'var(--text-muted)' }}>{item.phone}</td>
                    <td style={{ padding: '14px 20px', fontWeight: '700', color: 'var(--saffron-orange)' }}>{item.interest}</td>
                    <td style={{ padding: '14px 20px', color: 'var(--text-muted)' }}>{item.date}</td>
                    <td style={{ padding: '14px 20px' }}>
                      <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--dark-charcoal)', backgroundColor: 'var(--dark-charcoal-light)', padding: '4px 10px', borderRadius: '12px' }}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}
