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
  'Especialista em React',
  'Criador de Landing Pages',
  'UI Developer',
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
    title: 'Daju Modas',
    description: 'E-commerce de moda feminina com catálogo de produtos, vitrine visual e contato direto via WhatsApp.',
    url: 'https://dajumodass.vercel.app/',
    tags: ['React', 'CSS', 'Responsivo'],
    category: 'E-commerce',
  },
  {
    id: 2,
    title: 'Catálogo Lash',
    description: 'Catálogo digital elegante para profissional de cílios, com galeria de serviços e agendamento.',
    url: 'https://catalogolash.vercel.app/',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Landing Page',
  },
  {
    id: 3,
    title: 'Dental Clinic',
    description: 'Site profissional para clínica odontológica com seções de serviços, equipe e agendamento online.',
    url: 'https://deentalclinic.vercel.app/',
    tags: ['React', 'CSS Modules', 'TypeScript'],
    category: 'Institucional',
  },
  {
    id: 4,
    title: 'Lumière Estética',
    description: 'Site elegante para clínica de estética e beleza, com apresentação de serviços e agendamento online.',
    url: 'https://lumiiere.vercel.app/',
    tags: ['React', 'CSS Modules', 'TypeScript'],
    category: 'Institucional',
  },
  {
  id: 5,
  title: 'Project Advogado',
  description: 'Site profissional para escritório de advocacia com apresentação de serviços jurídicos e contato direto.',
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
    description: 'Páginas de alta conversão com design moderno, focadas em capturar leads e vender produtos ou serviços.',
    features: [
      'Design exclusivo e personalizado',
      'Totalmente responsivo (mobile-first)',
      'Otimizado para velocidade e SEO',
      'Integração com WhatsApp e redes sociais',
    ],
  },
  {
    id: 2,
    icon: '🌐',
    title: 'Sites Institucionais',
    description: 'Sites completos que transmitem profissionalismo e credibilidade para empresas e profissionais autônomos.',
    features: [
      'Múltiplas páginas e seções',
      'Identidade visual coerente',
      'Formulário de contato funcional',
      'Hospedagem e deploy configurados',
    ],
  },
  {
    id: 3,
    icon: '🛍️',
    title: 'Catálogos Digitais',
    description: 'Portfólios e catálogos de produtos online, ideais para pequenos negócios e profissionais liberais.',
    features: [
      'Galeria de produtos/serviços',
      'Layout elegante e atrativo',
      'Fácil navegação e UX intuitiva',
      'Link direto para compra ou contato',
    ],
  },
  {
    id: 4,
    icon: '⚡',
    title: 'Manutenção & Melhorias',
    description: 'Atualização, correção de bugs e modernização de sites já existentes para melhor performance e design.',
    features: [
      'Diagnóstico completo do site',
      'Melhoria de velocidade e performance',
      'Atualização de conteúdo e layout',
      'Correção de erros e responsividade',
    ],
  },
];
