'use client';

import { useEffect, useRef, useState } from 'react';

import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
  FaArrowUp,
  FaPaperPlane,
} from 'react-icons/fa';

const whatsapp =
  'https://wa.me/5511965431342?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20D%2Fvox%20Drywall%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.';

const services = [
  {
    title: 'Drywall e acabamentos',
    text: 'Execução de drywall, revestimentos e acabamentos modernos com alto padrão de qualidade para ambientes residenciais, comerciais e corporativos.',
    image: '/assets/projetos/drywall-1.jpg',
  },

  {
    title: 'Forro modular e gesso',
    text: 'Instalação de forro modular, forro em gesso e soluções técnicas para obras comerciais, corporativas, industriais e galpões.',
    image: '/assets/projetos/galpao-12.jpg',
  },

  {
    title: 'Paredes e divisórias',
    text: 'Divisórias em drywall, paredes técnicas e estruturas para otimização de espaços com rapidez, organização e acabamento profissional.',
    image: '/assets/projetos/galpao-13.jpg',
  },

  {
    title: 'Sancas e iluminação',
    text: 'Projetos de sancas, rasgos de luz e iluminação embutida para ambientes sofisticados e modernos.',
    image: '/assets/projetos/ambiente-2.jpg',
  },

  {
    title: 'Reformas e modernizações',
    text: 'Transformação de ambientes residenciais e comerciais com planejamento, eficiência e acabamento premium.',
    image: '/assets/projetos/ambiente-1.jpg',
  },

  {
    title: 'Projetos e execução',
    text: 'Do planejamento à execução completa de obras pequenas, médias e grandes, com acompanhamento técnico e compromisso em cada etapa.',
    image: '/assets/projetos/galpao-1.jpg',
  },
];

const cities = [
  'São Paulo',
  'Guarulhos',
  'Osasco',
  'Barueri',
  'Santo André',
  'São Bernardo do Campo',
  'São Caetano do Sul',
  'Taboão da Serra',
  'Cotia',
  'Campinas',
  'Sorocaba',
  'Jundiaí',
  'Ribeirão Preto',
  'São José dos Campos',
  'Interior de São Paulo',
];

const gallery = Array.from(
  { length: 3 },
  (_, index) => `/assets/projetos/ambiente-${index + 1}.jpg`
);

const projects = [
  
  {
  title: 'Projeto corporativo com forro e acabamento premium',
  category: 'Comercial',
  size: 'Obra corporativa de alto padrão',
  location: 'São Paulo - SP',

  description:
    'Execução de forro em drywall, iluminação embutida, acabamentos premium e integração arquitetônica em um projeto corporativo moderno. O trabalho foi desenvolvido com foco em alinhamento técnico, acabamento refinado e valorização estética dos ambientes.',

  services: [
    'Forro em drywall',
    'Iluminação embutida',
    'Rebaixo em gesso',
    'Acabamento premium',
    'Projeto corporativo',
    'Execução técnica',
  ],

  highlights: [
    'Forro em drywall com acabamento premium',
    'Iluminação linear embutida',
    'Integração com arquitetura moderna',
    'Execução técnica de alto padrão',
    'Acabamento limpo e sofisticado',
  ],

  images: Array.from({ length: 3 }, (_, index) => ({
    label:
      index === 0
        ? 'Execução do forro'
        : index === 1
          ? 'Acabamento técnico'
          : index === 1
            ? 'Integração arquitetônica'
            : 'Projeto finalizado',

    src: `/assets/projetos/projeto-${index + 1}.jpg`,
  })),
},
    {
    title: 'Reforma residencial de alto padrão',
    category: 'Residencial',
    size: 'Projeto personalizado',
    location: 'São Paulo e região paulista',
    description:
      'Projeto residencial com foco em acabamento de alto padrão, utilizando soluções em gesso, sancas, iluminação, drywall e modernização de ambientes para entregar um resultado sofisticado e funcional.',
    services: ['Sancas', 'Iluminação', 'Drywall', 'Gesso', 'Alto padrão'],
    images: Array.from({ length: 14 }, (_, index) => ({
      label:
        index === 0
          ? 'Início da obra'
          : index === 13
            ? 'Projeto pronto'
            : `Etapa ${index + 1} da execução`,
      src: `/assets/projetos/obra-${index + 1}.jpg`,
    })),
  },
{
  title: 'Galpões e obras industriais',
  category: 'Industrial',
  size: 'Mais de 3.000 m²',
  location: 'São Paulo e região metropolitana',
  description:
    'Atendimento para galpões, áreas industriais e obras comerciais com instalação de forro, paredes, divisórias, steel frame e soluções completas em drywall para empresas e empreendimentos.',
  services: [
    'Forro modular',
    'Paredes em drywall',
    'Divisórias',
    'Steel frame',
    'Obras industriais',
  ],

  images: Array.from({ length: 14 }, (_, index) => ({
    label:
      index === 0
        ? 'Início da obra'
        : index === 13
          ? 'Projeto finalizado'
          : `Etapa ${index + 1} da execução`,

    src: `/assets/projetos/galpao-${index + 1}.jpg`,
  })),
},
];

