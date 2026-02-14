import styles from "@/app/page.module.css";

export function WhatsAppButton() {
  return (
    <a
      className={styles.whatsapp}
      href="https://wa.me/34622865708?text=Hola%2C%20vengo%20desde%20tu%20web.%20Me%20interesa%20comenzar%20un%20proceso%20de%20entrenamiento%2Fcoaching.%20%C2%BFPodemos%20hablar%20de%20objetivos%20y%20disponibilidad%3F"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversacion de WhatsApp"
    >
      WhatsApp
    </a>
  );
}
