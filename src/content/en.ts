import { person, skillIcons } from "./shared"
import type { Content } from "./types"

const role = "Front-End / Full Stack Developer"

export const en: Content = {
  locale: "en",
  htmlLang: "en",
  intlLocale: "en-US",
  role,
  location: "Florianópolis, SC · Brazil",
  meta: {
    title: `${person.name} · ${role}`,
    description:
      "Portfolio of Kayron Gradilone, Front-End / Full Stack Developer with 4+ years of experience in React, Next.js and TypeScript: multi-tenant e-commerce, payment flows and data-heavy dashboards.",
    keywords: [
      "Kayron Gradilone",
      "front-end developer",
      "full stack developer",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Brazil",
      "portfolio",
    ],
    ogHeadline: "Interfaces that become product, from checkout to dashboard.",
  },
  nav: [
    { id: "home", label: "Home", short: "Home" },
    { id: "about", label: "About", short: "About" },
    { id: "projects", label: "Projects", short: "Work" },
    { id: "experience", label: "Experience", short: "Exp." },
    { id: "stack", label: "Stack", short: "Stack" },
    { id: "contact", label: "Contact", short: "Contact" },
  ],
  ui: {
    skipToContent: "Skip to content",
    portfolioTag: "Portfolio — 2026",
    downloadCv: "Download CV",
    viewProjects: "View projects",
    letsTalk: "Let's talk",
    backToTop: "Back to top",
    builtWith: "Designed and built by me with Next.js, Tailwind CSS and shadcn/ui.",
    themeToggle: "Toggle theme",
    themeLight: "Switch to light theme",
    themeDark: "Switch to dark theme",
    languageLabel: "Language",
    socialLabel: "Social links",
    workLabel: "Work",
    educationLabel: "Education",
    viewOnline: "Live site",
    code: "Code",
    moreOnGithub: "More on GitHub",
    stackPill: "Stack",
  },
  hero: {
    headline: [
      { text: "Interfaces that become" },
      { text: "product,", accent: true },
      { text: "from checkout to dashboard." },
    ],
    summary:
      "Front-End Developer with 4+ years of experience building web applications with React, Next.js and TypeScript, including multi-tenant e-commerce platforms, payment flows and data-heavy dashboards for the energy and agritech sectors. Comfortable across the stack with Node.js and PostgreSQL, and focused on reusable components, performance and clean, maintainable code.",
    stats: [
      { value: "4+", label: "years of experience" },
      { value: "3", label: "sectors: e-commerce, energy and agritech" },
      { value: "EN", label: "fluent English, remote teams" },
    ],
  },
  about: {
    index: "01",
    label: "About",
    title: "The person behind",
    accent: "the code",
    manifestoLabel: "Manifesto",
    manifesto:
      "I build interfaces that load fast, work on any screen and feel good to use, from the component to the deploy.",
    paragraphs: [
      "In the last few years I worked on multi-tenant e-commerce (store admin panel and white-label storefront with checkout, PIX, boleto and card payments), on visual workflows with React Flow for the energy sector and on data analytics platforms for agriculture. I am also comfortable on the back-end with Node.js and PostgreSQL.",
      "Born in Santos (SP), based in Florianópolis (SC), Brazil. I work remotely with cross-functional product, design and QA teams, and I care about clean code, reusable components and performance.",
    ],
    clockLabel: "Right now in Florianópolis",
    clockNote: "GMT-3 · remote, hybrid or on-site in SC",
    contactLabel: "Contact",
    contactText: "Have a project or a role in mind?",
    contactCta: "Get in touch",
    orbitLabel: "Core stack",
    stats: [
      { value: "4+", label: "years building web products with React and Next.js." },
      { value: "3", label: "sectors served: e-commerce, energy and agritech." },
    ],
    education: "Degree in Systems Analysis and Development",
    educationNote: "Santos (SP) → Florianópolis (SC)",
    languages: "Portuguese (native) · English (fluent) · Spanish (basic)",
  },
  projects: {
    index: "02",
    label: "Projects",
    title: "Selected",
    accent: "work",
    description:
      "Products in production I helped build, plus personal projects. What I did at each step is detailed in the experience section.",
    items: [
      {
        slug: "portal-palhoca",
        title: "Portal Palhoça",
        description:
          "News portal and business directory for the city of Palhoça, built at Si3 Sistemas and replicated for the Josefense, Biguaçu and Florianópolis portals: sections, search, business listings and ad space. 100% in production.",
        featured: true,
        ...person.projects.portalPalhoca,
        tags: [...person.projects.portalPalhoca.tags],
        year: "In production",
      },
      {
        slug: "horus",
        title: "Horus · Equatorial Energia",
        description:
          "Intelligent operations monitoring platform built at Soul Technology for Equatorial Energia: productivity, activity planning and real-time operations management, with React Flow visual workflows and dashboards.",
        ...person.projects.horus,
        tags: [...person.projects.horus.tags],
      },
      {
        slug: "jsilveira-next",
        title: "Centro Executivo Silveira I",
        description:
          "Website and admin panel for managing a family-owned property: office center presentation, highlights, photo gallery and contact, with a login area for administration. Personal project in production.",
        ...person.projects.jsilveiraNext,
        tags: [...person.projects.jsilveiraNext.tags],
        year: "Personal project",
      },
      {
        slug: "jsilveira",
        title: "JSilveira Property Management",
        description:
          "End-of-semester college project: web system for property management with login, property registration and listing, form validation and a mocked REST API.",
        ...person.projects.jsilveira,
        tags: [...person.projects.jsilveira.tags],
      },
    ],
  },
  experience: {
    index: "03",
    label: "Experience",
    title: "The journey",
    accent: "so far",
    manifesto: [
      { text: "From agritech intern to owning the front-ends of an e-commerce platform." },
      { text: "Every step", accent: true },
      { text: "taught me how to ship real product." },
    ],
    note: "Four teams, three sectors and a lot of code in production. Here is what I did in each place.",
    items: [
      {
        type: "work",
        title: "Front-End Developer",
        organization: "Si3 Sistemas",
        period: "Jan 2026 · present",
        location: "Part-time · Remote",
        summary:
          "Own both front-ends of the multi-tenant e-commerce platform: the store admin panel and the white-label storefront, shipping screens in the same release cycle as backend API changes.",
        highlights: [
          "Built CRM, logistics (batch fulfillment, tracking, packing slips) and payment modules (gateway setup, refunds, chargebacks, CSV export).",
          "Implemented checkout with server-side shipping quotes and online payments (PIX, boleto, tokenized credit card via Mercado Pago SDK) with status polling, retries and idempotency.",
          "Portal Palhoça and its sister portals Josefense, Biguaçu and Florianópolis, 100% in production.",
        ],
        tags: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "react-hook-form", "Zod"],
      },
      {
        type: "work",
        title: "Mid-Level Front-End Developer",
        organization: "Soul Technology",
        period: "Nov 2025 · Oct 2026",
        location: "Full-time · Remote",
        summary:
          "Modern, high-performance interfaces for energy-sector applications, turning complex requirements into intuitive visual workflows with React Flow.",
        highlights: [
          "Reusable component libraries and responsive, accessible layouts.",
          "Performance and SEO optimization in Next.js.",
        ],
        tags: ["Next.js", "React", "TypeScript", "React Flow", "Tailwind CSS"],
      },
      {
        type: "work",
        title: "Full Stack Developer",
        organization: "Plathanus Software & Design",
        period: "Mar 2025 · Nov 2025",
        location: "Full-time",
        summary:
          "End-to-end web applications, from responsive UIs to APIs, business logic and PostgreSQL integration.",
        highlights: [
          "Cloud deployment and monitoring.",
          "Close collaboration with product, design and QA teams.",
        ],
        tags: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
      },
      {
        type: "work",
        title: "Front-End Developer Intern",
        organization: "IGera Agricultura 4.0",
        period: "Jan 2023 · Jan 2024",
        summary: "Data analytics platform for partner farms, with charts and API integrations.",
        tags: ["Next.js", "JavaScript", "Material UI", "Axios", "Google Charts"],
      },
      {
        type: "education",
        title: "Degree in Systems Analysis and Development",
        organization: "Completed",
        period: "",
        summary:
          "Software engineering fundamentals, data structures, databases and web development.",
      },
    ],
  },
  skills: {
    index: "04",
    label: "Stack",
    title: "Everyday",
    accent: "toolkit",
    description:
      "From prototype to deploy. Highlighted technologies are the ones I use with the most depth.",
    groups: [
      {
        title: "Front-end",
        description: "A solid base for building modern interfaces.",
        skills: [...skillIcons.frontend],
      },
      {
        title: "UI & State",
        description: "Design systems, forms, data and visual workflows.",
        skills: [...skillIcons.ui],
      },
      {
        title: "Back-end & Data",
        description: "Comfortable on the other side of the API when the product needs it.",
        skills: [...skillIcons.backend],
      },
      {
        title: "Tooling",
        description: "Quality, versioning and cloud deployment.",
        skills: [...skillIcons.tools],
      },
    ],
  },
  contact: {
    index: "05",
    label: "Contact",
    title: "Let's",
    accent: "talk?",
    description:
      "Open to Front-End or Full Stack roles, freelance projects and good conversations about product and technology. I reply within 24 hours.",
    otherChannels: "Other channels",
    formTitle: "Or send a message",
    formNote: "Fill in the form and I will get back to you by e-mail.",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "E-mail",
      emailPlaceholder: "you@company.com",
      subject: "Subject",
      subjectPlaceholder: "Job, project or question",
      message: "Message",
      messagePlaceholder: "Tell me a bit about the opportunity...",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent!",
      successDescription: "Thanks for reaching out. I will reply soon.",
      error: "Could not send.",
      errorDescription: "Please try again or message me on WhatsApp.",
      privacy: "Your data is only used to reply to your message.",
    },
  },
  notFound: {
    title: "Page not found",
    description: "The address you accessed does not exist or has moved.",
    back: "Back to home",
  },
}
