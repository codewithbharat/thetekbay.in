// /app/api/auth/register/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  const { name, email, password }: { name: string; email: string; password: string } = await req.json();
  
  const hashedPassword = await bcrypt.hash(password, 10);
  
  try {
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword, role: 'USER' },
    });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });
  }
}
