import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { db } from "@/src/drizzle/schema";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getUserFromDb(email: string, password: string) {
  return db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, email) && eq(users.password, password),
  });
}