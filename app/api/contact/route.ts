import { NextResponse } from "next/server";

type ContactPayload = {
  nombre?: string;
  email?: string;
  telefono?: string;
  objetivo?: string;
  disponibilidad?: string;
  mensaje?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

  const requiredFields = [
    payload.nombre,
    payload.email,
    payload.telefono,
    payload.objetivo,
    payload.disponibilidad,
    payload.mensaje,
  ];

  if (requiredFields.some((field) => !field || !field.trim())) {
    return NextResponse.json(
      { ok: false, error: "Faltan campos obligatorios" },
      { status: 400 },
    );
  }

  const resendKey = process.env.RESEND_API_KEY;

  if (!resendKey) {
    return NextResponse.json({
      ok: true,
      pending: true,
      message:
        "TODO: configurar RESEND_API_KEY y envío real a jbermejo.training@gmail.com",
    });
  }

  return NextResponse.json({
    ok: true,
    pending: true,
    message:
      "TODO: implementar envío real con Resend cuando se añada la API key.",
  });
}
