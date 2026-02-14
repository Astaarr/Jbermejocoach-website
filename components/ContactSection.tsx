import styles from "@/app/page.module.css";
import { ContactForm } from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section id="formulario" className={styles.contactWrap}>
      <span className="pill">Da el siguiente paso</span>
      <h2 className="section-title">Solicita tu valoracion inicial</h2>
      <p className="section-copy">
        Rellena este formulario y te contactare personalmente para conocer tu
        caso y explicarte como podemos trabajar juntos.
      </p>

      <div className={styles.contactPanel}>
        <div className={styles.contactGrid}>
          <div>
            <p className={styles.contactNote}>
              Respuesta habitual en 24-48h laborables. Si prefieres una via
              mas directa, tambien puedes escribirme por WhatsApp.
            </p>
            <ul className={styles.contactList}>
              <li>Javier Bermejo</li>
              <li>jbermejo.training@gmail.com</li>
              <li>+34 622 86 57 08</li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
