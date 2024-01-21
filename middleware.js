import { withAuth } from "next-auth/middleware";
import { ROUTES } from "./app/constants";

export default withAuth({
  pages: {
    signIn: ROUTES.SIGN_IN,
    signOut: ROUTES.SIGN_OUT,
    newUser: ROUTES.DASHBOARD,
  },
});

export const config = { matcher: ["/dashboard", "/admin"] };
