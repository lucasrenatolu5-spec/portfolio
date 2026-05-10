/* =====================================================
   COMPONENTE: Projects
   Seção de projetos com cards linkáveis e overlay de preview.
   ===================================================== */

import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { projects } from '../../utils/data';
import styles from './Projects.module.css';

export function Projects() {
  const headerRef   = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const projectsRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="projetos" className={styles.projects}>
      <div className={`${styles.inner} container`}>

        {/* --- Cabeçalho --- */}
        <div ref={headerRef} className={`${styles.header} animate-on-scroll`}>
          <span className={styles.label}>Portfólio</span>
          <h2 className={styles.title}>
            Projetos{' '}
            <span className={styles.highlight}>que já entreguei</span>
          </h2>
          <p className={styles.subtitle}>
            Sites reais para clientes reais — cada projeto pensado para
            converter visitantes em clientes.
          </p>
        </div>

        {/* --- Grid de projetos --- */}
        <div ref={projectsRef} className={`${styles.grid} animate-on-scroll`}>
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              style={{ animationDelay: `${index * 0.15}s` }}
              aria-label={`Ver projeto: ${project.title}`}
            >
              {/* Preview via iframe (thumbnail visual do site real) */}
              <div className={styles.preview}>
                <div className={styles.browserBar} aria-hidden="true">
                  <div className={styles.browserDots}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className={styles.browserUrl}>
                    {project.url.replace('https://', '')}
                  </div>
                </div>

                {/* Iframe com o site real */}
                <div className={styles.iframeWrapper}>
                  <iframe
                    src={project.url}
                    title={`Preview: ${project.title}`}
                    className={styles.iframe}
                    loading="lazy"
                    tabIndex={-1}
                    aria-hidden="true"
                  />
                  {/* Overlay — bloqueia interação com o iframe e exibe o link */}
                  <div className={styles.iframeOverlay}>
                    <div className={styles.visitBtn}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Visitar site
                    </div>
                  </div>
                </div>
              </div>

              {/* Informações do projeto */}
              <div className={styles.info}>
                {/* Badge de categoria */}
                <span className={styles.category}>{project.category}</span>

                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>

                {/* Tags de tecnologia */}
                <div className={styles.tags}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                {/* Link de acesso */}
                <div className={styles.link}>
                  <span>Ver projeto</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Efeito de brilho lateral */}
              <div className={styles.cardGlow} aria-hidden="true" />
            </a>
          ))}
        </div>

        {/* --- Rodapé da seção com link para GitHub --- */}
        <div className={styles.footer}>
          <p>Mais projetos disponíveis no meu GitHub</p>
          <a
            href="https://github.com/lucasrenatolu5-spec"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Ver repositórios
          </a>
        </div>
      </div>
    </section>
  );
}
