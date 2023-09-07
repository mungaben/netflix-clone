import { RequestInternal, Awaitable, User, NextAuthOptions } from "next-auth";

import Credentials from "next-auth/providers/credentials";
import NextAuth from "next-auth";

import bcrypt, { compare } from "bcrypt";
import prismaDb from "@/prisma/prismaDb";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
export const authOptions: NextAuthOptions = {
  // route

  // providers credentials
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password required');
        }


        console.log("EMAIL CREDENTIALS", credentials.email);
        

        const user = await prismaDb.user.findUnique({ where: {
          email: credentials.email
        }});

        console.log("USER CREDENTIALS", user);
        

        if (!user || !user.hashedPassword) {
          throw new Error('Email does not exist');
        }

        const isCorrectPassword = await compare(credentials.password, user.hashedPassword);

        if (!isCorrectPassword) {
          throw new Error('Incorrect password');
        }

        return user;
      }
    })
  ],

  pages: {
    signIn: "/AuthUser",
  },
  debug: process.env.NODE_ENV === "development",
  adapter: PrismaAdapter(prismaDb),
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