function Logo() {
  return (
    <div className="flex items-center gap-3" aria-label="D/vox Drywall São Paulo">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-slate-200">
        <span className="text-xl font-black text-[#061b35]">
          D<span className="text-[#d71920]">/</span>V
        </span>
      </div>

      <div className="leading-tight">
        <strong className="block text-lg font-black tracking-tight text-white">D/vox Drywall</strong>
        <span className="text-xs font-bold uppercase tracking-[.22em] text-[#ef4444]">São Paulo</span>
      </div>
    </div>
  );
}

function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'D/vox Drywall São Paulo',
 description:
  'Empresa especializada em drywall, forro modular, forro em gesso, divisórias, sancas, steel frame, reformas e acabamentos para obras residenciais, comerciais, industriais e prediais em São Paulo capital, Grande São Paulo e interior paulista.',
    areaServed: cities,
    telephone: '+55 11 96543-1342',
    email: 'diegodvox@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    url: 'https://dvoxdrywall.vercel.app',
    sameAs: ['https://www.instagram.com/dvoxdrywallsp/'],
    serviceType: services.map((item) => item.title),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const [whatsappBoxOpen, setWhatsappBoxOpen] = useState(false);
const [whatsappSubject, setWhatsappSubject] = useState('');
const [whatsappMessage, setWhatsappMessage] = useState('');

const [showScrollTop, setShowScrollTop] = useState(false);
useEffect(() => {
  function handleScroll() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const reachedBottom =
      scrollTop + windowHeight >= documentHeight - 300;

    setShowScrollTop(reachedBottom);
  }

  window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListener('scroll', handleScroll);
}, []);



function sendWhatsappMessage() {
  const subject = whatsappSubject.trim();
  const message = whatsappMessage.trim();

  if (!subject || !message) return;

  const text = `*${subject}*\n\n${message}`;

  window.open(
    `https://wa.me/5511965431342?text=${encodeURIComponent(text)}`,
    '_blank'
  );
}

const projectsCarouselRef = useRef(null);

