import { connectDB } from "@/app/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";

const handler = NextAuth({
    session: {
        strategy:'jwt',
        maxAge: 30*24*60*60
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email :{},
                password:{}
            },
            
            async authorize(credentials) {
                const {email, password} = credentials
                if (!email || !password) {
                    return null
                }
                const db = await connectDB()
                const currentUser = await db.collection('users').findOne({ email })
                if (!currentUser) {
                    return null
                }
                const passwordMatched = bcrypt.compareSync(password, currentUser.password);
                if (!passwordMatched) {
                    return null
                }
                return currentUser
            }
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET
          })
    ],
    callbacks:{},
    pages:{
        signIn:'/signin'
    }

})

export {handler as GET, handler as POST}