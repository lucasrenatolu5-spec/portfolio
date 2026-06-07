/* =====================================================
   COMPONENTE: Hero
   Seção inicial com animação de partículas flutuantes,
   efeito typewriter e apresentação impactante.
   ===================================================== */

import { useEffect, useRef } from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';
import { heroRoles, contactInfo } from '../../utils/data';
import lucasHero from '../../assets/images/lucas-hero.jpeg';
import styles from './Hero.module.css';

export function Hero() {
  const { displayText } = useTypewriter({
    words: heroRoles,
    typingSpeed: 90,
    deletingSpeed: 50,
    pauseDuration: 2200,
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const PARTICLE_COUNT = 60;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      opacityDelta: number;
    }

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      opacityDelta: (Math.random() - 0.5) * 0.005,
    }));

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.opacity = Math.max(0.05, Math.min(0.6, p.opacity + p.opacityDelta));

        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${p.opacity})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dist = Math.hypot(p.x - q.x, p.y - q.y);

          if (dist < 120) {
            const lineOpacity = (1 - dist / 120) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <div className={styles.atmosphere} aria-hidden="true" />

      <div className={`${styles.content} container`}>
        <div className={styles.textSide}>

          <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            Disponível para projetos
          </div>

          <h1 className={styles.title}>
            Olá, sou{' '}
            <span className={styles.name}>Lucas Renato</span>
          </h1>

          <p className={styles.role}>
            <span className={styles.roleText}>{displayText}</span>
            <span className={styles.cursor} aria-hidden="true">|</span>
          </p>

          <p className={styles.description}>
            Desenvolvo sites e landing pages profissionais com foco em
            resultados reais — entrega rápida, código limpo e design que
            converte visitantes em clientes.
          </p>

          <div className={styles.actions}>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <span>Falar no WhatsApp</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="#projetos"
              className={styles.btnSecondary}
              onClick={e => {
                e.preventDefault();
                document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver Projetos
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>⚡</span>
              <span className={styles.statLabel}>Entrega rápida</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Satisfação garantida</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>Tecnologias dominadas</span>
            </div>
          </div>
        </div>

        <div className={styles.imageSide}>
          <div className={styles.imageRing} aria-hidden="true">
            <div className={styles.ringOuter} />
            <div className={styles.ringInner} />
          </div>

          <div className={styles.imageWrapper}>
            <img
              src={lucasHero}
              alt="Lucas Renato — Desenvolvedor Front-End"
              className={styles.profileImage}
              loading="eager"
            />
            <div className={styles.imageOverlay} aria-hidden="true" />
          </div>

          <div className={styles.floatingCard} aria-label="Tecnologia principal: React">
            <span className={styles.floatingIcon}>⚛️</span>
            <div>
              <p className={styles.floatingTitle}>React Developer</p>
              <p className={styles.floatingSub}>TypeScript + CSS Modules</p>
            </div>
          </div>
        </div>
      </div>

      <button
        className={styles.scrollIndicator}
        onClick={scrollToAbout}
        aria-label="Rolar para a próxima seção"
      >
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span>Rolar</span>
      </button>
    </section>
  );
}
