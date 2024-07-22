import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { reports } from "@/drizzle/schema";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

interface Player {
  name: string;
  price: number;
  position: string;
  description?: string;
}


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const db = drizzle(sql);
