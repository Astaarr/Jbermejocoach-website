import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white/80 py-8 backdrop-blur-md">
      <div className="mx-auto flex w-[min(1120px,92vw)] flex-col items-start justify-between gap-3 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} JBermejo Entrenamiento y Nutricion</p>
        <nav className="flex gap-4 text-[var(--muted)]" aria-label="Enlaces legales">
          <Link href="/aviso-legal">Aviso legal</Link>
          <Link href="/politica-privacidad">Privacidad</Link>
          <Link href="/politica-cookies">Cookies</Link>
        </nav>
      </div>
    </footer>
  );
}
