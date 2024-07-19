import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { reports } from "@/drizzle/schema";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const db = drizzle(sql)

