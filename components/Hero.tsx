export function Hero() {
  return (
    <section
      className="relative isolate grid min-h-screen w-full place-items-center overflow-hidden px-4 py-16 text-white [background-position:center_38%] md:[background-position:center_28%]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(2,8,28,.68), rgba(2,8,28,.78)), radial-gradient(circle at 20% 20%, rgba(1,23,81,.38), transparent 50%), radial-gradient(circle at 86% 30%, rgba(1,23,81,.28), transparent 50%), url('/hero-bg.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="w-[min(940px,90vw)] text-center text-white">
        <p className="text-[0.73rem] font-bold uppercase tracking-[0.24em] text-white/70">
          COACH ONLINE PARA CAMBIO FÍSICO REAL
        </p>
        <h1 className="mt-4 text-balance text-[clamp(2.2rem,8vw,5.2rem)] leading-[0.96] text-white uppercase drop-shadow-[0_10px_22px_rgba(0,0,0,.35)]">
          TU MEJOR VERSIÓN NO ES SUERTE,
          <br />
          <span className="text-[#8fb6ff]">ES UNA DECISIÓN.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-[74ch] text-base leading-7 text-white/85">
          Deja atrás la improvisación. Te ayudo a transformar tu físico con una
          metodología cercana, sin dietas extremas y con seguimiento continuo.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            className="inline-flex h-[52px] items-center justify-center rounded-md bg-[linear-gradient(130deg,#011751,#244abf)] px-6 text-sm font-bold uppercase tracking-[0.03em] text-white shadow-[0_14px_30px_rgba(1,23,81,.34)] transition hover:-translate-y-0.5"
            href="#formulario"
          >
            Empieza tu transformación
          </a>
          <a
            className="inline-flex h-[52px] items-center justify-center rounded-md border border-white/70 px-6 text-sm font-bold uppercase tracking-[0.03em] text-white transition hover:-translate-y-0.5"
            href="https://wa.me/34622865708?text=Hola%2C%20vengo%20desde%20tu%20web.%20Me%20interesa%20comenzar%20un%20proceso%20de%20entrenamiento%2Fcoaching.%20%C2%BFPodemos%20hablar%20de%20objetivos%20y%20disponibilidad%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conoce mi enfoque
          </a>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex min-h-16 flex-wrap items-center justify-center gap-3 bg-[linear-gradient(90deg,#011751,#173594,#011751)] px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.04em] text-white md:gap-12 md:text-[0.8rem]">
        <p className="whitespace-nowrap">Plan personalizado</p>
        <p className="whitespace-nowrap">Seguimiento semanal</p>
        <p className="whitespace-nowrap">Entrenamiento + nutrición</p>
      </div>
    </section>
  );
}
