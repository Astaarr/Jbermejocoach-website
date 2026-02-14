import styles from "@/app/page.module.css";

export function AboutSection() {
  return (
    <section className={styles.aboutWrap}>
      <span className="pill">Sobre mi</span>
      <h2 className="section-title">Soy Javier Bermejo</h2>
      <p className="section-copy">
        En JBermejo Entrenamiento y Nutricion trabajo con un enfoque cercano y
        practico para ayudarte a mejorar tu composicion corporal y tus habitos
        sin complicarte la vida.
      </p>

      <div className={styles.aboutGrid}>
        <div className={styles.photoPlaceholder}>
          TODO: incluir foto profesional del coach
        </div>
        <article className={styles.card}>
          <h3>Para quien es este servicio</h3>
          <p>
            Para personas que quieren recuperar su energia, verse mejor y
            construir una rutina saludable estable. Tanto si empiezas de cero
            como si llevas tiempo atascado, el plan se adapta a ti.
          </p>
          <h3>Que vas a encontrar aqui</h3>
          <p>
            Acompanamiento, claridad y compromiso. Te explico el por que de cada
            decision y te doy herramientas para que avances con seguridad.
          </p>
        </article>
      </div>
    </section>
  );
}
