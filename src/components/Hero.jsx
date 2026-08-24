import React, { useState } from 'react';
import { pgsmConfig } from '../config/pgsmConfig';
import { Heart, ArrowRight, ShieldCheck, Award, Users, GraduationCap, ChevronRight, Trophy, Sparkles } from 'lucide-react';

export default function Hero({ onOpenDonate }) {
  const [selectedHeroIndex, setSelectedHeroIndex] = useState(0);
  const currentHero = pgsmConfig.heroHeadlines[selectedHeroIndex];

  return (
    <section style={{
      backgroundColor: 'var(--saffron-orange)',
      color: '#ffffff',
      padding: '60px 0 80px 0',
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '4px solid var(--dark-charcoal)'
    }}>
      
      {/* Background Decorative Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 60%)',
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* 1. Hero Option Selector Pills (Allows Switching Between Copywriting Kit Themes) */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.8px', color: 'rgba(255, 255, 255, 0.9)' }}>
            Campaign Focus:
          </span>
          {pgsmConfig.heroHeadlines.map((opt, idx) => (
            <button
              key={opt.id}
              onClick={() => setSelectedHeroIndex(idx)}
              style={{
                background: selectedHeroIndex === idx ? 'var(--dark-charcoal)' : 'rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                border: selectedHeroIndex === idx ? '2px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.4)',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
            >
              {opt.tag}
            </button>
          ))}
        </div>

        {/* 2. Main 2-Column Hero Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>

          {/* Left Column: Headlines & Actions */}
          <div>
            
            {/* Bilingual Tagline Banner */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'var(--dark-charcoal)',
              color: '#ffffff',
              padding: '8px 16px',
              borderRadius: '24px',
              fontSize: '13px',
              fontWeight: '800',
              marginBottom: '16px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              maxWidth: '100%'
            }}>
              <span style={{ color: 'var(--saffron-orange)', fontSize: '14px' }}>✦</span>
              <span style={{ letterSpacing: '0.2px' }}>{pgsmConfig.tagline}</span>
            </div>

            {/* Top Pill Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: '800',
              marginBottom: '20px',
              marginLeft: '8px'
            }}>
              <Award size={15} color="#ffffff" />
              {currentHero.category} · Est. 2016
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: 'clamp(32px, 4.5vw, 50px)',
              fontWeight: '900',
              lineHeight: '1.15',
              color: '#ffffff',
              marginBottom: '20px',
              letterSpacing: '-0.5px'
            }}>
              {currentHero.headline}
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: 'clamp(16px, 2vw, 19px)',
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: '32px',
              maxWidth: '540px'
            }}>
              {currentHero.subtitle}
            </p>

            {/* Dual CTA Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '32px' }}>
              <button
                onClick={onOpenDonate}
                className="btn pulse-orange"
                style={{
                  backgroundColor: '#ffffff',
                  color: 'var(--saffron-orange)',
                  padding: '16px 32px',
                  fontSize: '16px',
                  fontWeight: '900',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
                }}
              >
                <Heart size={20} fill="var(--saffron-orange)" /> {currentHero.cta}
              </button>

              <a
                href="#impact-calculator"
                className="btn"
                style={{
                  backgroundColor: 'var(--dark-charcoal)',
                  color: '#ffffff',
                  padding: '16px 28px',
                  fontSize: '15px',
                  fontWeight: '800'
                }}
              >
                Calculate Impact <ArrowRight size={18} />
              </a>
            </div>

            {/* Trust Badges */}
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '13px', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '600' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} /> 100% Tax Exemption
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} /> Reg: 06/12/03/11718/16
              </span>
            </div>

          </div>

          {/* Right Column: High-Impact Human Photography Card */}
          <div style={{ position: 'relative' }}>
            
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              border: '4px solid #ffffff',
              position: 'relative',
              backgroundColor: '#ffffff',
              aspectRatio: '4/3'
            }}>
              <img
                src={currentHero.image}
                alt="PGSM Welfare Beneficiary"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              {/* Gradient Bottom Overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '40%',
                background: 'linear-gradient(to top, rgba(31, 31, 31, 0.85) 0%, transparent 100%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '20px'
              }}>
                <div style={{ color: '#ffffff' }}>
                  <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--saffron-orange)', textTransform: 'uppercase' }}>
                    Ground Verified Story · Nowgong (M.P.)
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: '700' }}>
                    Empowering children & women across Chhatarpur district.
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stat Badge (Azim Premji / Swades Style) */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '20px',
              backgroundColor: 'var(--dark-charcoal)',
              color: '#ffffff',
              padding: '14px 22px',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              border: '2px solid var(--saffron-orange)'
            }}>
              <div style={{ fontSize: '26px', fontWeight: '900', color: 'var(--saffron-orange)' }}>
                4,500+
              </div>
              <div style={{ fontSize: '12px', lineHeight: '1.2', fontWeight: '700' }}>
                Lives Directly<br />Empowered
              </div>
            </div>

          </div>

        </div>

        {/* 3. Bottom 3-Metric Bar */}
        <div style={{
          marginTop: '60px',
          padding: '24px 32px',
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
          color: 'var(--dark-charcoal)'
        }}>
          
          <div style={{ textAlign: 'center', borderRight: '1px solid var(--border-color)', paddingRight: '12px' }}>
            <div style={{ fontSize: '32px', fontWeight: '900', color: 'var(--saffron-orange)' }}>
              {pgsmConfig.metrics.yearsActive}
            </div>
            <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-muted)' }}>
              Years Active Ground Service
            </div>
          </div>

          <div style={{ textAlign: 'center', borderRight: '1px solid var(--border-color)', paddingRight: '12px' }}>
            <div style={{ fontSize: '32px', fontWeight: '900', color: 'var(--saffron-orange)' }}>
              {pgsmConfig.metrics.studentsTrained}
            </div>
            <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-muted)' }}>
              Rural Students Trained
            </div>
          </div>

          <div style={{ textAlign: 'center', borderRight: '1px solid var(--border-color)', paddingRight: '12px' }}>
            <div style={{ fontSize: '32px', fontWeight: '900', color: 'var(--saffron-orange)' }}>
              {pgsmConfig.metrics.nssCampsHeld}
            </div>
            <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-muted)' }}>
              Youth NSS Camps Held
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: '900', color: 'var(--saffron-orange)' }}>
              {pgsmConfig.metrics.treesPlanted}
            </div>
            <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-muted)' }}>
              Trees Planted in Nowgong
            </div>
          </div>

        </div>

        {/* 4. Recent Impact Highlights Array Display */}
        <div style={{ marginTop: '36px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px',
            color: 'rgba(255, 255, 255, 0.95)',
            fontSize: '13px',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '0.8px'
          }}>
            <Sparkles size={16} color="#ffffff" />
            <span>Recent Impact Highlights</span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '16px'
          }}>
            {pgsmConfig.recentImpactHighlights.map((highlight) => (
              <div
                key={highlight.id}
                style={{
                  backgroundColor: 'rgba(31, 31, 31, 0.75)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '8px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{
                    backgroundColor: 'var(--saffron-orange)',
                    color: '#ffffff',
                    fontSize: '10px',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    padding: '3px 8px',
                    borderRadius: '12px',
                    letterSpacing: '0.5px'
                  }}>
                    {highlight.badge}
                  </span>
                  <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.7)', fontWeight: '600' }}>
                    {highlight.category}
                  </span>
                </div>

                <h4 style={{
                  fontSize: '14px',
                  fontWeight: '800',
                  color: '#ffffff',
                  lineHeight: '1.4',
                  margin: '4px 0'
                }}>
                  {highlight.title}
                </h4>

                <p style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.4',
                  margin: 0
                }}>
                  {highlight.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
