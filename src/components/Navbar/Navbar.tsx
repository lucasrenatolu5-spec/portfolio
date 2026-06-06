/* =====================================================
   COMPONENTE: Navbar
   Barra de navegação com detecção de scroll,
   indicador de seção ativa e menu hambúrguer mobile.
   ===================================================== */

import { useState, useEffect, useCallback } from 'react';
import styles from './Navbar.module.css';

/** Links de navegação do site */
const NAV_LINKS = [
  { label: 'Início',   href: '#inicio'   },
  { label: 'Sobre',    href: '#sobre'    },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato',  href: '#contato'  },
];

export function Navbar() {
  // Controla se o fundo da navbar aparece (após scroll)
  const [scrolled, setScrolled] = useState(false);
  // Controla o menu mobile
  const [menuOpen, setMenuOpen] = useState(false);
  // Seção atualmente visível
  const [activeSection, setActiveSection] = useState('inicio');

  // Detecta scroll para aplicar background na navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Detecta qual seção está visível para highlight do link ativo
      const sections = NAV_LINKS.map(link => link.href.replace('#', ''));
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha o menu ao clicar em um link
  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  setMenuOpen(false);

  // Remove o fixed do body antes de navegar
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.width = '';

  setTimeout(() => {
    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 300);
}, []);

  // Bloqueia scroll do body quando menu mobile está aberto
useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  } else {
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
  }
  return () => {
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
  };
}, [menuOpen]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="navigation" aria-label="Navegação principal">
      <div className={`${styles.container} container`}>

        {/* Logo / Nome */}
        <a href="#inicio" className={styles.logo} onClick={e => handleLinkClick(e, '#inicio')}>
          <span className={styles.logoText}>Lucas</span>
          <span className={styles.logoDot}>.dev</span>
        </a>

        {/* Links de navegação — desktop */}
        <ul className={styles.navLinks} role="list">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${styles.navLink} ${activeSection === link.href.replace('#', '') ? styles.active : ''}`}
                onClick={e => handleLinkClick(e, link.href)}
              >
                {link.label}
                <span className={styles.linkUnderline} />
              </a>
            </li>
          ))}
        </ul>

        {/* Botão CTA — desktop */}
        <a
          href="https://wa.me/5581989728514"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          Contratar
        </a>

        {/* Botão hambúrguer — mobile */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Menu mobile — overlay */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`} role="dialog" aria-modal="true">
        <ul role="list">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href} style={{ animationDelay: `${i * 0.08}s` }}>
              <a
                href={link.href}
                className={`${styles.mobileLink} ${activeSection === link.href.replace('#', '') ? styles.active : ''}`}
                onClick={e => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Botão CTA dentro do menu mobile */}
          <li style={{ animationDelay: `${NAV_LINKS.length * 0.08}s` }}>
            <a
              href="https://wa.me/5581989728514"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileCta}
            >
              Contratar
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
