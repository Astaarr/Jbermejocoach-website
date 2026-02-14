const steps = [
  {
    label: "Paso 1",
    title: "Diagnostico inicial",
    text: "Analizamos tu punto de partida, tu contexto y tus objetivos reales para crear una hoja de ruta clara.",
  },
  {
    label: "Paso 2",
    title: "Plan personalizado",
    text: "Disenas una rutina y una estrategia nutricional adaptada a tu nivel, tiempos y estilo de vida.",
  },
  {
    label: "Paso 3",
    title: "Seguimiento cercano",
    text: "Ajustamos semana a semana para mantener progreso, resolver bloqueos y sostener el cambio en el tiempo.",
  },
];

export function MethodSection() {
  return (
    <section className="mx-auto w-[min(1120px,92vw)]">
      <span className="inline-block rounded-full border border-[var(--border)] px-3 py-1 text-xs font-bold uppercase text-[var(--brand)]">
        Metodo de trabajo
      </span>
      <h2 className="mt-3 text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.05] text-[var(--brand)]">
        Un proceso simple para un cambio sostenible
      </h2>
      <p className="mt-2 text-base leading-7 text-[var(--muted)]">
        No necesitas vivir en el gimnasio. Necesitas estructura, apoyo y un plan
        que funcione para tu vida real.
      </p>
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {steps.map((step) => (
          <article
            key={step.label}
            className="rounded-[20px] border border-[var(--border)] bg-white p-5 shadow-[0_10px_24px_rgba(1,23,81,.08)]"
          >
            <span className="inline-block rounded-full border border-[var(--border)] px-3 py-1 text-xs font-bold uppercase text-[var(--brand)]">
              {step.label}
            </span>
            <h3 className="my-2 text-lg text-[var(--brand)]">{step.title}</h3>
            <p className="leading-7 text-[var(--muted)]">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
