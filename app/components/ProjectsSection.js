'use client';

import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  {
    title: 'Projeto corporativo com forro e acabamento premium',
    category: 'Comercial',
    size: 'Obra corporativa de alto padrão',
    location: 'São Paulo - SP',
    description:
      'Execução de forro em drywall, iluminação embutida, acabamentos premium e integração arquitetônica em um projeto corporativo moderno.',
    services: [
      'Forro em drywall',
      'Iluminação embutida',
      'Rebaixo em gesso',
      'Acabamento premium',
      'Projeto corporativo',
    ],
    images: Array.from({ length: 3 }, (_, index) => ({
      src: `/assets/projetos/projeto-${index + 1}.jpg`,
    })),
  },
  {
    title: 'Reforma residencial de alto padrão',
    category: 'Residencial',
    size: 'Projeto personalizado',
    location: 'São Paulo e região paulista',
    description:
      'Projeto residencial com foco em acabamento de alto padrão, utilizando soluções em gesso, sancas, iluminação, drywall e modernização de ambientes.',
    services: ['Sancas', 'Iluminação', 'Drywall', 'Gesso', 'Alto padrão'],
    images: Array.from({ length: 14 }, (_, index) => ({
      src: `/assets/projetos/obra-${index + 1}.jpg`,
    })),
  },
  {
    title: 'Galpões e obras industriais',
    category: 'Industrial',
    size: 'Mais de 3.000 m²',
    location: 'São Paulo e região metropolitana',
    description:
      'Atendimento para galpões, áreas industriais e obras comerciais com instalação de forro, paredes, divisórias, steel frame e soluções completas em drywall.',
    services: [
      'Forro modular',
      'Paredes em drywall',
      'Divisórias',
      'Steel frame',
      'Obras industriais',
    ],
    images: Array.from({ length: 14 }, (_, index) => ({
      src: `/assets/projetos/galpao-${index + 1}.jpg`,
    })),
  },
];

export default function ProjectsSection() {
  const projectsCarouselRef = useRef(null);

  function scrollProjects(direction) {
    if (!projectsCarouselRef.current) return;

    const scrollAmount = projectsCarouselRef.current.offsetWidth * 0.9;

    projectsCarouselRef.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  }

  return (
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

        <div className="mt-12 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => scrollProjects('prev')}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:bg-[#061b35] hover:text-white"
            aria-label="Projeto anterior"
          >
            <FaChevronLeft className="text-sm" />
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

        <div
          ref={projectsCarouselRef}
          className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project) => (
            <article
              key={project.title}
              className="group min-w-[86%] snap-center overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:min-w-[48%] lg:min-w-[calc((100%-3rem)/3)]"
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
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <a
                  href="https://wa.me/5511965431342"
                  className="mt-6 inline-flex rounded-full bg-[#061b35] px-5 py-3 text-sm font-black text-white transition hover:bg-[#d71920]"
                >
                  Solicitar orçamento
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}