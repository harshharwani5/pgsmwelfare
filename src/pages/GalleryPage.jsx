import React, { useState } from 'react';
import { Image, Filter, Eye } from 'lucide-react';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { title: 'Rural Doctor Examining Child', category: 'Healthcare', img: '/images/health_camp.jpg', desc: 'Free diagnostic health camp in Nowgong village' },
    { title: 'Senior Citizen Eye Screening', category: 'Healthcare', img: '/images/eye_camp.jpg', desc: 'Preventing rural blindness through free lens distribution' },
    { title: 'Healthcare Mother & Child Outreach', category: 'Healthcare', img: '/images/hero_healthcare.jpg', desc: 'Comprehensive maternal & child health counseling' },
    { title: 'Rural Student Hope & Education', category: 'Education', img: '/images/hero_education.jpg', desc: 'Providing school kits and textbooks to Nowgong children' },
    { title: 'Inspiring Schoolgirl Holding Books', category: 'Education', img: '/images/education_girl.jpg', desc: 'Empowering young girls to pursue higher education' },
    { title: 'Digital Literacy Computer Lab', category: 'Education', img: '/images/digital_classroom.jpg', desc: 'Bridging the rural-urban technology gap with modern IT labs' },
    { title: 'Women Vocational Tailoring Workshop', category: 'Women Skills', img: '/images/women_tailoring.jpg', desc: 'Certified sewing and garment crafting classes for rural women' },
    { title: 'Female Artisan Handicraft Showcase', category: 'Women Skills', img: '/images/women_crafts.jpg', desc: 'Hand-embroidered textiles generating household income' },
    { title: 'Empowered Woman Micro-Entrepreneur', category: 'Women Skills', img: '/images/hero_women.jpg', desc: 'Turning skills into sustainable family livelihoods' },
    { title: 'NSS Volunteers School Painting Drive', category: 'Youth NSS', img: '/images/nss_camp.jpg', desc: 'Youth civic action renovating village school buildings' },
    { title: 'Youth Leader Addressing Village Gathering', category: 'Youth NSS', img: '/images/youth_awareness.jpg', desc: 'Promoting hygiene, drug de-addiction and health habits' },
    { title: 'School Tree Plantation & Green Drive', category: 'Environment', img: '/images/tree_plantation.jpg', desc: '800+ saplings planted across rural campuses in Nowgong' }
  ];

  const categories = ['All', 'Healthcare', 'Education', 'Women Skills', 'Youth NSS', 'Environment'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div style={{ padding: '60px 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">

        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px auto' }}>
          <span className="pill-badge pill-orange" style={{ marginBottom: '14px' }}>
            📸 Ground Verified Impact
          </span>
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: '900', color: 'var(--dark-charcoal)', marginBottom: '16px' }}>
            Field Action Photo Gallery
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            Capturing real moments of transformation, learning, and service across Chhatarpur district (M.P.).
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                border: activeCategory === cat ? '2px solid var(--saffron-orange)' : '1px solid var(--border-color)',
                backgroundColor: activeCategory === cat ? 'var(--saffron-orange)' : '#ffffff',
                color: activeCategory === cat ? '#ffffff' : 'var(--dark-charcoal)',
                fontWeight: '800',
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="card-clean"
              style={{
                padding: 0,
                overflow: 'hidden',
                borderRadius: 'var(--radius-md)',
                backgroundColor: '#ffffff',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedImage(item)}
            >
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  backgroundColor: 'var(--dark-charcoal)',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: '800',
                  padding: '4px 10px',
                  borderRadius: '12px'
                }}>
                  {item.category}
                </div>
              </div>

              <div style={{ padding: '18px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--dark-charcoal)', marginBottom: '6px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 3000,
              padding: '20px'
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                maxWidth: '700px',
                width: '100%',
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
              }}
            >
              <img
                src={selectedImage.img}
                alt={selectedImage.title}
                style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
              />
              <div style={{ padding: '24px' }}>
                <div className="pill-badge pill-orange" style={{ fontSize: '11px', marginBottom: '8px' }}>
                  {selectedImage.category}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--dark-charcoal)', marginBottom: '8px' }}>
                  {selectedImage.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                  {selectedImage.desc}
                </p>
                <button onClick={() => setSelectedImage(null)} className="btn btn-charcoal" style={{ width: '100%', padding: '12px' }}>
                  Close Photo
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
