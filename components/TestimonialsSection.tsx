import styles from "@/app/page.module.css";

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
    <section className={styles.testimonialsWrap}>
      <span className="pill">Prueba social</span>
      <h2 className="section-title">Historias reales de cambio</h2>
      <p className="section-copy">
        Este bloque esta preparado para incorporar tus casos reales,
        transformaciones y capturas de resultados.
      </p>
      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className={styles.testimonial}>
            <p>{testimonial.text}</p>
            <strong>{testimonial.name}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
