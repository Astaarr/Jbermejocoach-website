const testimonials = [
  {
    name: "Cliente 1",
    text: "TODO: anadir testimonio real sobre cambio fisico, adherencia y sensacion general del proceso.",
  },
  {
    name: "Cliente 2",
    text: "TODO: anadir testimonio real sobre mejora de energia, confianza y progreso sostenible.",
  },
  {
    name: "Cliente 3",
    text: "TODO: anadir testimonio real sobre acompanamiento, claridad y resultados en el dia a dia.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="mx-auto w-[min(1120px,92vw)]">
      <span className="inline-block rounded-full border border-[var(--border)] px-3 py-1 text-xs font-bold uppercase text-[var(--brand)]">
        Prueba social
      </span>
      <h2 className="mt-3 text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.05] text-[var(--brand)]">
        Historias reales de cambio
      </h2>
      <p className="mt-2 text-base leading-7 text-[var(--muted)]">
        Este bloque esta preparado para incorporar tus casos reales,
        transformaciones y capturas de resultados.
      </p>
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-[18px] border border-[var(--border)] bg-white p-[1.15rem] leading-7 text-[var(--muted)] shadow-[0_10px_26px_rgba(1,23,81,.08)]"
          >
            <p>{testimonial.text}</p>
            <strong className="text-[var(--brand)]">{testimonial.name}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
