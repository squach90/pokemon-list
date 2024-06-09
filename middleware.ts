// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Vérifiez si la requête concerne la page admin
  if (url.pathname.startsWith("/admin")) {
    const auth = req.headers.get("authorization");

    // Si l'en-tête Authorization n'est pas présent, demandez une authentification
    if (!auth) {
      return new NextResponse("Auth required", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Secure Area"',
        },
      });
    }

    // Decode base64 string
    const [login, password] = atob(auth.split(" ")[1]).split(":");

    // Vérifiez les informations d'identification
    if (
      !(login === process.env.ADMIN_USER && password === process.env.ADMIN_PASS)
    ) {
      return new NextResponse("Invalid credentials", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Secure Area"',
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
