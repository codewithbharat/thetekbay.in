// /app/api/auth/login/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  const { email, password }: { email: string; password: string } = await req.json();
  
  const user = await prisma.user.findUnique({ where: { email } });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    return NextResponse.json({ token, user }, { status: 200 });
  } else {
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
  }
}
