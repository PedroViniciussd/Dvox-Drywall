'use client';

import { useState } from 'react';
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
  FaFileInvoiceDollar,
} from 'react-icons/fa';

const whatsapp =
  'https://wa.me/5511926851991?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20D%2Fvox%20Drywall%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="bg-[#d71920] px-4 py-2 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-7 text-xs font-bold md:justify-between md:px-6">
          <a href={whatsapp} className="flex items-center gap-2 transition hover:text-white/80">
            <FaWhatsapp className="text-base" />
            <span>(11) 92685-1991</span>
          </a>

          <span className="text-white/60 md:hidden">|</span>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-sm" />
            <span>São Paulo - SP e Região</span>
          </div>
        </div>
      </div>

      <header className="border-b border-white/10 bg-[#06111f]/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <a href="/" className="flex items-center gap-4">
            <div className="flex h-[5.5rem] w-[6.5rem] items-center justify-center overflow-hidden rounded-2xl bg-white shadow-xl md:h-[6.5rem] md:w-[7.5rem]">
              <img
                src="/assets/dvox-logo.png"
                alt="Logo D/vox Drywall São Paulo"
                className="h-[5rem] w-auto object-contain md:h-[6rem]"
              />
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm font-bold text-white/80 md:flex">
            <a href="/#servicos" className="transition hover:text-white">Serviços</a>
            <a href="/#diferenciais" className="transition hover:text-white">Diferenciais</a>
                <a href="/#especialidades" className="transition hover:text-white">Especialidades</a>
            <a href="/#projetos" className="transition hover:text-white">Projetos</a>
            <a href="/#contato" className="transition hover:text-white">Contato</a>
          </div>

<a
  href={whatsapp}
  className="hidden items-center gap-2 rounded-full bg-[#d71920] px-5 py-3 text-sm font-black text-white shadow-[0_18px_45px_rgba(215,25,32,.35)] transition hover:-translate-y-0.5 hover:bg-red-700 md:inline-flex"
>
  <FaFileInvoiceDollar className="text-base" />
  <span>Orçamento</span>
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
              <a onClick={() => setMenuOpen(false)} href="/#servicos">Serviços</a>
              <a onClick={() => setMenuOpen(false)} href="/#diferenciais">Diferenciais</a>
              <a onClick={() => setMenuOpen(false)} href="/#especialidades">Especialidades</a>
              <a onClick={() => setMenuOpen(false)} href="/#projetos">Projetos</a>
              <a onClick={() => setMenuOpen(false)} href="/#contato">Contato</a>

            <a
  onClick={() => setMenuOpen(false)}
  href={whatsapp}
  className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#d71920] px-5 py-3 text-center font-black text-white"
>
  <FaFileInvoiceDollar className="text-base" />
  <span>Solicitar orçamento</span>
</a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}