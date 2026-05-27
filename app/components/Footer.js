'use client';

import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden bg-[#06111f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,25,32,.18),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-3">
          
          {/* LOGO */}
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

          {/* ESPECIALIDADES */}
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
  );
}