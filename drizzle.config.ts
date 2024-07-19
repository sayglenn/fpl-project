import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql", 
  schema: "./src/drizzle/schema.ts",
  out: "./src/drizzle",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  }
});