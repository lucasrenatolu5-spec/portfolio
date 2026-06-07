/* =====================================================
   COMPONENTE: Diferenciais
   Seção curta destacando os pontos fortes do trabalho.
   ===================================================== */

import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { diferenciais } from '../../utils/data';
import styles from './Diferenciais.module.css';

export function Diferenciais() {
  const ref = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className={styles.section}>
      <div className={`${styles.inner} container`}>
        <div ref={ref} className={`${styles.grid} animate-on-scroll`}>
          {diferenciais.map((item, i) => (
            <div key={i} className={styles.card} style={{ animationDelay: `${i * 0.08}s` }}>
              <span className={styles.icon} aria-hidden="true">{item.icon}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}