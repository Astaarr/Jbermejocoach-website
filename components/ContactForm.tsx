"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      nombre: String(formData.get("nombre") ?? ""),
      email: String(formData.get("email") ?? ""),
      telefono: String(formData.get("telefono") ?? ""),
      objetivo: String(formData.get("objetivo") ?? ""),
      disponibilidad: String(formData.get("disponibilidad") ?? ""),
      mensaje: String(formData.get("mensaje") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario");
      }

      setStatus("success");
      setMessage(
        "Gracias por escribir. Te responderé lo antes posible. Si quieres acelerar el contacto, puedes escribirme ahora por WhatsApp.",
      );
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "Ha ocurrido un error al enviar el formulario. Prueba de nuevo o escríbeme por WhatsApp.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <label className="text-sm font-semibold text-[var(--brand)]">
        Nombre
        <input name="nombre" required className={inputClass} />
      </label>

      <label className="text-sm font-semibold text-[var(--brand)]">
        Email
        <input type="email" name="email" required className={inputClass} />
      </label>

      <label className="text-sm font-semibold text-[var(--brand)]">
        Teléfono o WhatsApp
        <input name="telefono" required className={inputClass} />
      </label>

      <label className="text-sm font-semibold text-[var(--brand)]">
        Objetivo principal
        <input name="objetivo" required className={inputClass} />
      </label>

      <label className="text-sm font-semibold text-[var(--brand)]">
        Disponibilidad semanal
        <input name="disponibilidad" required className={inputClass} />
      </label>

      <label className="text-sm font-semibold text-[var(--brand)]">
        Cuéntame tu situación
        <textarea
          name="mensaje"
          rows={4}
          required
          className={`${inputClass} min-h-28 py-3`}
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 inline-flex h-12 cursor-pointer items-center justify-center rounded-full border-none bg-[var(--brand)] px-5 font-bold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Enviando..." : "Enviar solicitud"}
      </button>

      {message ? (
        <p className={`leading-6 ${status === "error" ? "text-[#9f2222]" : "text-[var(--brand)]"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}

const inputClass =
  "mt-1 block h-11 w-full rounded-[14px] border border-[var(--border)] bg-white px-3 text-[var(--text)] outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[color:rgba(1,23,81,0.18)]";
