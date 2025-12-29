'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerInner}>
            <div className={styles.logo}>
              <Image
                src="/img/logo-restaurante.webp"
                alt="Monteiro Grill"
                width={100}
                height={65}
                priority
              />
            </div>
            
            <nav className={styles.navDesktop}>
              <ul>
                <li><Link href="#home">Home</Link></li>
                <li><Link href="#menu">Menu</Link></li>
                <li><Link href="#especialidades">Especialidades</Link></li>
                <li><Link href="#menu_grupos">Menu Grupos</Link></li>
                <li><Link href="#reservas">Reservas</Link></li>
              </ul>
            </nav>
            <div className={styles.mobileMenuBtn} onClick={toggleMenu}>
              <i className="bi bi-list"></i>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.active : ''}`}>
        <i className={`bi bi-x ${styles.closeMobile}`} onClick={toggleMenu}></i>
        <nav>
          <ul>
            <li><Link href="#home" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="#menu" onClick={toggleMenu}>Menu</Link></li>
            <li><Link href="#especialidades" onClick={toggleMenu}>Especialidades</Link></li>
            <li><Link href="#menu_grupos" onClick={toggleMenu}>Menu Grupos</Link></li>
            <li><Link href="#reservas" onClick={toggleMenu}>Reservas</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
}
