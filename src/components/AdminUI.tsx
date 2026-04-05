'use client';

import { updateSiteData, updatePortfolioItem, updateTestimonial } from '@/app/actions';
import { useState } from 'react';

export default function AdminUI({ siteData, portfolioItems, testimonials }: any) {
  const [activeTab, setActiveTab] = useState('site');

  return (
    <div>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <button onClick={() => setActiveTab('site')} className={activeTab === 'site' ? 'btn-primary' : 'btn-outline'}>Site Copy</button>
        <button onClick={() => setActiveTab('portfolio')} className={activeTab === 'portfolio' ? 'btn-primary' : 'btn-outline'}>Portfolio</button>
        <button onClick={() => setActiveTab('testimonials')} className={activeTab === 'testimonials' ? 'btn-primary' : 'btn-outline'}>Testimonials</button>
      </div>

      {activeTab === 'site' && (
        <form action={updateSiteData} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
          <h2>Hero Section</h2>
          <label>Hero Title (Use \n for new lines)
            <textarea name="heroTitle" defaultValue={siteData.heroTitle} rows={4} style={{ width: '100%', padding: '0.5rem', background: '#222', color: '#fff', border: 'none' }}/>
          </label>
          <label>Hero Subtitle
            <textarea name="heroSubtitle" defaultValue={siteData.heroSubtitle} rows={4} style={{ width: '100%', padding: '0.5rem', background: '#222', color: '#fff', border: 'none' }}/>
          </label>
          <label>Hero CTA Text
            <input type="text" name="heroCtaText" defaultValue={siteData.heroCtaText} style={{ width: '100%', padding: '0.5rem', background: '#222', color: '#fff', border: 'none' }}/>
          </label>

          <h2 style={{ marginTop: '2rem' }}>Footer Section</h2>
          <label>Footer Headline 1
            <input type="text" name="footerHeadline1" defaultValue={siteData.footerHeadline1} style={{ width: '100%', padding: '0.5rem', background: '#222', color: '#fff', border: 'none' }}/>
          </label>
          <label>Footer Headline 2
            <input type="text" name="footerHeadline2" defaultValue={siteData.footerHeadline2} style={{ width: '100%', padding: '0.5rem', background: '#222', color: '#fff', border: 'none' }}/>
          </label>
          <label>Footer CTA Title
            <input type="text" name="footerCtaTitle" defaultValue={siteData.footerCtaTitle} style={{ width: '100%', padding: '0.5rem', background: '#222', color: '#fff', border: 'none' }}/>
          </label>
          <label>Footer CTA Subtitle
            <input type="text" name="footerCtaSubtitle" defaultValue={siteData.footerCtaSubtitle} style={{ width: '100%', padding: '0.5rem', background: '#222', color: '#fff', border: 'none' }}/>
          </label>
          <label>Footer CTA Button Form
            <input type="text" name="footerCtaButton" defaultValue={siteData.footerCtaButton} style={{ width: '100%', padding: '0.5rem', background: '#222', color: '#fff', border: 'none' }}/>
          </label>

          <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>Save Site Data</button>
        </form>
      )}

      {activeTab === 'portfolio' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {portfolioItems.map((item: any) => (
            <form action={updatePortfolioItem.bind(null, item.id)} key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', background: '#111', padding: '1.5rem', border: '1px solid #333' }}>
              <h3>Item {item.order}</h3>
              <label>Date<input type="text" name="date" defaultValue={item.date} style={{ width: '100%', padding: '0.5rem', background: '#222', color: '#fff', border: 'none' }}/></label>
              <label>Title<input type="text" name="title" defaultValue={item.title} style={{ width: '100%', padding: '0.5rem', background: '#222', color: '#fff', border: 'none' }}/></label>
              <label>Description<textarea name="description" defaultValue={item.description || ''} style={{ width: '100%', padding: '0.5rem', background: '#222', color: '#fff', border: 'none' }}/></label>
              <label>Image URL<input type="text" name="imageUrl" defaultValue={item.imageUrl || ''} style={{ width: '100%', padding: '0.5rem', background: '#222', color: '#fff', border: 'none' }}/></label>
              <label>Accent Color<input type="text" name="accentColor" defaultValue={item.accentColor || ''} style={{ width: '100%', padding: '0.5rem', background: '#222', color: '#fff', border: 'none' }}/></label>
              <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>Save Portfolio Item</button>
            </form>
          ))}
        </div>
      )}

      {activeTab === 'testimonials' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {testimonials.map((item: any) => (
            <form action={updateTestimonial.bind(null, item.id)} key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', background: '#111', padding: '1.5rem', border: '1px solid #333' }}>
              <h3>Testimonial {item.order}</h3>
              <label>Quote<textarea name="quote" defaultValue={item.quote} rows={4} style={{ width: '100%', padding: '0.5rem', background: '#222', color: '#fff', border: 'none' }}/></label>
              <label>Author<input type="text" name="author" defaultValue={item.author} style={{ width: '100%', padding: '0.5rem', background: '#222', color: '#fff', border: 'none' }}/></label>
              <label>Role<input type="text" name="role" defaultValue={item.role} style={{ width: '100%', padding: '0.5rem', background: '#222', color: '#fff', border: 'none' }}/></label>
              <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>Save Testimonial</button>
            </form>
          ))}
        </div>
      )}
    </div>
  );
}
