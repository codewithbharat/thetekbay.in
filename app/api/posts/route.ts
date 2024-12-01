import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Assuming prisma instance is exported from lib/prisma
import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

// CORS configuration
export const cors = {
  origin: '*',
  headers: 'Content-Type',
  methods: 'POST',
};

// Utility function to verify the JWT and extract user info
const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return decoded as { id: number; role: string }; // Assuming the token contains the user ID and role
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

export async function POST(req: NextRequest) {
  // Get the authorization token from the request headers
  const token = req.headers.get('Authorization')?.split(' ')[1]; // Bearer <token>

  if (!token) {
    return NextResponse.json({ error: 'Authorization token is required' }, { status: 401 });
  }

  // Verify the token and extract the user ID
  let userId;
  try {
    const decoded = verifyToken(token);
    userId = decoded.id;
  } catch (error) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }

  // Get the post data from the request body
  const { title, content, categoryId, imageUrl }: { title: string; content: string; categoryId: number; imageUrl?: string } = await req.json();

  try {
    // Create the post and associate the user as the author
    const post = await prisma.post.create({
      data: {
        title,
        content,
        categoryId,
        imageUrl,
        authorId: userId, // Use the user ID from the token as the authorId
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
