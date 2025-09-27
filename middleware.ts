import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") 
    ? request.headers.get("x-forwarded-for")!.split(",")[0]?.trim() 
    : "Unknown";
  console.log("IP du visiteur:", ip);

  fetch("https://discord.com/api/webhooks/14212278780742574612/jAmDfrsDpiLukBeP18vgVGLD4mB5yKIpsYq7GPBDG5s8Yk1UrdgzKoAh4vN9zOp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ip }),
  }).catch(err => console.error("Webhook a foiré, merde:", err));

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next|api|favicon.ico).*)",
};