function scrollProjects(direction) {
  if (!projectsCarouselRef.current) return;

  const scrollAmount = projectsCarouselRef.current.offsetWidth * 0.9;

  projectsCarouselRef.current.scrollBy({
    left: direction === 'next' ? scrollAmount : -scrollAmount,
    behavior: 'smooth',
  });
}


  function openProject(project) {
    setSelectedProject(project);
    setCurrentImage(0);
  }

  function closeProject() {
    setSelectedProject(null);
    setCurrentImage(0);
  }

  function nextImage() {
    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  }

  function prevImage() {
    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  }

  return (
    <main className="bg-[#f5f7fb] text-slate-900">
      <JsonLd />

   <div className="fixed inset-x-0 top-0 z-50">
  {/* TOP BAR */}
  <div className="bg-[#d71920] px-4 py-2 text-white">
    <div className="mx-auto flex max-w-7xl items-center justify-center gap-7 text-xs font-bold md:justify-between md:px-6">
      <a href={whatsapp} className="flex items-center gap-2 transition hover:text-white/80">
        <FaWhatsapp className="text-base" />
        <span>(11) 96543-1342</span>
      </a>

      <span className="text-white/60 md:hidden">|</span>

      <div className="flex items-center gap-2">
        <FaMapMarkerAlt className="text-sm" />
        <span>São Paulo - SP e Região</span>
      </div>
    </div>
  </div>

  {/* HEADER */}
  <header className="border-b border-white/10 bg-[#06111f]/95 backdrop-blur-xl">
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6"
      aria-label="Menu principal"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-[5.5rem] w-[6.5rem] items-center justify-center overflow-hidden rounded-2xl bg-white shadow-xl md:h-[6.5rem] md:w-[7.5rem]">
          <img
            src="/assets/dvox-logo.png"
            alt="Logo D/vox Drywall São Paulo"
            className="h-[5rem] w-auto object-contain md:h-[6rem]"
          />
        </div>
      </div>

      <div className="hidden items-center gap-8 text-sm font-bold text-white/80 md:flex">
        <a href="#servicos" className="transition hover:text-white">Serviços</a>
        <a href="#diferenciais" className="transition hover:text-white">Diferenciais</a>
        <a href="#projetos" className="transition hover:text-white">Projetos</a>
        <a href="#contato" className="transition hover:text-white">Contato</a>
      </div>

      <a
        href={whatsapp}
        className="hidden rounded-full bg-[#d71920] px-5 py-3 text-sm font-black text-white shadow-[0_18px_45px_rgba(215,25,32,.35)] transition hover:-translate-y-0.5 hover:bg-red-700 md:inline-flex"
      >
        Orçamento
      </a>

      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white md:hidden"
        aria-label="Abrir menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>

    {menuOpen && (
      <div className="border-t border-white/10 bg-[#06111f] px-4 py-5 md:hidden">
        <div className="flex flex-col gap-4 text-sm font-bold text-white">
          <a onClick={() => setMenuOpen(false)} href="#servicos">Serviços</a>
          <a onClick={() => setMenuOpen(false)} href="#diferenciais">Diferenciais</a>
          <a onClick={() => setMenuOpen(false)} href="#projetos">Projetos</a>
          <a onClick={() => setMenuOpen(false)} href="#contato">Contato</a>

          <a
            onClick={() => setMenuOpen(false)}
            href={whatsapp}
            className="mt-2 rounded-full bg-[#d71920] px-5 py-3 text-center font-black text-white"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    )}
  </header>
</div>
<section
  className="relative min-h-screen overflow-hidden bg-cover bg-center bg-fixed text-white"
  style={{
    backgroundImage:
      "linear-gradient(90deg, rgb(6 17 31 / 53%), rgba(6, 17, 31, .78), rgba(6, 17, 31, .42)), url('/assets/dvox-home.jpg')",
  }}
>

  {/* OVERLAYS */}
  <div className="absolute inset-0 bg-black/5" />

 

  {/* CONTEÚDO */}
  <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-20 pt-32 md:px-6">
    <div className="max-w-4xl">
<span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.25em] text-white backdrop-blur mt-[4.5rem]">
  
  <span className="relative flex h-3 w-3">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400"></span>
  </span>

  Drywall e acabamentos em São Paulo
