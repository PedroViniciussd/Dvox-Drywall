'use client';

import { useEffect, useState } from 'react';
import { FaArrowUp, FaWhatsapp, FaTimes, FaPaperPlane } from 'react-icons/fa';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [whatsappBoxOpen, setWhatsappBoxOpen] = useState(false);
  const [whatsappSubject, setWhatsappSubject] = useState('');
  const [whatsappMessage, setWhatsappMessage] = useState('');

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setShowScrollTop(scrollTop + windowHeight >= documentHeight - 300);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

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

  return (
    <>
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
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-2xl transition hover:-translate-y-1 hover:bg-green-600 md:h-14 md:w-14"
          aria-label="Abrir WhatsApp"
        >
          <FaWhatsapp />
        </button>
      </div>
    </>
  );
}