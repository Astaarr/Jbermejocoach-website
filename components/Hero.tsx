import styles from "@/app/page.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.heroTag}>COACH ONLINE PARA CAMBIO FISICO REAL</p>
        <h1 className={styles.heroTitle}>
          TU MEJOR VERSION NO ES SUERTE,
          <br />
          <span className={styles.heroHighlight}>ES UNA DECISION.</span>
        </h1>
        <p className={styles.heroCopy}>
          Deja atras la improvisacion. Te ayudo a transformar tu fisico con una
          metodologia cercana, sin dietas extremas y con seguimiento continuo.
        </p>
        <div className={styles.heroActions}>
          <a className={styles.primaryBtn} href="#formulario">
            Empieza tu transformacion
          </a>
          <a
            className={styles.secondaryBtn}
            href="https://wa.me/34622865708?text=Hola%2C%20vengo%20desde%20tu%20web.%20Me%20interesa%20comenzar%20un%20proceso%20de%20entrenamiento%2Fcoaching.%20%C2%BFPodemos%20hablar%20de%20objetivos%20y%20disponibilidad%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conoce mi enfoque
          </a>
        </div>
      </div>
      <div className={styles.heroStats}>
        <p>Plan personalizado</p>
        <p>Seguimiento semanal</p>
        <p>Entrenamiento + nutricion</p>
      </div>
    </section>
  );
}
