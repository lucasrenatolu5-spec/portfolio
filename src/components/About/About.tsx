/* =====================================================
   COMPONENTE: About
   Seção "Sobre mim" com foto, bio e barra de habilidades.
   ===================================================== */

import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { skills } from '../../utils/data';
import styles from './About.module.css';

export function About() {
  /* Refs para animar os elementos ao entrar no viewport */
  const imageRef  = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const contentRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="sobre" className={styles.about}>
      <div className={`${styles.container} container`}>
        {/* --- Lado do conteúdo --- */}
        <div
          ref={contentRef}
          className={`${styles.content} animate-on-scroll`}
        >
          {/* Label da seção */}
          <span className={styles.sectionLabel}>Sobre mim</span>

          <h2 className={styles.title}>
            Desenvolvedor apaixonado por{' '}
            <span className={styles.highlight}>criar experiências</span>{' '}
            que fazem diferença
          </h2>

          <p className={styles.bio}>
            Sou Lucas Renato, desenvolvedor Front-End focado em entregar
            interfaces modernas, rápidas e que realmente convertem. Trabalho
            com React, TypeScript e as melhores práticas do mercado para
            transformar a visão do cliente em produto digital de qualidade.
          </p>

          <p className={styles.bio}>
            Cada projeto é tratado com atenção total — do design à performance,
            sempre pensando na experiência do usuário final e nos resultados
            do negócio.
          </p>

          {/* --- Habilidades técnicas --- */}
          <div className={styles.skills}>
            <h3 className={styles.skillsTitle}>Principais tecnologias</h3>

            <div className={styles.skillList}>
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={styles.skillItem}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Nome e ícone */}
                  <div className={styles.skillHeader}>
                    <span className={styles.skillIcon} aria-hidden="true">{skill.icon}</span>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel}>{skill.level}%</span>
                  </div>

                  {/* Barra de progresso */}
                  <div className={styles.skillBar} role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100} aria-label={`${skill.name}: ${skill.level}%`}>
                    <div
                      className={styles.skillFill}
                      style={{ '--target-width': `${skill.level}%` } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botão GitHub */}
          <a
            href="https://github.com/lucasrenatolu5-spec"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubBtn}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Ver GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
