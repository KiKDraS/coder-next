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

        return user
          ? {
              ...user,
              name: user?.username,
            }
          : null;
      },
    }),
  ],
  pages: {
    signIn: ROUTES.SIGN_IN_PAGE,
    signOut: ROUTES.SIGN_OUT_PAGE,
    newUser: ROUTES.HOME_PAGE,
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    },
  },
};
