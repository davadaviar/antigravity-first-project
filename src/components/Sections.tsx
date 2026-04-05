'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './Sections.module.css';

export function HeroSection({ data }: { data: any }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // split title to colorize the last word
  const titleParts = data.heroTitle.split('\n');
  const lastLine = titleParts.pop() || '';
  const firstLines = titleParts.join('\n');

  return (
    <section ref={ref} className={styles.hero}>
      <motion.div style={{ y }} className={styles.heroBg} />
      <div className={`container ${styles.heroContent}`}>
        <motion.h1 
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {firstLines && <>{firstLines}<br/></>}
          <span>{lastLine}</span>
        </motion.h1>
        <motion.p 
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {data.heroSubtitle}
        </motion.p>
        <motion.button 
          className="btn-primary hover-lift"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {data.heroCtaText}
        </motion.button>
      </div>
    </section>
  );
}

export function TimelineSection({ items }: { items: any[] }) {
  return (
    <section className={styles.timeline}>
      <div className={`container ${styles.timelineHeader}`}>
        <h2 className={styles.timelineTitle}>Evolution of the craft</h2>
        <div className={styles.timelineList}>
          {items.map((item, i) => (
            <motion.div 
              key={item.id}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2 }}
            >
              <div className={styles.timelineNumber}>{item.number}</div>
              <div className={styles.timelineContent}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MarqueeSection({ clients }: { clients: any[] }) {
  // Infinite scroll
  return (
    <section className={styles.marqueeContainer}>
      <motion.div 
        className={styles.marqueeTrack}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {/* Duplicate clients to create infinite effect */}
        {[...clients, ...clients].map((client, i) => (
          <div key={i} className={styles.marqueeItem}>
            {client.name}
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export function PortfolioSection({ items }: { items: any[] }) {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="container">
        <div className={styles.portfolioHeader}>
          <h2 className={styles.portfolioTitle}>Selected Works</h2>
          <span className="text-accent" style={{fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em'}}>VIEW ALL EXPLORE ↗</span>
        </div>
        <div className={styles.portfolioGrid}>
          {items.map((item, i) => (
            <motion.div 
              key={item.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ background: item.accentColor ? item.accentColor : 'rgba(255,255,255,0.02)' }}
            >
              <div className={styles.cardDate}>{item.date}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              {item.description && <p className={styles.cardDesc}>{item.description}</p>}
              {item.imageUrl && (
                <div 
                  className={styles.cardImage} 
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection({ items }: { items: any[] }) {
  return (
    <section className="container" style={{ padding: '4rem var(--padding-x)' }}>
      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '2rem' }}>
        CLIENT FEEDBACK \
      </div>
      <div className={styles.testimonials}>
        {items.map((item, i) => (
          <motion.div 
            key={item.id} 
            className={styles.testCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <p className={styles.testQuote}>{item.quote}</p>
            <span className={styles.testAuthor}>{item.author}</span>
            <span className={styles.testRole}>{item.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function FooterSection({ data }: { data: any }) {
  return (
    <section id="contact" className={styles.footerSection}>
      <motion.div 
        className={styles.giantText}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {data.footerHeadline1} <br/>
        <span>{data.footerHeadline2}</span>
      </motion.div>
      <div className="container">
        <div className={styles.footerInner}>
          <div>
            <h2 className={styles.footerTitle}>{data.footerCtaTitle}</h2>
            <p className={styles.footerSubtitle}>{data.footerCtaSubtitle}</p>
          </div>
          <button className="btn-primary hover-lift" style={{ padding: '1rem 3rem', fontSize: '1rem' }}>
            {data.footerCtaButton}
          </button>
        </div>
        <div className={styles.bottomFooter}>
          <span>© 2026+ The Verbal Architect</span>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <span>LinkedIn</span>
            <span>Twitter</span>
            <span>Instagram</span>
          </div>
        </div>
      </div>
    </section>
  );
}
