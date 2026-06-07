/* =====================================================
   DADOS DO PORTFÓLIO — Lucas Renato
   Centraliza todas as informações estáticas do site.
   ===================================================== */

import { Project, Skill, Service, ContactInfo } from '../types';

/** Informações de contato do desenvolvedor */
export const contactInfo: ContactInfo = {
  whatsapp: '+5581989728514',
  instagram: 'https://instagram.com/lcs1ilva',
  github: 'https://github.com/lucasrenatolu5-spec',
};

/** Palavras alternadas no efeito de digitação do Hero */
export const heroRoles: string[] = [
  'Desenvolvedor Front-End',
  'Criador de Landing Pages',
  'Especialista em React',
  'Sites que convertem',
];

/** Habilidades técnicas com nível de proficiência */
export const skills: Skill[] = [
  { name: 'React',       icon: '⚛️',  level: 90 },
  { name: 'TypeScript',  icon: '🔷',  level: 82 },
  { name: 'JavaScript',  icon: '🟡',  level: 92 },
  { name: 'HTML5',       icon: '🧱',  level: 95 },
  { name: 'CSS3',        icon: '🎨',  level: 90 },
  { name: 'Git',         icon: '🔀',  level: 78 },
];

/** Projetos desenvolvidos */
export const projects: Project[] = [
  {
    id: 1,
    title: 'Dental Clinic',
    description: 'Clínica odontológica precisava de presença digital profissional. Desenvolvi site institucional com seções de serviços, equipe e agendamento — resultado: mais contatos via formulário.',
    url: 'https://dental-clinic-two-beryl.vercel.app/',
    tags: ['React', 'CSS Modules', 'TypeScript'],
    category: 'Institucional',
  },
  {
    id: 2,
    title: 'Daju Modas',
    description: 'Loja de moda feminina sem presença online. Criei vitrine digital com catálogo de produtos e contato direto via WhatsApp, facilitando vendas pelo celular.',
    url: 'https://projeto-daju-modas.vercel.app/',
    tags: ['React', 'CSS', 'Responsivo'],
    category: 'E-commerce',
  },
  {
    id: 3,
    title: 'Catálogo Lash',
    description: 'Profissional de cílios sem portfólio digital. Desenvolvi catálogo elegante com galeria de serviços e botão de agendamento, gerando mais clientes pelo Instagram.',
    url: 'https://catalogolash.vercel.app/',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Landing Page',
  },
  {
    id: 4,
    title: 'Project Advogado',
    description: 'Escritório de advocacia precisava transmitir credibilidade online. Site profissional com apresentação dos serviços jurídicos e contato direto com o cliente.',
    url: 'https://projectadvogado.vercel.app/',
    tags: ['React', 'CSS', 'Responsivo'],
    category: 'Institucional',
  },
];
/** Serviços oferecidos */
export const services: Service[] = [
  {
    id: 1,
    icon: '🚀',
    title: 'Landing Pages',
    description: 'Páginas de alta conversão que transformam visitantes em clientes. Design focado em resultado.',
    features: [
      'Design exclusivo e personalizado',
      'Totalmente responsivo',
      'Otimizado para velocidade',
      'Integração com WhatsApp',
    ],
  },
  {
    id: 2,
    icon: '🌐',
    title: 'Sites Institucionais',
    description: 'Sites completos que transmitem profissionalismo e geram credibilidade para o seu negócio.',
    features: [
      'Múltiplas páginas e seções',
      'Identidade visual coerente',
      'Formulário de contato',
      'Deploy configurado',
    ],
  },
  {
    id: 3,
    icon: '⚡',
    title: 'Desenvolvimento White-label',
    description: 'Desenvolvo projetos em segundo plano para você entregar com sua marca. Sem complicação.',
    features: [
      'Entrega no prazo combinado',
      'Comunicação direta e clara',
      'Código limpo e organizado',
      'Sigilo total do projeto',
    ],
  },
  {
    id: 4,
    icon: '🛠️',
    title: 'Manutenção & Performance',
    description: 'Atualização e otimização de sites existentes para melhor velocidade, design e resultados.',
    features: [
      'Diagnóstico completo',
      'Melhoria de performance',
      'Atualização de layout',
      'Correção de bugs',
    ],
  },
];