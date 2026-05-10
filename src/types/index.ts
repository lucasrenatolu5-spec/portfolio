/* =====================================================
   TIPOS GLOBAIS — Portfolio Lucas Renato
   ===================================================== */

/** Representa um projeto do portfólio */
export interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  tags: string[];
  category: string;
}

/** Representa uma habilidade técnica */
export interface Skill {
  name: string;
  icon: string;
  level: number; // 0–100
}

/** Representa um serviço oferecido */
export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

/** Dados de contato do desenvolvedor */
export interface ContactInfo {
  whatsapp: string;
  instagram: string;
  github: string;
  email?: string;
}
