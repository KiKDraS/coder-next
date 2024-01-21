import { withAuth } from "next-auth/middleware";
import { ROUTES } from "./app/constants";

export default withAuth({
  pages: {
    signIn: ROUTES.SIGN_IN,
    newUser: ROUTES.DASHBOARD,
  },
});
