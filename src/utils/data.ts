/* =====================================================
   DADOS DO PORTFÓLIO — Lucas Renato (v2.0)
   Centraliza todas as informações estáticas do site.
   ===================================================== */
 
import { Project, Skill, Service, ContactInfo } from '../types';
 
export const contactInfo: ContactInfo = {
  whatsapp: '+5581989728514',
  instagram: 'https://instagram.com/lcs1ilva',
  github: 'https://github.com/lucasrenatolu5-spec',
};
 
export const heroRoles: string[] = [
  'Desenvolvedor Front-End',
  'Criador de Landing Pages',
  'Sites que convertem',
  'Especialista em React',
];
 
export const skills: Skill[] = [
  { name: 'React',       icon: '⚛️',  level: 90 },
  { name: 'TypeScript',  icon: '🔷',  level: 82 },
  { name: 'JavaScript',  icon: '🟡',  level: 92 },
  { name: 'HTML5',       icon: '🧱',  level: 95 },
  { name: 'CSS3',        icon: '🎨',  level: 90 },
  { name: 'Git',         icon: '🔀',  level: 78 },
];
 
export const projects: Project[] = [
  {
    id: 1,
    title: 'Dental Clinic',
    description: 'Clínica sem presença digital perdia pacientes para concorrentes online. Desenvolvi site institucional completo com seções de serviços, equipe e agendamento — resultado: mais contatos qualificados direto pelo site.',
    url: 'https://deentalclinic.vercel.app/',
    tags: ['React', 'CSS Modules', 'TypeScript'],
    category: 'Institucional',
  },
  {
    id: 2,
    title: 'Project Advogado',
    description: 'Escritório de advocacia precisava transmitir credibilidade e profissionalismo online. Criei site sóbrio e direto com apresentação dos serviços jurídicos e CTA claro para captação de clientes.',
    url: 'https://projectadvogado.vercel.app/',
    tags: ['React', 'CSS', 'Responsivo'],
    category: 'Institucional',
  },
  {
    id: 3,
    title: 'Daju Modas',
    description: 'Loja física sem vendas online perdia clientes para o digital. Criei vitrine virtual com catálogo de produtos e botão de compra direto via WhatsApp — facilitando vendas pelo celular.',
    url: 'https://dajumodass.vercel.app/',
    tags: ['React', 'CSS', 'Responsivo'],
    category: 'E-commerce',
  },
  {
    id: 4,
    title: 'Catálogo Lash',
    description: 'Profissional de cílios dependia só do Instagram para captar clientes. Desenvolvi catálogo digital elegante com galeria de serviços e agendamento — gerando mais clientes com presença própria.',
    url: 'https://catalogolash.vercel.app/',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Landing Page',
  },
];
 
export const services: Service[] = [
  
  {
    id: 1,
    icon: '🚀',
    title: 'Landing Pages',
    description: 'Páginas de alta conversão que transformam visitantes em clientes. Foco total em resultado.',
    features: [
      'Design exclusivo e personalizado',
      'Totalmente responsivo',
      'Otimizado para velocidade e SEO',
      'Integração com WhatsApp',
    ],
  },
  {
    id: 2,
    icon: '🌐',
    title: 'Sites Institucionais',
    description: 'Sites completos que transmitem profissionalismo e credibilidade para qualquer negócio.',
    features: [
      'Múltiplas páginas e seções',
      'Identidade visual coerente',
      'Formulário de contato funcional',
      'Deploy e hospedagem configurados',
    ],
  },
  {
    id: 3,
    icon: '🤝',
    title: 'Desenvolvimento White-label',
    description: 'Desenvolvo projetos com a sua marca, nos bastidores. Entrego no prazo, sem complicação.',
    features: [
      'Sigilo total do projeto',
      'Comunicação direta e ágil',
      'Código limpo e documentado',
      'Entrega no prazo combinado',
    ],
  },
  {
    id: 4,
    icon: '⚡',
    title: 'Manutenção & Performance',
    description: 'Otimização e atualização de sites existentes para melhor velocidade, design e conversão.',
    features: [
      'Diagnóstico completo do site',
      'Melhoria de velocidade',
      'Atualização de layout e conteúdo',
      'Correção de bugs e responsividade',
    ],
  },
];
 
export const diferenciais = [
  { icon: '⚡', title: 'Entrega rápida',        desc: 'Projetos entregues no prazo combinado, sempre.' },
  { icon: '💬', title: 'Comunicação clara',      desc: 'Sem enrolação. Você sabe o que está acontecendo em cada etapa.' },
  { icon: '🧹', title: 'Código organizado',      desc: 'Código limpo, comentado e fácil de manter.' },
  { icon: '📱', title: 'Responsivo sempre',       desc: 'Todo projeto funciona perfeitamente em qualquer dispositivo.' },
  { icon: '🤝', title: 'Fácil de trabalhar',     desc: 'Parceiro confiável para agências e equipes de marketing.' },
];
 