import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "@/src/lib/zod";
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@/src/drizzle/schema";
import { ZodError } from "zod";
import { getUserFromDb } from "@/src/lib/utils";
import type { Provider } from "next-auth/providers"
const bcrypt = require('bcrypt');

const providers: Provider[] = [
  Credentials({
    credentials: {
      email: { label: "Email", type: "email"},
      password: { label: "Password", type: "password"},
    },
    authorize: async (credentials) => {
      try {
        let user = null;
        const { email, password } = signInSchema.parse(credentials);
        user = await getUserFromDb(email);

        if (!user) {
          throw new Error("User not found.")
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          throw new Error("Invalid credentials.");
        }
        
        return user;
      } catch (error) {
        if (error instanceof ZodError) {
          return null;
        }
        return null;
      }
    },
  }),
]

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers,
  pages: {
    signIn: "/account/login",
  },
  session: {
    strategy: "jwt",
  }
})