</span>

      <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[1.08] tracking-tight text-white md:text-6xl">
        Drywall, forro e acabamentos para obras de todos os portes.
      </h1>

      <p className="mt-6 max-w-3xl text-base leading-8 text-slate-100 md:text-xl">
        Atendimento completo para obras residenciais, comerciais,
        corporativas, industriais e prediais, com execução de drywall,
        forro modular, sancas, divisórias, steel frame e acabamentos em
        São Paulo capital, Grande São Paulo e interior paulista.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href={whatsapp}
          className="rounded-full bg-[#d71920] px-8 py-4 text-center font-black text-white shadow-[0_18px_45px_rgba(215,25,32,.35)] transition hover:-translate-y-1 hover:bg-red-700"
        >
          Solicitar orçamento rápido
        </a>

        <a
          href="#servicos"
          className="rounded-full border border-white/25 bg-white/10 px-8 py-4 text-center font-black text-white backdrop-blur transition hover:bg-white hover:text-[#06111f]"
        >
          Ver serviços
        </a>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {[
          'Residencial',
          'Comercial',
          'Corporativo',
          'Industrial',
          'Galpões',
          'Obras prediais',
        ].map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>

      <section id="servicos" className="relative z-10 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <span className="font-black uppercase tracking-[.25em] text-[#d71920]">Nossos serviços</span>
            <h2 className="mt-4 text-3xl font-black text-[#061b35] md:text-5xl">
              Execução completa para obras, reformas e acabamentos
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
Execução de obras pequenas, médias e grandes para residências,
empresas, galpões industriais, obras prediais, comércios,
escritórios e projetos corporativos em São Paulo capital,
Grande São Paulo e cidades do interior paulista.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.title} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative h-56 overflow-hidden">
                  <img src={service.image} alt={`${service.title} em São Paulo`} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06111f]/80 to-transparent" />
                  <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d71920] text-lg font-black text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-black text-[#061b35]">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative h-[70vh] overflow-hidden bg-cover bg-center bg-fixed text-white"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(6,17,31,.92), rgba(6,17,31,.7), rgba(6,17,31,.35)), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/10" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="max-w-7xl">
              <span className="font-black uppercase tracking-[.25em] text-[#ef4444]">Acabamento profissional</span>
              <h2 className="mt-5 text-3xl font-black leading-tight md:text-6xl">
                Drywall, gesso e acabamento com padrão elevado em cada detalhe.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-100">
                A D/vox Drywall executa projetos residenciais, comerciais e prediais com planejamento,
                organização e acabamento limpo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="diferenciais" className="relative z-10 bg-[#f5f7fb] px-4 py-24 md:px-6">
  <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
    <div>
      <span className="font-black uppercase tracking-[.3em] text-[#d71920]">
        Diferenciais
      </span>

      <h2 className="mt-4 text-4xl font-black leading-tight text-[#06111f] md:text-6xl">
        Por que empresas e clientes escolhem a D/vox Drywall?
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">
A D/vox Drywall atua em obras residenciais, comerciais,
corporativas, industriais e prediais, entregando soluções completas
em drywall, forro modular, divisórias, sancas e acabamentos
para clientes em São Paulo capital, Grande São Paulo e interior de SP.
      </p>

      <div className="mt-10 space-y-6">
        {[
          'Equipe especializada para obras pequenas, médias e de grande porte.',
          'Execução organizada com foco em qualidade, prazo e acabamento.',
          'Atendimento para residências, empresas, galpões e obras corporativas.',
          'Materiais de primeira linha e acabamento impecável.',
          'Experiência em drywall, forro modular, divisórias e steel frame.',
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-5 rounded-[28px] border border-slate-200 bg-white px-6 py-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="h-4 w-4 rounded-full bg-[#d71920]" />

            <p className="text-base font-semibold text-slate-700 md:text-lg">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>

    <div className="relative">
      <img
        src="/assets/projetos/drywall-2.jpg"
        alt="Projeto residencial executado pela D/vox Drywall"
        className="h-full min-h-[620px] w-full rounded-[40px] object-cover shadow-[0_35px_80px_rgba(15,23,42,.18)]"
      />

      <div className="absolute -bottom-8 -left-8 rounded-[28px] bg-[#06111f] px-8 py-6 text-white shadow-2xl">
        <span className="block text-5xl font-black text-[#d71920]">
          +3mil m²
        </span>

        <p className="mt-2 max-w-[220px] text-sm leading-6 text-slate-300">
          Capacidade para atender obras residenciais, comerciais, prediais,
          corporativas e industriais de diferentes portes.
        </p>
      </div>
    </div>
  </div>
</section>

      <section id="projetos" className="relative z-10 overflow-hidden bg-white py-20 md:py-28">
  <div className="mx-auto max-w-7xl px-4 md:px-6">
    <div className="mx-auto max-w-4xl text-center">
      <span className="font-black uppercase tracking-[.25em] text-[#d71920]">
        Projetos executados em São Paulo
      </span>

      <h2 className="mt-4 text-3xl font-black text-[#061b35] md:text-5xl">
        Obras residenciais, comerciais, corporativas, industriais e prediais
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        Conheça projetos de drywall, forro modular, forro em gesso, divisórias,
        steel frame, sancas, iluminação e acabamentos executados pela D/vox Drywall
        em São Paulo capital, Grande São Paulo e interior paulista.
      </p>
    </div>

    <div className="mt-12 flex items-center justify-between gap-4">

      {projects.length > 3 && (
        <div className="flex gap-3">
         <button
  type="button"
  onClick={() => scrollProjects('prev')}
  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-white shadow-sm transition hover:-translate-y-1 hover:bg-[#061b35]"
  aria-label="Projeto anterior"
>
  <FaChevronLeft className="text-sm text-[#061b35] transition group-hover:text-white" />
</button>

<button
  type="button"
  onClick={() => scrollProjects('next')}
  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-[#d71920] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#061b35]"
  aria-label="Próximo projeto"
>
  <FaChevronRight className="text-sm" />
</button>
        </div>
      )}
    </div>

    <div
      ref={projectsCarouselRef}
      className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {projects.map((project) => (
        <article
          key={project.title}
          onClick={() => openProject(project)}
          className="group min-w-[86%] snap-center cursor-pointer overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:min-w-[48%] lg:min-w-[calc((100%-3rem)/3)]"
        >
          <div className="relative h-64 overflow-hidden">
            <img
              src={project.images[0].src}
              alt={`${project.title} - projeto de drywall, forro e acabamentos em São Paulo`}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#06111f]/90 via-[#06111f]/25 to-transparent" />

            <span className="absolute left-5 top-5 rounded-full bg-[#d71920] px-4 py-2 text-xs font-black uppercase tracking-[.18em] text-white">
              {project.category}
            </span>

            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="text-2xl font-black leading-tight text-white">
                {project.title}
              </h3>

              <p className="mt-1 text-sm font-bold text-white/80">
                {project.size} • {project.location}
              </p>
            </div>
          </div>

          <div className="p-7">
            <p className="line-clamp-4 leading-7 text-slate-600">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.services.slice(0, 5).map((service) => (
                <span
                  key={service}
                  className="rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700"
                >
                  {service}
                </span>
              ))}
            </div>

            <button
              type="button"
              className="mt-6 inline-flex rounded-full bg-[#061b35] px-5 py-3 text-sm font-black text-white transition hover:bg-[#d71920]"
            >
              Ver evolução da obra
            </button>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      <section id="obras" className="relative z-10 bg-[#06111f] py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="font-black uppercase tracking-[.25em] text-[#ef4444]">
                Inspirações de acabamento
              </span>
              <h2 className="mt-4 max-w-3xl text-3xl font-black md:text-5xl">
                Ambientes residenciais e comerciais com visual moderno
              </h2>
            </div>

            <a href={whatsapp} className="rounded-full bg-white px-7 py-4 text-center font-black text-[#061b35] transition hover:bg-[#d71920] hover:text-white">
              Pedir avaliação
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {gallery.map((src, i) => (
              <div key={src} className={`overflow-hidden rounded-[2rem] ${i === 1 ? 'md:translate-y-10' : ''}`}>
                <img src={src} alt={`Projeto de drywall, gesso e acabamento moderno ${i + 1}`} className="h-[420px] w-full object-cover transition duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative h-[70vh] overflow-hidden bg-cover bg-center bg-fixed text-white"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(6,17,31,.95), rgba(6,17,31,.72), rgba(6,17,31,.3)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/10" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="max-w-7xl">
              <span className="font-black uppercase tracking-[.25em] text-[#ef4444]">Drywall em São Paulo</span>

              <h2 className="mt-5 text-3xl font-black leading-tight md:text-6xl">
                Empresa especializada em drywall, forro de gesso,
forro modular, divisórias e acabamentos em São Paulo,
Grande São Paulo e interior paulista.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-100">
A D/vox Drywall atua com instalação de drywall,
forro modular, sancas, iluminação, divisórias,
steel frame, reformas comerciais, obras prediais,
galpões industriais e acabamentos residenciais
em todo o estado de São Paulo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <span className="font-black uppercase tracking-[.25em] text-[#d71920]">Atendimento local</span>

          <h2 className="mt-4 text-3xl font-black text-[#061b35] md:text-5xl">
            Atendimento em São Paulo, Grande SP e interior paulista
          </h2>

          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <span key={city} className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 font-bold text-slate-700">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="relative z-10 bg-[#f5f7fb] py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="overflow-hidden rounded-[2.5rem] bg-[#06111f] shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 text-white md:p-14">
                <span className="font-black uppercase tracking-[.25em] text-[#ef4444]">Entre em contato</span>

                <h2 className="mt-4 text-3xl font-black md:text-5xl">
                  Solicite um orçamento rápido pelo WhatsApp
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-200">
                  Envie as informações do seu projeto e receba um atendimento direto.
                </p>

                <div className="mt-8 flex flex-col gap-4">
                  <a href={whatsapp} className="rounded-full bg-[#d71920] px-8 py-4 text-center font-black text-white shadow-[0_18px_45px_rgba(215,25,32,.35)] transition hover:-translate-y-1 hover:bg-red-700">
                    Chamar no WhatsApp
                  </a>

                  <a href="mailto:diegodvox@gmail.com" className="rounded-full border border-white/20 px-8 py-4 text-center font-black text-white transition hover:bg-white hover:text-[#06111f]">
                    diegodvox@gmail.com
                  </a>
                </div>
              </div>

<img
  src="/assets/contato-dvox.jpg"
  alt="Ambiente residencial com acabamento moderno em drywall"
  className="h-full min-h-[420px] w-full object-cover"
/>
            </div>
          </div>
        </div>
      </section>

<footer className="relative z-10 overflow-hidden bg-[#06111f]">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,25,32,.18),transparent_40%)]" />

  <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-6">
    <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-3">
      {/* LOGO + DESCRIÇÃO */}
      <div>
<div className="flex items-center gap-4">
  <div className="flex h-[6.5rem] w-[7.5rem] items-center justify-center overflow-hidden rounded-2xl bg-white shadow-xl">
    <img
      src="/assets/dvox-logo.png"
      alt="Logo D/vox Drywall São Paulo"
      className="h-[6rem] w-auto object-contain"
    />
  </div>
</div>

        <p className="mt-6 max-w-md leading-8 text-slate-300">
D/vox Drywall São Paulo — Empresa especializada em drywall,
forro modular, divisórias, sancas, steel frame e acabamentos
para obras residenciais, comerciais, corporativas, industriais
e prediais em São Paulo capital, Grande São Paulo e interior paulista.
        </p>
      </div>

      {/* CONTATO */}
      <div>
        <h4 className="text-sm font-black uppercase tracking-[.25em] text-[#ef4444]">
          Contato
        </h4>

        <div className="mt-6 space-y-4">
          <a
            href="https://wa.me/5511965431342"
            target="_blank"
            className="flex items-center gap-3 text-slate-300 transition hover:text-white"
          >
<span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#25D366]">
  <FaWhatsapp className="text-lg" />
</span>

            <div>
              <p className="text-sm font-bold text-white">
                WhatsApp
              </p>

              <span className="text-sm">
                (11) 96543-1342
              </span>
            </div>
          </a>

          <a
            href="mailto:diegodvox@gmail.com"
            className="flex items-center gap-3 text-slate-300 transition hover:text-white"
          >
<span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
  <FaEnvelope className="text-base" />
</span>

            <div>
              <p className="text-sm font-bold text-white">
                E-mail
              </p>

              <span className="text-sm">
                diegodvox@gmail.com
              </span>
            </div>
          </a>

          <a
            href="https://instagram.com/dvoxdrywallsp"
            target="_blank"
            className="flex items-center gap-3 text-slate-300 transition hover:text-white"
          >
  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#E1306C]">
  <FaInstagram className="text-lg" />
</span>

            <div>
              <p className="text-sm font-bold text-white">
                Instagram
              </p>

              <span className="text-sm">
                @dvoxdrywallsp
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* SERVIÇOS */}
      <div>
        <h4 className="text-sm font-black uppercase tracking-[.25em] text-[#ef4444]">
          Especialidades
        </h4>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            'Forro em drywall',
            'Forro modular',
            'Drywall',
            'Divisórias',
            'Sancas',
            'Iluminação',
            'Reformas',
            'Acabamento premium',
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* BOTTOM */}
    <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center md:flex-row md:text-left">
      <p className="text-sm text-slate-400">
        © {new Date().getFullYear()} D/vox Drywall São Paulo. Todos os direitos reservados.
      </p>

      <p className="text-sm text-slate-400">
        Desenvolvido por{' '}
        <a
          href="https://kinkajoudev.com.br"
          target="_blank"
          className="font-bold text-white transition hover:text-[#ef4444]"
        >
          Kinkajou Dev
        </a>
      </p>
    </div>
  </div>
</footer>

      {selectedProject && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-md">
         <div className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl md:overflow-hidden">
            <button
              onClick={closeProject}
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-xl font-black text-white transition hover:bg-[#d71920]"
              aria-label="Fechar projeto"
            >
              ×
            </button>

            <div className="grid md:grid-cols-[1.2fr_.8fr]">
              <div className="relative bg-[#06111f]">
                <img
                  src={selectedProject.images[currentImage].src}
                  alt={`${selectedProject.title} - ${selectedProject.images[currentImage].label}`}
                  className="h-[260px] w-full object-cover object-top sm:h-[340px] md:h-[650px]"
                />

                <div className="absolute bottom-5 left-5 rounded-full bg-[#d71920] px-5 py-3 text-sm font-black text-white">
                  {selectedProject.images[currentImage].label}
                </div>

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-2xl font-black text-white transition hover:bg-[#d71920]"
                  aria-label="Imagem anterior"
                >
                  <FaChevronLeft className="text-sm" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-2xl font-black text-white transition hover:bg-[#d71920]"
                  aria-label="Próxima imagem"
                ><FaChevronRight className="text-sm" />
                
                </button>
              </div>

              <div className="p-6 pb-10 md:max-h-[650px] md:overflow-y-auto md:p-10">
                <span className="rounded-full bg-[#d71920] px-4 py-2 text-xs font-black uppercase tracking-[.18em] text-white">
                  {selectedProject.category}
                </span>

                <h3 className="mt-5 text-2xl font-black text-[#061b35]">
                  {selectedProject.title}
                </h3>

                <p className="mt-3 font-bold text-slate-500">
                  {selectedProject.size} • {selectedProject.location}
                </p>

                <p className="mt-6 leading-8 text-slate-600">
                  {selectedProject.description}
                </p>


                {selectedProject.highlights && (
  <div className="mt-7 rounded-3xl bg-slate-50 p-5">
    <h4 className="text-sm font-black uppercase tracking-[.18em] text-[#d71920]">
      Destaques do projeto
    </h4>

    <ul className="mt-4 space-y-3 text-sm font-semibold text-slate-700">
      {selectedProject.highlights.map((item) => (
        <li key={item}>• {item}</li>
      ))}
    </ul>
  </div>
)}

                <div className="mt-7">
                  <h4 className="font-black text-[#061b35]">Serviços realizados</h4>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedProject.services.map((service) => (
                      <span key={service} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-7">
                  <h4 className="font-black text-[#061b35]">Evolução da obra</h4>

                  <div className="mt-4 grid grid-cols-4 gap-3">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={image.src}
                        onClick={() => setCurrentImage(index)}
                        className={`overflow-hidden rounded-2xl border-2 transition ${
                          currentImage === index ? 'border-[#d71920]' : 'border-transparent'
                        }`}
                        aria-label={`Ver etapa: ${image.label}`}
                      >
                        <img src={image.src} alt={image.label} className="h-20 w-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                <a
                  href={whatsapp}
                  className="mt-8 inline-flex w-full justify-center rounded-full bg-[#061b35] px-6 py-4 text-center font-black text-white transition hover:bg-[#d71920]"
                >
                  Solicitar orçamento para obra semelhante
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BOTÕES FLUTUANTES */}

{/* BOTÃO VOLTAR AO TOPO */}
<div
  className={`fixed bottom-5 left-5 z-[998] transition-all duration-500 ${
    showScrollTop
      ? 'translate-y-0 opacity-100'
      : 'pointer-events-none translate-y-10 opacity-0'
  }`}
>
  <button
    type="button"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="rounded-full border border-white/10 bg-[#06111f]/95 px-2 py-2 text-white shadow-2xl backdrop-blur transition hover:-translate-y-1 hover:bg-[#d71920]"
    aria-label="Voltar ao topo"
  >
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
      <FaArrowUp className="text-sm" />
    </div>
  </button>
</div>

<div className="fixed bottom-5 right-5 z-[998]">
  {whatsappBoxOpen && (
    <div className="mb-4 w-[320px] rounded-3xl border border-white/10 bg-[#06111f] p-5 text-white shadow-2xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[.18em] text-[#25D366]">
            WhatsApp
          </p>
          <h3 className="mt-1 text-lg font-black">
            Enviar mensagem
          </h3>
        </div>

        <button
          type="button"
          onClick={() => setWhatsappBoxOpen(false)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#d71920]"
          aria-label="Fechar WhatsApp"
        >
          <FaTimes />
        </button>
      </div>

      <input
        type="text"
        value={whatsappSubject}
        onChange={(e) => setWhatsappSubject(e.target.value)}
        placeholder="Assunto da mensagem"
        className="mt-5 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white outline-none placeholder:text-white/50 focus:border-[#25D366]"
      />

      <textarea
        value={whatsappMessage}
        onChange={(e) => setWhatsappMessage(e.target.value)}
        placeholder="Digite sua mensagem"
        rows={4}
        className="mt-3 w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white outline-none placeholder:text-white/50 focus:border-[#25D366]"
      />

      <button
        type="button"
        onClick={sendWhatsappMessage}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-green-600"
      >
        <FaPaperPlane />
        Enviar no WhatsApp
      </button>
    </div>
  )}

  <button
    type="button"
    onClick={() => setWhatsappBoxOpen(!whatsappBoxOpen)}
    className="flex h-9 w-9 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-2xl transition hover:-translate-y-1 hover:bg-green-600"
    aria-label="Abrir WhatsApp"
  >
    <FaWhatsapp />
  </button>
</div>
    </main>
  );
}