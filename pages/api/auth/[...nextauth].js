import NextAuth from "next-auth";
import FortyTwoProvider from "next-auth/providers/42-school";

export const authOptions = {
  providers: [
    FortyTwoProvider({
      clientId: process.env.NEXT_PUBLIC_FC_AUTH_ID,
      clientSecret: process.env.NEXT_PUBLIC_FC_AUTH_SECRET,
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
};

export default NextAuth(authOptions);
