import { NextRequest, NextResponse } from 'next/server';
import { db, users } from "@/src/drizzle/schema";

const bcrypt = require('bcrypt');

export async function POST(request : NextRequest) {
  const body = await request.json();
  const { name, email, password } = body;
  
  const existingUser = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, email),
  });

  if (existingUser) {
    return new NextResponse("User already exists. Try again with another email.", {status: 400});
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = await db.insert(users).values({
    name: name,
    email: email,
    password: hashed,
    role: 'user',
  });

  return NextResponse.json(user);
}