import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import {
  pgTable,
  serial,
  text,
  numeric,
  pgEnum,
  date,
} from 'drizzle-orm/pg-core';

export const reportEnum = pgEnum('type', ['gw', 'dd', 'ff']);

export const reports = pgTable(
  'reports', 
  {
    id: serial('id').primaryKey(),
    type: reportEnum('type').notNull(),
    week: numeric('week').notNull(),
    date: date('date').notNull(),
    content: text('content').notNull(),
  }
)