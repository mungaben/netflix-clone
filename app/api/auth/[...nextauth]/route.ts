import { RequestInternal, Awaitable, User, NextAuthOptions } from "next-auth";

import Credentials from "next-auth/providers/credentials";
import NextAuth from "next-auth"

import bcrypt from "bcrypt";
import prismaDb from "@/prisma/prismaDb";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
export const authOptions: NextAuthOptions={
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
                    placeholder: "@gmail.com"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize(credentials) {
                // check credentials if available
                if(credentials?.email === "mungaben21@gmail.com" && credentials.password === "admin"){
                    const user: User = {
                        name: "Admin",
                        email: "mungaben21@gmail.com",
                        image: "/default-green.png",
                        id: "admin"
                    }
                    return user;
                }
                // return null;

                // check email
                if(!credentials?.email){
                    throw new Error("Username is required");
                }
                // check password
                if(!credentials?.password){
                    throw new Error("Password is required");
                }
                

                // check credentials if available
                 
                const user= await prismaDb.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if(!user || !user.hashedPassword){
                    throw new Error("user Email Does not exist");
                }

                const isPasswordcorrect= await bcrypt.compare(credentials.password, user.hashedPassword);
                if(!isPasswordcorrect){
                    throw new Error("Invalid Password");
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

