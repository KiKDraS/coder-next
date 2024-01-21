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
    newUser: ROUTES.DASHBOARD,
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log(url);
      return baseUrl;
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
};
