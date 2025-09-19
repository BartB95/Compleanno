import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, surname, menu } = body;

    if (!name || !surname) {
      return NextResponse.json({ message: "Nome mancante" }, { status: 400 });
    }

    if (!process.env.EMAIL_PASSWORD) {
      console.error("EMAIL_PASSWORD non impostata!");
      return NextResponse.json({ message: "Password email non configurata" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.libero.it",
      port: 465, // oppure 587
      secure: true, // true per 465, false per 587
      auth: {
        user: "bartolomeo.braccio@libero.it",
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: "bartolomeo.braccio@libero.it",
      to: "bartolomeo.braccio@libero.it",
      subject: "RSVP Compleanno Rossella",
      text: `✅ Nuova conferma:\n\n👤 ${name} ${surname}\n🍽️ Menù scelto: ${menu}`,
    });

    console.log("Mail inviata:", name);
    return NextResponse.json({ message: "Mail inviata!" });
  } catch (error) {
    console.error("Errore invio mail:", error);
    return NextResponse.json({ message: "Errore invio mail", error }, { status: 500 });
  }
}
