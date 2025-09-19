import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    emailPassword: process.env.EMAIL_PASSWORD ? "OK" : "undefined"
  });
}
