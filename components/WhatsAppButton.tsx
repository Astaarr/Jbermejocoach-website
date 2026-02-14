export function WhatsAppButton() {
  return (
    <a
      className="fixed bottom-3 right-3 z-30 inline-flex h-12 items-center gap-2 rounded-full bg-[#1f9f4d] px-4 font-bold text-white shadow-[0_12px_24px_rgba(31,159,77,.28)] transition hover:-translate-y-0.5 md:bottom-4 md:right-4"
      href="https://wa.me/34622865708?text=Hola%2C%20vengo%20desde%20tu%20web.%20Me%20interesa%20comenzar%20un%20proceso%20de%20entrenamiento%2Fcoaching.%20%C2%BFPodemos%20hablar%20de%20objetivos%20y%20disponibilidad%3F"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversacion de WhatsApp"
    >
      WhatsApp
    </a>
  );
}
