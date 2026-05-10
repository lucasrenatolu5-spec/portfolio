/* =====================================================
   COMPONENTE: Services
   Seção de serviços dividida em dois grupos:
   criação de sites e manutenção/melhorias.
   ===================================================== */

import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { services } from '../../utils/data';
import styles from './Services.module.css';

export function Services() {
  const headerRef  = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const group1Ref  = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const group2Ref  = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  /* Divide os serviços em dois grupos:
     Grupo 1 — criação (landing pages, sites, catálogos)
     Grupo 2 — manutenção */
  const group1 = services.slice(0, 3);
  const group2 = services.slice(3);

  return (
    <section id="servicos" className={styles.services}>
      <div className={`${styles.inner} container`}>

        {/* --- Cabeçalho da seção --- */}
        <div ref={headerRef} className={`${styles.header} animate-on-scroll`}>
          <span className={styles.label}>O que eu faço</span>
          <h2 className={styles.title}>
            Serviços que entregam{' '}
            <span className={styles.highlight}>resultados reais</span>
          </h2>
          <p className={styles.subtitle}>
            Do conceito ao deploy, cuido de cada detalhe para garantir
            que o seu projeto chegue no nível que o seu negócio merece.
          </p>
        </div>

        {/* ======================================================
            GRUPO 1 — Criação de sites
            ====================================================== */}
        <div ref={group1Ref} className={`${styles.group} animate-on-scroll`}>
          <h3 className={styles.groupTitle}>
            <span className={styles.groupIcon} aria-hidden="true">✦</span>
            Criação de Presença Digital
          </h3>

          <div className={styles.grid}>
            {group1.map((service, index) => (
              <article
                key={service.id}
                className={styles.card}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                {/* Ícone */}
                <div className={styles.cardIcon} aria-hidden="true">
                  {service.icon}
                </div>

                {/* Conteúdo */}
                <h4 className={styles.cardTitle}>{service.title}</h4>
                <p className={styles.cardDesc}>{service.description}</p>

                {/* Lista de funcionalidades */}
                <ul className={styles.featureList} role="list">
                  {service.features.map(feature => (
                    <li key={feature} className={styles.featureItem}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Efeito hover de brilho */}
                <div className={styles.cardGlow} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>

        {/* ======================================================
            GRUPO 2 — Manutenção e melhorias (destaque horizontal)
            ====================================================== */}
        <div ref={group2Ref} className={`${styles.group} animate-on-scroll`}>
          <h3 className={styles.groupTitle}>
            <span className={styles.groupIcon} aria-hidden="true">⚙</span>
            Suporte e Evolução
          </h3>

          <div className={styles.gridWide}>
            {group2.map(service => (
              <article key={service.id} className={`${styles.card} ${styles.cardWide}`}>
                <div className={styles.cardWideLeft}>
                  <div className={styles.cardIcon} aria-hidden="true">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className={styles.cardTitle}>{service.title}</h4>
                    <p className={styles.cardDesc}>{service.description}</p>
                  </div>
                </div>

                <ul className={styles.featureList} role="list">
                  {service.features.map(feature => (
                    <li key={feature} className={styles.featureItem}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className={styles.cardGlow} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>

        {/* --- CTA da seção --- */}
        <div className={styles.cta}>
          <p>Tem um projeto em mente? Vamos conversar.</p>
          <a
            href="https://wa.me/5581989728514"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Solicitar orçamento
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
