import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Welcome to the Social Handle Checker API",
    documentation: "/api-docs",
    endpoints: [
      "/api/platforms",
      "/api/check/:username",
      "/api/suggestions/:username",
    ],
    version: "1.0.0",
  });
}
