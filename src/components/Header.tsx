'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        The Verbal Architect.
      </Link>
      <nav className={styles.nav}>
        <Link href="#portfolio" className={styles.navLink}>Portfolio</Link>
        <Link href="#contact" className={styles.navLink}>Contact</Link>
        <Link href="#contact" className="btn-outline">Hire Me</Link>
      </nav>
    </header>
  );
}
