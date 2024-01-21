import { ROUTES } from "@/app/constants";
import { getUsers } from "@/firebase/db.config";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, pass } = credentials;
        const users = await getUsers();

        const user = users.find(
          (user) => user.email === email && user.pass === pass
        );

        return user || null;
      },
    }),
  ],
  pages: {
    signIn: ROUTES.SIGN_IN,
    signOut: ROUTES.SIGN_OUT,
    newUser: ROUTES.DASHBOARD,
  },
};
