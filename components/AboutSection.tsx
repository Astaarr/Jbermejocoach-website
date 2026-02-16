import Image from "next/image";

export function AboutSection() {
  return (
    <section className="mx-auto w-[min(1120px,92vw)]">
      <span className="inline-block rounded-full border border-[var(--border)] px-3 py-1 text-xs font-bold uppercase text-[var(--brand)]">
        Sobre mí
      </span>
      <h2 className="mt-3 text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.05] text-[var(--brand)]">
        Soy Javier Bermejo
      </h2>
      <p className="mt-2 text-base leading-7 text-[var(--muted)]">
        En JBermejo Entrenamiento y Nutrición trabajo con un enfoque cercano y
        práctico para ayudarte a mejorar tu composición corporal y tus hábitos
        sin complicarte la vida.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="relative min-h-[260px] overflow-hidden rounded-[20px] border border-[var(--border)] bg-[linear-gradient(180deg,#ffffff,#eef3ff)]">
          <Image
            src="/about-javier.jpg"
            alt="Javier Bermejo"
            fill
            className="object-cover object-[50%_26%] md:object-[50%_26%]"
            sizes="(max-width: 1024px) 100vw, 35vw"
            priority={false}
          />
        </div>
        <article className="rounded-[20px] border border-[var(--border)] bg-white p-5 shadow-[0_10px_24px_rgba(1,23,81,.08)]">
          <h3 className="my-2 text-lg text-[var(--brand)]">Para quién es este servicio</h3>
          <p className="leading-7 text-[var(--muted)]">
            Para personas que quieren recuperar su energía, verse mejor y
            construir una rutina saludable estable. Tanto si empiezas de cero
            como si llevas tiempo atascado, el plan se adapta a ti.
          </p>
          <h3 className="mb-2 mt-4 text-lg text-[var(--brand)]">Qué vas a encontrar aquí</h3>
          <p className="leading-7 text-[var(--muted)]">
            Acompañamiento, claridad y compromiso. Te explico el porqué de cada
            decisión y te doy herramientas para que avances con seguridad.
          </p>
        </article>
      </div>
    </section>
  );
}
