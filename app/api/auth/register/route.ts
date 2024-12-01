import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  const { name, email, password }: { name: string; email: string; password: string } = await req.json();

  // Check if user already exists
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ error: 'User with this email already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'USER',
      },
    });

    return NextResponse.json(user, { status: 201 });

  } catch (error) {
    // Handle Prisma specific errors
    if ((error as any).code === 'P2002') {
      // This error occurs if the email already exists even after the check
      return NextResponse.json({ error: 'User with this email already exists' }, { status: 400 });
    }

    // Handle general errors
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
