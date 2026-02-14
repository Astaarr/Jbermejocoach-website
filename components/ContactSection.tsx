import { ContactForm } from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section id="formulario" className="mx-auto w-[min(1120px,92vw)]">
      <span className="inline-block rounded-full border border-[var(--border)] px-3 py-1 text-xs font-bold uppercase text-[var(--brand)]">
        Da el siguiente paso
      </span>
      <h2 className="mt-3 text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.05] text-[var(--brand)]">
        Solicita tu valoracion inicial
      </h2>
      <p className="mt-2 text-base leading-7 text-[var(--muted)]">
        Rellena este formulario y te contactare personalmente para conocer tu
        caso y explicarte como podemos trabajar juntos.
      </p>

      <div className="mt-5 rounded-3xl border border-[var(--border)] bg-[linear-gradient(180deg,#ffffff,#edf3ff)] p-[clamp(1rem,3vw,2rem)] shadow-[0_16px_32px_rgba(1,23,81,.1)]">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="leading-7 text-[var(--muted)]">
              Respuesta habitual en 24-48h laborables. Si prefieres una via
              mas directa, tambien puedes escribirme por WhatsApp.
            </p>
            <ul className="mt-4 grid gap-2 font-bold text-[var(--brand)]">
              <li className="list-none">Javier Bermejo</li>
              <li className="list-none">jbermejo.training@gmail.com</li>
              <li className="list-none">+34 622 86 57 08</li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
