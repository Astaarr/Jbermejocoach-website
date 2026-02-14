import styles from "@/app/page.module.css";

export function VideoSection() {
  return (
    <section className={styles.videoWrap}>
      <span className="pill">Empieza aqui</span>
      <h2 className="section-title">Conoce mi enfoque en menos de 2 minutos</h2>
      <p className="section-copy">
        Este video sera tu primera toma de contacto para entender como trabajo y
        que puedes esperar del proceso.
      </p>
      <div className={styles.videoBox}>
        <div className={styles.videoPlaceholder}>
          <div>
            <strong>Video Loom (placeholder)</strong>
            <p>
              TODO: sustituir por el enlace final de introduccion y presentacion
              del servicio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
