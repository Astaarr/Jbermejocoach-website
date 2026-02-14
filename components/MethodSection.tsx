import styles from "@/app/page.module.css";

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
    <section className={styles.methodWrap}>
      <span className="pill">Metodo de trabajo</span>
      <h2 className="section-title">Un proceso simple para un cambio sostenible</h2>
      <p className="section-copy">
        No necesitas vivir en el gimnasio. Necesitas estructura, apoyo y un plan
        que funcione para tu vida real.
      </p>
      <div className={styles.cards3}>
        {steps.map((step) => (
          <article key={step.label} className={styles.card}>
            <span className="pill">{step.label}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
