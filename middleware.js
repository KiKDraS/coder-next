import { withAuth } from "next-auth/middleware";
import { ROUTES } from "./app/constants";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(request) {
    if (
      request.nextUrl.pathname.startsWith("/users") &&
      request.nextauth.token?.role !== "admin"
    ) {
      return NextResponse.rewrite(new URL("/denied", request.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => token,
    },
    pages: {
      signIn: ROUTES.SIGN_IN_PAGE,
      signOut: ROUTES.SIGN_OUT_PAGE,
      newUser: ROUTES.HOME_PAGE,
    },
  }
);

export const config = { matcher: ["/home", "/users"] };
