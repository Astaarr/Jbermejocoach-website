export function VideoSection() {
  return (
    <section className="mx-auto w-[min(1120px,92vw)]">
      <span className="inline-block rounded-full border border-[var(--border)] px-3 py-1 text-xs font-bold uppercase text-[var(--brand)]">
        Empieza aqui
      </span>
      <h2 className="mt-3 text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.05] text-[var(--brand)]">
        Conoce mi enfoque en menos de 2 minutos
      </h2>
      <p className="mt-2 text-base leading-7 text-[var(--muted)]">
        Este video sera tu primera toma de contacto para entender como trabajo y
        que puedes esperar del proceso.
      </p>
      <div className="mt-5 rounded-[26px] border border-[var(--border)] bg-[linear-gradient(160deg,#ffffff_30%,#f0f5ff_100%)] p-[clamp(1rem,2.8vw,2rem)] shadow-[0_15px_36px_rgba(1,23,81,.09)]">
        <div className="grid aspect-video place-items-center rounded-2xl border border-dashed border-[#90a0de] bg-[linear-gradient(180deg,#f7f9ff,#edf2ff)] p-4 text-center text-[var(--brand-soft)]">
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
