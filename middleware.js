import { withAuth } from "next-auth/middleware";
import { ROUTES } from "./app/constants";

export default withAuth({
  pages: {
    signIn: ROUTES.SIGN_IN_PAGE,
    signOut: ROUTES.SIGN_OUT_PAGE,
    newUser: ROUTES.HOME_PAGE,
  },
});

export const config = { matcher: ["/home", "/users"] };
