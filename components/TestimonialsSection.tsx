import Image from "next/image";

const testimonials = [
  {
    name: "Dani",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/caso-dani.jpg",
  },
  {
    name: "Vicente",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/caso-vicente.jpg",
  },
  {
    name: "Carlos",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/caso-carlos.jpg",
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
        Personas reales, procesos reales y resultados construidos con constancia.
      </p>
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-[18px] border border-[var(--border)] bg-white p-[1.15rem] leading-7 text-[var(--muted)] shadow-[0_10px_26px_rgba(1,23,81,.08)]"
          >
            <div className="relative mb-3 aspect-square overflow-hidden rounded-xl">
              <Image
                src={testimonial.image}
                alt={`Caso real de ${testimonial.name}`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
            <p>{testimonial.text}</p>
            <strong className="text-[var(--brand)]">{testimonial.name}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
