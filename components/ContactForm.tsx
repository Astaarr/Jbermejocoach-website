"use client";

import { FormEvent, type CSSProperties, useState } from "react";

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
        "Gracias por escribir. Te respondere lo antes posible. Si quieres acelerar el contacto, puedes escribirme ahora por WhatsApp.",
      );
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "Ha ocurrido un error al enviar el formulario. Prueba de nuevo o escribeme por WhatsApp.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "grid", gap: "0.8rem" }}>
      <label>
        Nombre
        <input name="nombre" required style={inputStyle} />
      </label>

      <label>
        Email
        <input type="email" name="email" required style={inputStyle} />
      </label>

      <label>
        Telefono o WhatsApp
        <input name="telefono" required style={inputStyle} />
      </label>

      <label>
        Objetivo principal
        <input name="objetivo" required style={inputStyle} />
      </label>

      <label>
        Disponibilidad semanal
        <input name="disponibilidad" required style={inputStyle} />
      </label>

      <label>
        Cuentame tu situacion
        <textarea name="mensaje" rows={4} required style={inputStyle} />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        style={{
          height: "48px",
          borderRadius: "999px",
          border: "none",
          background: "var(--brand)",
          color: "#fff",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        {status === "sending" ? "Enviando..." : "Enviar solicitud"}
      </button>

      {message ? (
        <p
          style={{
            color: status === "error" ? "#9f2222" : "var(--brand)",
            lineHeight: 1.6,
          }}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

const inputStyle: CSSProperties = {
  marginTop: "0.35rem",
  width: "100%",
  borderRadius: "14px",
  border: "1px solid var(--border)",
  background: "#fff",
  height: "44px",
  padding: "0 0.8rem",
  color: "var(--text)",
};
