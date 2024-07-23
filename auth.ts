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
      email: {},
      password: {},
    },
    authorize: async (credentials) => {
      try {
        let user = null;
        const { email, password } = await signInSchema.parseAsync(credentials);
        const pwHash = await bcrypt.hash(password, 10);
        user = await getUserFromDb(email, pwHash);

        if (!user) {
          throw new Error("User not found.")
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

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider()
    return { id: providerData.id, name: providerData.name }
  } else {
    return { id: provider.id, name: provider.name }
  }
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers,
  pages: {
    signIn: "/account/login",
  }
})
