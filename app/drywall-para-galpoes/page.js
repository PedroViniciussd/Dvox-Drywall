import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

const whatsapp =
  'https://wa.me/5511926851991?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20D%2Fvox%20Drywall%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.';

const pageData = {
  "slug": "drywall-para-galpoes",
  "title": "Drywall para Galpões | D/vox Drywall",
  "description": "Drywall para galpões, áreas industriais e obras comerciais em São Paulo. Forro modular, paredes, divisórias, steel frame e acabamentos técnicos.",
  "kicker": "Drywall para galpões",
  "h1": "Drywall para galpões, empresas e obras industriais em São Paulo",
  "intro": "A D/vox Drywall atende galpões, áreas industriais, empresas, obras comerciais e projetos corporativos com soluções completas em drywall, forro modular, divisórias, steel frame e acabamentos.",
  "image": "/assets/projetos/galpao-1.jpg",
  "sections": [
    {
      "title": "Soluções para galpões e áreas industriais",
      "text": "Galpões e áreas industriais exigem planejamento, organização e execução técnica. A D/vox atua com instalação de paredes em drywall, divisórias, forros e soluções que ajudam na funcionalidade e acabamento dos espaços."
    },
    {
      "title": "Obras comerciais e corporativas",
      "text": "Também executamos projetos para empresas, áreas administrativas, salas internas, escritórios dentro de galpões, áreas técnicas e ambientes de apoio operacional."
    },
    {
      "title": "Capacidade para obras de grande porte",
      "text": "Com experiência em obras de médio e grande porte, a D/vox atende demandas industriais e corporativas em São Paulo capital, Grande São Paulo e interior paulista."
    }
  ],
  "faqs": [
    {
      "question": "Drywall pode ser usado em galpões?",
      "answer": "Sim. O drywall pode ser utilizado em áreas internas, escritórios, divisórias, salas administrativas e soluções técnicas em galpões."
    },
    {
      "question": "Vocês fazem forro modular em galpão?",
      "answer": "Sim. A D/vox executa forro modular, paredes, divisórias, steel frame e acabamentos para galpões e obras comerciais."
    },
    {
      "question": "Atendem obras industriais?",
      "answer": "Sim. A empresa atende obras industriais, comerciais, corporativas, prediais e residenciais."
    }
  ],
  "keywords": [
    "drywall para galpões",
    "drywall industrial SP",
    "forro modular galpão",
    "divisórias para galpões"
  ]
};

export const metadata = {
  title: pageData.title,
  description: pageData.description,
  alternates: {
    canonical: `/${pageData.slug}`,
  },
  keywords: pageData.keywords,
  openGraph: {
    title: pageData.title,
    description: pageData.description,
    url: `https://dvoxdrywall.com.br/${pageData.slug}`,
    type: 'website',
    locale: 'pt_BR',
    siteName: 'D/vox Drywall São Paulo',
    images: [
      {
        url: '/og-image-2026.jpg',
        width: 1200,
        height: 630,
        alt: pageData.title,
      },
    ],
  },
};

function ServiceJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: pageData.h1,
    description: pageData.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'D/vox Drywall São Paulo',
      telephone: '+55 11 92685-1991',
      email: 'diegodvox@gmail.com',
      url: 'https://dvoxdrywall.com.br',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
    },
    areaServed: [
      'São Paulo',
      'Grande São Paulo',
      'Interior paulista',
      'Guarulhos',
      'Osasco',
      'Barueri',
      'Campinas',
      'Sorocaba',
      'Jundiaí',
      'São José dos Campos',
    ],
    serviceType: pageData.keywords,
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pageData.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
}

export default function SeoServicePage() {
  return (
    <main className="bg-white text-slate-900">
      <ServiceJsonLd />
 <Header />
      <section
        className="relative overflow-hidden bg-[#06111f] text-white bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            `linear-gradient(90deg, rgba(6,17,31,.95), rgba(6,17,31,.78), rgba(6,17,31,.42)), url('${pageData.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto flex min-h-[78vh] max-w-7xl items-center px-4 py-28 md:px-6 pt-[12rem] md:pt-[16rem]">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.25em] text-white backdrop-blur">
              {pageData.kicker}
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              {pageData.h1}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100 md:text-xl">
              {pageData.intro}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsapp}
                className="rounded-full bg-[#d71920] px-8 py-4 text-center font-black text-white shadow-[0_18px_45px_rgba(215,25,32,.35)] transition hover:-translate-y-1 hover:bg-red-700"
              >
                Solicitar orçamento
              </a>

              <Link
                href="/#projetos"
                className="rounded-full border border-white/25 bg-white/10 px-8 py-4 text-center font-black text-white backdrop-blur transition hover:bg-white hover:text-[#06111f]"
              >
                Ver projetos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <aside className="rounded-[2rem] bg-[#f5f7fb] p-8 shadow-sm">
            <span className="font-black uppercase tracking-[.25em] text-[#d71920]">
              Especialidade
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight text-[#061b35]">
              Atendimento técnico com foco em qualidade, prazo e acabamento.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A D/vox Drywall atende obras residenciais, comerciais, corporativas,
              industriais e prediais em São Paulo capital, Grande São Paulo e interior paulista.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {pageData.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </aside>

          <div className="space-y-10">
            {pageData.sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-2xl font-black text-[#061b35] md:text-3xl">
                  {section.title}
                </h2>

                <p className="mt-4 text-lg leading-9 text-slate-600">
                  {section.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

                 <section
        className="relative h-[78vh] md:h-[50vh] overflow-hidden bg-cover bg-center bg-fixed text-white"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(6,17,31,.92), rgba(6,17,31,.7), rgba(6,17,31,.35)), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85')",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 pt-[4rem]">
          <div className="max-w-4xl">
            <span className="font-black uppercase tracking-[.25em] text-[#ef4444]">
              Atendimento regional
            </span>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Atendimento em São Paulo, Grande São Paulo e interior paulista.
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-200">
              A D/vox Drywall atende clientes em São Paulo, Guarulhos, Osasco,
              Barueri, Santo André, São Bernardo do Campo, Cotia, Campinas,
              Sorocaba, Jundiaí, São José dos Campos e outras cidades do interior paulista.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fb] py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center">
            <span className="font-black uppercase tracking-[.25em] text-[#d71920]">
              Perguntas frequentes
            </span>

            <h2 className="mt-4 text-3xl font-black text-[#061b35] md:text-5xl">
              Dúvidas sobre {pageData.kicker.toLowerCase()}
            </h2>
          </div>

          <div className="mt-12 space-y-5">
            {pageData.faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-black text-[#061b35]">
                  {faq.question}
                </h3>

                <p className="mt-3 leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#06111f] px-6 py-14 text-center text-white shadow-2xl md:px-12">
          <span className="font-black uppercase tracking-[.25em] text-[#ef4444]">
            Solicite uma avaliação
          </span>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            Precisa de orçamento para drywall, forro ou acabamento?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            Envie as informações da sua obra para a D/vox Drywall e receba um atendimento direto pelo WhatsApp.
          </p>

          <a
            href={whatsapp}
            className="mt-8 inline-flex rounded-full bg-[#d71920] px-8 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-red-700"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>
      <Footer />
      <FloatingButtons />
    </main>
  );
}
