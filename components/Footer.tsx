import Link from "next/link";
import styles from "@/app/page.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerShell}>
        <p>© {new Date().getFullYear()} JBermejo Entrenamiento y Nutricion</p>
        <nav className={styles.footerLinks} aria-label="Enlaces legales">
          <Link href="/aviso-legal">Aviso legal</Link>
          <Link href="/politica-privacidad">Privacidad</Link>
          <Link href="/politica-cookies">Cookies</Link>
        </nav>
      </div>
    </footer>
  );
}
