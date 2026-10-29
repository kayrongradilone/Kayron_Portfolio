import { person, skillIcons } from "./shared"
import type { Content } from "./types"

const role = "Desenvolvedor Front-End / Full Stack"

export const pt: Content = {
  locale: "pt",
  htmlLang: "pt-BR",
  intlLocale: "pt-BR",
  role,
  location: "Florianópolis, SC · Brasil",
  meta: {
    title: `${person.name} · ${role}`,
    description:
      "Portfólio de Kayron Gradilone, desenvolvedor Front-End / Full Stack com 4+ anos de experiência em React, Next.js e TypeScript: e-commerce multi-tenant, fluxos de pagamento e dashboards de dados.",
    keywords: [
      "Kayron Gradilone",
      "desenvolvedor front-end",
      "desenvolvedor full stack",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Florianópolis",
      "portfólio",
    ],
    ogHeadline: "Interfaces que viram produto, do checkout ao dashboard.",
  },
  nav: [
    { id: "home", label: "Início", short: "Início" },
    { id: "about", label: "Sobre", short: "Sobre" },
    { id: "projects", label: "Projetos", short: "Projetos" },
    { id: "experience", label: "Experiência", short: "Exp." },
    { id: "stack", label: "Stack", short: "Stack" },
    { id: "contact", label: "Contato", short: "Contato" },
  ],
  ui: {
    skipToContent: "Pular para o conteúdo",
    portfolioTag: "Portfólio — 2026",
    downloadCv: "Baixar CV",
    viewProjects: "Ver projetos",
    letsTalk: "Vamos conversar",
    backToTop: "Voltar ao topo",
    builtWith: "Desenhado e construído por mim com Next.js, Tailwind CSS e shadcn/ui.",
    themeToggle: "Alternar tema",
    themeLight: "Ativar tema claro",
    themeDark: "Ativar tema escuro",
    languageLabel: "Idioma",
    socialLabel: "Redes sociais",
    workLabel: "Trabalho",
    educationLabel: "Formação",
    viewOnline: "Ver online",
    code: "Código",
    moreOnGithub: "Ver mais no GitHub",
    stackPill: "Stack",
  },
  hero: {
    headline: [
      { text: "Interfaces que viram" },
      { text: "produto,", accent: true },
      { text: "do código ao deploy." },
    ],
    summary:
      "4+ anos construindo aplicações web com React, Next.js e TypeScript: plataformas de e-commerce multi-tenant, fluxos de pagamento e dashboards de dados para os setores de energia e agritech. Confortável no back-end com Node.js e PostgreSQL, com foco em componentes reutilizáveis, performance e código limpo.",
    stats: [
      { value: "4+", label: "anos de experiência" },
      { value: "3", label: "setores: e-commerce, energia e agritech" },
      { value: "EN", label: "inglês fluente, times remotos" },
    ],
  },
  about: {
    index: "01",
    label: "Sobre",
    title: "Quem está por trás",
    accent: "do código",
    manifestoLabel: "Manifesto",
    manifesto:
      "Construo interfaces que carregam rápido, funcionam em qualquer tela e são agradáveis de usar, do componente ao deploy.",
    paragraphs: [
      "Nos últimos anos trabalhei em e-commerce multi-tenant (painel administrativo e loja white-label com checkout, PIX, boleto e cartão), em fluxos visuais com React Flow para o setor de energia e em plataformas de análise de dados para o agro. Também me viro bem no back-end com Node.js e PostgreSQL.",
      "Natural de Santos (SP), moro em Florianópolis (SC). Trabalho remoto com times multidisciplinares de produto, design e QA, e gosto de entregar com código limpo, componentes reutilizáveis e atenção a performance.",
    ],
    clockLabel: "Agora em Florianópolis",
    clockNote: "GMT-3 · remoto, híbrido ou presencial em SC",
    contactLabel: "Contato",
    contactText: "Tem um projeto ou uma vaga em mente?",
    contactCta: "Fale comigo",
    orbitLabel: "Stack principal",
    stats: [
      { value: "4+", label: "anos construindo produtos web com React e Next.js." },
      { value: "3", label: "setores atendidos: e-commerce, energia e agritech." },
    ],
    education: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    educationNote: "Santos (SP) → Florianópolis (SC)",
    languages: "Português nativo · Inglês fluente · Espanhol básico",
  },
  projects: {
    index: "02",
    label: "Projetos",
    title: "Trabalhos",
    accent: "selecionados",
    description:
      "Produtos em produção que ajudei a construir, mais projetos autorais. O que fiz em cada etapa está detalhado na experiência.",
    items: [
      {
        slug: "portal-palhoca",
        title: "Portal Palhoça",
        description:
          "Portal de notícias e guia comercial de Palhoça, desenvolvido na Si3 Sistemas e replicado para os portais Josefense, Biguaçu e Florianópolis: editorias, busca, guia de comércio e espaço para anunciantes. 100% em produção.",
        featured: true,
        ...person.projects.portalPalhoca,
        tags: [...person.projects.portalPalhoca.tags],
        year: "Em produção",
      },
      {
        slug: "horus",
        title: "Horus · Equatorial Energia",
        description:
          "Plataforma de monitoramento inteligente de operações construída na Soul Technology para a Equatorial Energia: produtividade, planejamento de atividades e gestão em tempo real, com fluxos visuais em React Flow e dashboards.",
        ...person.projects.horus,
        tags: [...person.projects.horus.tags],
      },
      {
        slug: "jsilveira-next",
        title: "Centro Executivo Silveira I",
        description:
          "Site e painel administrativo para o controle de uma propriedade familiar: apresentação do centro executivo, diferenciais, galeria de fotos e contato, com área de login para a administração. Projeto pessoal em produção.",
        ...person.projects.jsilveiraNext,
        tags: [...person.projects.jsilveiraNext.tags],
        year: "Projeto pessoal",
      },
      {
        slug: "jsilveira",
        title: "JSilveira Administradora de Imóveis",
        description:
          "Trabalho de conclusão de semestre da faculdade: sistema web para gestão de imóveis com login, cadastro e listagem de propriedades, validação de formulários e consumo de API REST simulada.",
        ...person.projects.jsilveira,
        tags: [...person.projects.jsilveira.tags],
      },
    ],
  },
  experience: {
    index: "03",
    label: "Experiência",
    title: "Trajetória",
    accent: "até aqui",
    manifesto: [
      { text: "De estagiário em agritech a responsável por front-ends de e-commerce." },
      { text: "Cada etapa", accent: true },
      { text: "me ensinou a entregar produto de verdade." },
    ],
    note:
      "Quatro times, três setores e muito código em produção. Abaixo, o que fiz em cada lugar.",
    items: [
      {
        type: "work",
        title: "Desenvolvedor Front-End",
        organization: "Si3 Sistemas",
        period: "Jan 2026 · atual",
        location: "Meio período · Remoto",
        summary:
          "Responsável pelos dois front-ends da plataforma de e-commerce multi-tenant: o painel administrativo da loja e a vitrine white-label, entregando telas no mesmo ciclo de release das mudanças de API.",
        highlights: [
          "Módulos de CRM, logística (fulfillment em lote, rastreamento, romaneios) e pagamentos (configuração de gateway, estornos, chargebacks, exportação CSV).",
          "Checkout com cotação de frete no servidor e pagamentos online (PIX, boleto e cartão tokenizado via SDK do Mercado Pago), com polling de status, retentativas e idempotência.",
          "Portal Palhoça e os portais irmãos Josefense, Biguaçu e Florianópolis, 100% em produção.",
        ],
        tags: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "react-hook-form", "Zod"],
      },
      {
        type: "work",
        title: "Desenvolvedor Front-End Pleno",
        organization: "Soul Technology",
        period: "Nov 2025 · Out 2026",
        location: "Tempo integral · Remoto",
        summary:
          "Interfaces modernas e de alta performance para aplicações do setor de energia, transformando requisitos complexos em fluxos visuais intuitivos com React Flow.",
        highlights: [
          "Bibliotecas de componentes reutilizáveis e layouts responsivos e acessíveis.",
          "Otimização de performance e SEO em Next.js.",
        ],
        tags: ["Next.js", "React", "TypeScript", "React Flow", "Tailwind CSS"],
      },
      {
        type: "work",
        title: "Desenvolvedor Full Stack",
        organization: "Plathanus Software & Design",
        period: "Mar 2025 · Nov 2025",
        location: "Tempo integral",
        summary:
          "Aplicações web de ponta a ponta: de interfaces responsivas a APIs, regras de negócio e integração com PostgreSQL.",
        highlights: [
          "Deploy e monitoramento em cloud.",
          "Trabalho próximo aos times de produto, design e QA.",
        ],
        tags: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
      },
      {
        type: "work",
        title: "Estagiário Front-End",
        organization: "IGera Agricultura 4.0",
        period: "Jan 2023 · Jan 2024",
        summary:
          "Plataforma de análise de dados para fazendas parceiras, com gráficos e integrações de API.",
        tags: ["Next.js", "JavaScript", "Material UI", "Axios", "Google Charts"],
      },
      {
        type: "education",
        title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        organization: "Graduação concluída",
        period: "",
        summary:
          "Fundamentos de engenharia de software, estruturas de dados, bancos de dados e desenvolvimento web.",
      },
    ],
  },
  skills: {
    index: "04",
    label: "Stack",
    title: "Ferramentas",
    accent: "do dia a dia",
    description:
      "Do protótipo ao deploy. As tecnologias em destaque são as que uso com mais profundidade.",
    groups: [
      {
        title: "Front-end",
        description: "Base sólida para construir interfaces modernas.",
        skills: [...skillIcons.frontend],
      },
      {
        title: "UI & Estado",
        description: "Design systems, formulários, dados e fluxos visuais.",
        skills: [...skillIcons.ui],
      },
      {
        title: "Back-end & Dados",
        description: "Confortável do outro lado da API quando o produto precisa.",
        skills: [...skillIcons.backend],
      },
      {
        title: "Ferramentas",
        description: "Qualidade, versionamento e deploy em cloud.",
        skills: [...skillIcons.tools],
      },
    ],
  },
  contact: {
    index: "05",
    label: "Contato",
    title: "Vamos",
    accent: "conversar?",
    description:
      "Aberto a vagas de Front-End ou Full Stack, projetos freelance e boas conversas sobre produto e tecnologia. Respondo em até 24 horas.",
    otherChannels: "Outros canais",
    formTitle: "Ou envie uma mensagem",
    formNote: "Preencha o formulário e eu retorno por e-mail.",
    form: {
      name: "Nome",
      namePlaceholder: "Seu nome",
      email: "E-mail",
      emailPlaceholder: "voce@empresa.com",
      subject: "Assunto",
      subjectPlaceholder: "Vaga, projeto ou dúvida",
      message: "Mensagem",
      messagePlaceholder: "Conte um pouco sobre a oportunidade...",
      send: "Enviar mensagem",
      sending: "Enviando...",
      success: "Mensagem enviada!",
      successDescription: "Obrigado pelo contato. Respondo em breve.",
      error: "Não foi possível enviar.",
      errorDescription: "Tente novamente ou me chame no WhatsApp.",
      privacy: "Seus dados são usados apenas para responder à sua mensagem.",
    },
  },
  notFound: {
    title: "Página não encontrada",
    description: "O endereço que você acessou não existe ou foi movido.",
    back: "Voltar ao início",
  },
}
